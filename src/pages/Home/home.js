import "./home.css";
import Bottomfooter from "./components/footer";
import Navbar from "./components/navbar";
import AppHero from "./components/apphero";
import Feature from "./components/Feature";
import LandingPage from "./components/landing";
import SuperpowersSection from "./components/Superpower";
import Testimonials from "./components/Testimonials";
import SinglePricing from "./components/Singlepricing";
function Home() {
  return (
    <div className="">
          <Navbar></Navbar>
          <LandingPage></LandingPage>
          <AppHero></AppHero>
          <Feature></Feature>
          <SuperpowersSection></SuperpowersSection>
          <Testimonials></Testimonials>
          <SinglePricing></SinglePricing>
          <Bottomfooter></Bottomfooter>
      <body>
        <div>
        
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      </body>
    </div>
  );
}

export default Home;
