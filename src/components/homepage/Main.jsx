import { Container } from "@mui/material";
import React from "react";
import Gem from "../layout/Gem";
import Abundent from "../layout/Abundent";
import Banner from "../layout/Banner";
import Services from "../layout/Services";
import Support from "../layout/Support";
import Slider from "../layout/Slider";

const Main = () => {
  return (
    <Container>
      <Slider />
      <Gem />
      <Abundent />
      <Banner />
      <Services />
      <Support />
    </Container>
  );
};

export default Main;
