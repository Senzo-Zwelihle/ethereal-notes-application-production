import Footer from "@/components/global/footer";
import Navigationbar from "@/components/global/navigationbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navigationbar />
      {children}
      <Footer />
    </main>
  );
}
