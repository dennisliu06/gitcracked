import NavBar from "@/components/navbar";
import Pricing from "../../../components/Pricing";

export default function PricingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <NavBar />
      <div className="flex-1">
        <div className="w-full py-12 md:py-24 lg:py-32 dark:bg-slate-950 ">
          <Pricing />
        </div>
      </div>
    </div>
  );
}
