"use client";
import FormLayout from "../../layouts/Form.layout";
import { useBugReportForm } from "@/components/validations/bugReport.zod";
import { memo } from "react";
import { BugReportFormCard } from "@/components/ui/organisms/BugReport/BugReportCard.organism";

const BugReportFormActions = () => {
  const form = useBugReportForm();

  return (
    <FormLayout>
      {" "}
      <BugReportFormCard form={form} />
    </FormLayout>
  );
};

export default memo(BugReportFormActions);
