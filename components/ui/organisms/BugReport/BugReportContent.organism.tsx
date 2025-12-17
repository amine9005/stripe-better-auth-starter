"use client";
import { FieldGroup } from "@/components/ui/atoms/field/field";

import { FormType } from "@/components/validations/bugReport.zod";
import InputField from "./fields/InputField.organism";
import TextAreaField from "./fields/TextAreaField.organism";

interface Props {
  form: FormType;
}

const BugReportContent = ({ form }: Props) => {
  const handle_submit = () => {
    console.log(" submitting");
  };

  return (
    <form id="form-rhf-demo" onSubmit={form?.handleSubmit(handle_submit)}>
      <FieldGroup>
        <InputField form={form} />
        <TextAreaField form={form} />
      </FieldGroup>
    </form>
  );
};

export default BugReportContent;
