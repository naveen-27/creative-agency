import React, { FC } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Design from "./components/Design";

const App: FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Design />
      <Footer />
    </>
  );
};

export default App;
