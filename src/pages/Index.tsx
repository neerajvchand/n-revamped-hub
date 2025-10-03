import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Policies from "@/components/Policies";
import GetInvolved from "@/components/GetInvolved";
import News from "@/components/News";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <main>
        <Hero />
        <About />
        <Policies />
        <GetInvolved />
        <News />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
