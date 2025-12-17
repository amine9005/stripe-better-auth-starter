import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/atoms/field/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/atoms/input-group/input-group";
import { FormType } from "@/components/validations/bugReport.zod";
import { Controller } from "react-hook-form";

interface Props {
  form: FormType;
}

const TextAreaField = ({ form }: Props) => {
  return (
    <Controller
      name="description"
      control={form?.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor="form-rhf-demo-description">
            Description
          </FieldLabel>
          <InputGroup>
            <InputGroupTextarea
              {...field}
              id="form-rhf-demo-description"
              placeholder="I'm having an issue with the login button on mobile."
              rows={6}
              className="min-h-24 resize-none"
              aria-invalid={fieldState.invalid}
            />
            <InputGroupAddon align="block-end">
              <InputGroupText className="tabular-nums">
                {field.value.length}/100 characters
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <FieldDescription>
            Include steps to reproduce, expected behavior, and what actually
            happened.
          </FieldDescription>
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};

export default TextAreaField;
