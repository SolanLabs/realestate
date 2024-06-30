import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/HeroNew";
import ChooseLocation from "./components/ChooseLocation";
import RecommendedProperties from "./components/RecommendedProperties";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        {/* <Benefits /> */}
        {/* <Collaboration /> */}
        {/* <Services /> */}
        <ChooseLocation />
        <RecommendedProperties />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
