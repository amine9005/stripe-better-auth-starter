import { useForm } from "react-hook-form";
import { SignInSchemaType, signInSchema } from "@/validations/user.zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const useSignIn = () => {
  const form = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return form;
};
