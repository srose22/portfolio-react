import "./App.css";
import Navbar from "./components/Header";
import HomeSection from "./components/HomeSection";
import MenuSection from "./components/MenuSection";
import OurStorySection from "./components/OurStorySection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeSection />
      <MenuSection />
      <OurStorySection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;
