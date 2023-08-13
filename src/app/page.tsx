import Footer from "@/components/Footer/Footer";
import Section1 from "@/components/Section1/Section1";
import Section2 from "@/components/Section2/Section2";
import Section3 from "@/components/Section3/Section3";
import Section4 from "@/components/Section4/Section4";
import Section5 from "@/components/Section5/Section5";
import Section6 from "@/components/Section6/Section6";
import Section7 from "@/components/Section7/Section7";
import "animate.css";
export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <div className="animate__animated animate__backInUp">
        <Section1 />
      </div>
      <div className="animate__animated animate__backInUp">
        <Section2 />
      </div>
      <div className="animate__animated animate__backInUp">
        <Section4 />
      </div>
      <div className="animate__animated animate__backInUp">
        <Section3 />
      </div>
      <div className="animate__animated animate__backInUp">
        <Section5 />
      </div>
      <div className="animate__animated animate__backInUp">
        <Section6 />
      </div>
      <Section7 />
      <Footer />
    </main>
  );
}
