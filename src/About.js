import React from "react";
import Navigation from "../src/Navigation";
import Logo from "./logo";

function About() {
  return (
    <div className="about">
      <Navigation />
      <Logo />
      Le projet est basé sur les informations de 250 pays que j'ai choisi pour que je puisse montrer le drapeau, la capitale et le nombre de la population. Pour faire, j'ai travaillé avec le Rest Api, SCSS, Javascript et React.
    </div>
  );
}

export default About;
