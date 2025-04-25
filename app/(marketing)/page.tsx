import Features from "@/components/global/features";
import Hero from "@/components/global/hero";
import Overview from "@/components/global/overview";
import Pricing from "@/components/global/pricing";


export default function Home() {
  return (
    <div>
      <main className="relative space-y-48 mb-48">
        <Hero/>
        <Overview/>
        <Features/>
        <Pricing/>
        
      </main>
    </div>
  );
}
