import React from "react";
import AquaponicsSystem from "../Components/AquaponicsSystem";
import HeroComponent from "../Components/HeroComponent";
import HydroponicsComponent from "../Components/HydroponicsComponent";
import Navigationbar from "../Components/Navbar";
import NavTabs from "../Components/NavTabs";

const HomePage = () => {
  return (
    <>
      <Navigationbar />
      <NavTabs />
      <HeroComponent />
      <HydroponicsComponent />
      <AquaponicsSystem />
    </>
  );
};

export default HomePage;
