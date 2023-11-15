import AboutComponent from "./components/About/About";
import FooterComponent from "./components/Footer/Footer";
import HeroComponent from "./components/Hero/Hero";
import NavbarComponent from "./components/Navbar/Navbar";
import ServiceComponent from "./components/Services/Services";
import TeamsComponent from "./components/Teams/Teams";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <NavbarComponent />
        <HeroComponent />
        <AboutComponent />
        <ServiceComponent />
        <TeamsComponent />
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
