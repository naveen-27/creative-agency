import React, { FC } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Design from "./components/Design";
import Services from "./components/Services";
import Approach from "./components/Approach";

const App: FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Design />
      <Approach />
      <Services />
      <Footer />
    </>
  );
};

export default App;
