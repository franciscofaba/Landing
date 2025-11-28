import "./home.css";
import Bottomfooter from "./components/footer";
import Navbar from "./components/navbar";
import NarrativeSection from "./components/NarrativeSection";
import AppHero from "./components/apphero";
import Feature from "./components/Feature";
import LandingPage from "./components/landing";
import SuperpowersSection from "./components/Superpower";
import Testimonials from "./components/Testimonials";
import SinglePricing from "./components/Singlepricing";
function Home() {
  return (
    <div className="contenedor">
      <Navbar></Navbar>
      <LandingPage></LandingPage>
      <NarrativeSection></NarrativeSection>
      <AppHero></AppHero>
      <Feature></Feature>
      <SuperpowersSection></SuperpowersSection>
      <Testimonials></Testimonials>
      <SinglePricing></SinglePricing>
      <Bottomfooter></Bottomfooter>

    </div>
  );
}

export default Home;
