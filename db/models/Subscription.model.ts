import mongoose, { HydratedDocument, InferSchemaType } from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    plan: String,
    subscriptionPeriod: String,
    startDate: { type: Date, default: Date.now },
    endDate: Date,
  },
  { timestamps: true },
);

const SubscriptionModel = mongoose.model("Subscription", subscriptionSchema);
export default SubscriptionModel;
export type Subscription = InferSchemaType<typeof subscriptionSchema>;
export type SubscriptionDocument = HydratedDocument<Subscription>;
