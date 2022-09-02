import React from "react";
import Achievement from "./Achievement/Achievement";
import GraphicKhabar from "./GraphicKhabar/GraphicKhabar";
import KycPayment from "./Kyc-Payment/Kyc-Payment";
import MiniServices from "./MiniServices/MiniServices";
import Notice from "./Notice/Notice";
import Services from "./Services/Services";
import Testomonials from "./Testonomials/Testonomials";
import Carousel from "./Carousel/Carousel";
import HeaderText from "./HeaderText/HeaderText";
const Home = () => {
  return (
    <>
      <div className="mt-4">
        <KycPayment />
        <HeaderText />

        <header className="max-w gap-4 lg:flex h-full w-full block">
          <div className="lg:flex-row flex flex-col flex-1 gap-4 px-2 lg:px-6">
            <Carousel />
            <Notice />
          </div>
        </header>
        <MiniServices />
        <Services />
        <Achievement />
        <GraphicKhabar />
        <Testomonials />
      </div>
    </>
  );
};

export default Home;
