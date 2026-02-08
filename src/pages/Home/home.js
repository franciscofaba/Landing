import "./home.css";
import Bottomfooter from "./components/footer";
import Navbar from "./components/navbar";
import AppHero from "./components/apphero";
import Feature from "./components/Feature";
import LandingPage from "./components/landing";
import SuperpowersSection from "./components/Superpower";
import Testimonials from "./components/Testimonials";
import SinglePricing from "./components/Singlepricing";
import HowItWorks from "./components/HowItWorks"; // <--- 1. IMPORTAR AQUI
function Home() {
  return (
    <>
      <Navbar></Navbar>
      <LandingPage></LandingPage>
      <AppHero></AppHero>
      <Feature></Feature>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="features">
        <SuperpowersSection></SuperpowersSection>
      </section>
      <Testimonials></Testimonials>
      <section id="pricing">
        
        <SinglePricing></SinglePricing>
      </section>
      <Bottomfooter></Bottomfooter>
<div className="wave-container"> 
  <div className="wave"></div>
  <div className="wave"></div>
  <div className="wave"></div>
</div>
    </>
  );
}

export default Home;
