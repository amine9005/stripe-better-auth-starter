"use client";

import { redirect } from "next/navigation";
import { memo } from "react";
import { Button } from "@/components/ui/atoms/button/button";
import { getUser } from "@/helpers/authClientHelper.helper";

interface Props {
  href: string;
  paymentLink?: string;
  text: string;
}

const user = await getUser();

const handle_click = (href: string, paymentLink: string | undefined) => {
  if (paymentLink) {
    if (user) {
      redirect(paymentLink);
    } else {
      localStorage.setItem("stripe_payment_link", paymentLink);
      redirect("/sign-in");
    }
  }
  redirect(href);
};

const PaymentLinkMolecule = ({ href, paymentLink, text }: Props) => {
  return (
    <Button onClick={() => handle_click(href, paymentLink)}>{text}</Button>
  );
};

export default memo(PaymentLinkMolecule);
