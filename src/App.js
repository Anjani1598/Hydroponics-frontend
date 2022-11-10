import "./App.css";
import AquaponicsSystem from "./Components/AquaponicsSystem";
import Cart from "./Components/Cart";
import HeroComponent from "./Components/HeroComponent";
import HydroponicsComponent from "./Components/HydroponicsComponent";
import Navigationbar from "./Components/Navbar";
import NavTabs from "./Components/NavTabs";
import { BrowserRouter } from "react-router-dom";
import ApplicationRouts from "./Routes/ApplicationRouts";


function App() {
  return (
    <>
      <BrowserRouter>

      <ApplicationRouts />

      </BrowserRouter>
    </>
  );
}

export default App;
