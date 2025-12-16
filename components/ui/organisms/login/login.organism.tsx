import { Button } from "@/components/ui/atoms/button/button";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import type { Input } from "@/components/ui/atoms/input/input";
import type { Label } from "@/components/ui/atoms/label/label";
import type { P } from "@/components/ui/atoms/text/Text";
import LabeledInputWithMessage from "@/components/ui/molecules/LabeledInputWithMessage.molecule";

interface Props {
  titleProps?: React.ComponentProps<typeof H2>;
  titleChildren?: React.ReactNode;

  emailLabelProps?: React.ComponentProps<typeof Label>;
  emailLabelChildren?: React.ReactNode;
  emailTextProps?: React.ComponentProps<typeof P>;
  emailTextChildren?: React.ReactNode;
  emailInputProps?: React.ComponentProps<typeof Input>;

  passwordLabelProps?: React.ComponentProps<typeof Label>;
  passwordLabelChildren?: React.ReactNode;
  passwordTextProps?: React.ComponentProps<typeof P>;
  passwordTextChildren?: React.ReactNode;
  passwordInputProps?: React.ComponentProps<typeof Input>;

  submitButtonProps?: React.ComponentProps<typeof Button>;
  submitButtonChildren?: React.ReactNode;
}

const LoginForm = ({ ...props }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center p-4 lg:p-8 space-y-4 border max-w-xl rounded-xl">
      <H2 {...props.titleProps}>{props.titleChildren}</H2>
      <LabeledInputWithMessage
        id="email"
        labelChildren={"Email"}
        labelProps={props.emailLabelProps}
        textChildren={props.emailTextChildren}
        textProps={props.emailTextProps}
        inputProps={props.emailInputProps}
      />
      <LabeledInputWithMessage
        id="password"
        labelChildren={"Password"}
        labelProps={props.passwordLabelProps}
        textChildren={props.passwordTextChildren}
        textProps={props.passwordTextProps}
        inputProps={props.passwordInputProps}
      />
      <Button {...props.submitButtonProps}>{props.submitButtonChildren}</Button>
    </div>
  );
};

export default LoginForm;

export type { Props };
