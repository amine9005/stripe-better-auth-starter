import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/atoms/field/field";
import { Input } from "@/components/ui/atoms/input/input";
import { FormType } from "@/components/validations/bugReport.zod";
import { Controller } from "react-hook-form";

interface Props {
  form: FormType;
}
const InputField = ({ form }: Props) => {
  return (
    <Controller
      name="title"
      control={form?.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor="form-rhf-demo-title">Bug Title</FieldLabel>
          <Input
            {...field}
            id="form-rhf-demo-title"
            aria-invalid={fieldState.invalid}
            placeholder="Login button not working on mobile"
            autoComplete="off"
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};

export default InputField;
