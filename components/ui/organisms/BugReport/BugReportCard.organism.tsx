"use client";
import { Button } from "@/components/ui/atoms/button/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/atoms/card/card";
import { Field } from "@/components/ui/atoms/field/field";
import BugReportContent from "./BugReportContent.organism";
import { FormType } from "@/components/validations/bugReport.zod";

interface Props {
  form: FormType;
}

export function BugReportFormCard({ form }: Props) {
  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Bug Report</CardTitle>
        <CardDescription>
          Help us improve by reporting bugs you encounter.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <BugReportContent form={form} />
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form?.reset()}>
            Reset
          </Button>
          <Button type="submit" form="form-rhf-demo">
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
