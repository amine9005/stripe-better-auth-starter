"use client";
import FormLayout from "../../layouts/Form.layout";
import { SignInSchemaType } from "@/validations/user.zod";
import { memo } from "react";
import { useSignIn } from "@/hooks/useSignIn.hook";
import LoginFormCard from "../../organisms/login/LoginFormCard.organism";

const SignInCardAction = () => {
  const form = useSignIn();
  const card = { title: "Welcome back, Login", description: "" };

  const handle_submit = (formData: SignInSchemaType) => {
    console.log(JSON.stringify(formData));
  };

  const handle_reset = () => {
    form.reset();
  };

  return (
    <FormLayout>
      {" "}
      <LoginFormCard
        form={form}
        card={card}
        formName="sign-in"
        handle_submit={handle_submit}
        handle_reset={handle_reset}
      />
    </FormLayout>
  );
};

export default memo(SignInCardAction);
