import "./App.css";
import Navbar from "./components/Header";
import HomeSection from "./components/HomeSection";
import MenuSection from "./components/MenuSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeSection />
      <MenuSection />
    </div>
  );
}

export default App;
