import React from "react";
import Navigation from "../src/Navigation";
import Countries from "./Countries";
import Logo from "./logo";

function Home() {
  return (
    <div className="home">
      <Navigation />
      <Logo />
      <Countries />
    </div>
  );
}

export default Home;
