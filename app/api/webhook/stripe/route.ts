import { stripeClient } from "@/lib/stripe";
import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import { getClient } from "@/db/mongoose";

const db = await getClient();

const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  let event: Stripe.Event;

  try {
    event = stripeClient.webhooks.constructEvent(body, sig, WEBHOOK_SECRET);
  } catch (error) {
    console.log("web signature verification failed", error);
    return NextResponse.json(
      { success: false, message: "Web signature verification failed", error },
      { status: 400 },
    );
  }

  try {
    switch (event.type) {
      case "checkout.session.completed":
        const session = await stripeClient.checkout.sessions.retrieve(
          event.data.object.id,
          {
            expand: ["line_items"],
          },
        );
        const customerId = session.customer as string;
        const customerDetails = session.customer_details;

        if (customerDetails?.email) {
          const user = await db
            .collection("user")
            .findOne({ email: customerDetails.email });
          if (!user) {
            // TODO is this the best you can do ?
            throw new Error("User not found");
          }

          if (!user.customerId) {
            await db
              .collection("user")
              .updateOne({ id: user._id }, { $set: { customerId } });
          }

          const lineItems = session.line_items?.data || [];

          for (const items of lineItems) {
            const priceId = items.price?.id;
            const isSubscription = items.price?.type === "recurring";

            if (isSubscription) {
              const endDate = new Date();

              if (priceId === process.env.STRIPE_PERSONAL_YEARLY_PRICE_ID) {
                endDate.setFullYear(endDate.getFullYear() + 1);
              } else if (
                priceId === process.env.STRIPE_PERSONAL_MONTHLY_PRICE_ID
              ) {
                endDate.setMonth(endDate.getMonth() + 1);
              } else {
                throw new Error("Invalid priceId");
              }
            } else {
            }
          }
        }
    }
  } catch (error) {}
}
