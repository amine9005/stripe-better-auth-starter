import Hero from "@/components/ui/displays/Hero";
import LoginTemplate from "@/components/ui/displays/login/login.display";
import { Pricing } from "@/components/ui/displays/Pricing";
import LabeledInputWithMessage from "@/components/ui/molecules/LabeledInputWithMessage.molecule";

export default function Home() {
  return (
    <main>
      {/* <Hero />
      <Pricing /> */}
      {/* <LoginTemplate /> */}
      <LabeledInputWithMessage id={"1"} />
    </main>
  );
}
