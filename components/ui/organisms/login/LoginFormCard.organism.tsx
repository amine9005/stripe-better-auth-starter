"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/atoms/card/card";
import LoginFormContent from "./LoginFormContent.organism";
import { SignInFormType, SignInSchemaType } from "@/validations/user.zod";
import { memo } from "react";
import { Button } from "@/components/ui/atoms/button/button";
import { H2 } from "@/components/ui/atoms/heading/heading2";

interface Card {
  title?: React.ReactNode;
  description?: React.ReactNode;
}

interface Props {
  form: SignInFormType;
  card: Card;
  formName: string;
  handle_submit: (formData: SignInSchemaType) => void;
  handle_reset: () => void;
}

const LoginFormCard = ({ form, card, formName, handle_submit }: Props) => {
  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle className="flex justify-center items-center">
          <H2 size={"xl"}>{card.title}</H2>
        </CardTitle>
        <CardDescription>{card.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <LoginFormContent
          form={form}
          formName={formName}
          handle_submit={handle_submit}
        />
      </CardContent>
      <CardFooter className="flex justify-center items-center">
        <Button type="submit" form={`form-${formName}`} width={"md"}>
          Login{" "}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default memo(LoginFormCard);
