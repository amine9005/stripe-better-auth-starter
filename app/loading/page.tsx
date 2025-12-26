import { H2 } from "@/components/ui/atoms/heading/heading2";
import { getUser } from "@/helpers/authHelper.helper";
import { Loader } from "lucide-react";
import { redirect } from "next/navigation";

if (localStorage.getItem("stripe_payment_link") && (await getUser())) {
} else if (localStorage.getItem("stripe_payment_link")) {
  redirect("/sign-up");
}
const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Loader className="size-15 animate-spin" />;
      <H2 size={"lg"}>Loading...</H2>
    </div>
  );
};

export default LoadingPage;
