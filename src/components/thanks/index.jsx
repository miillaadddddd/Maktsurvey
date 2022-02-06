import React from "react";
import Lottie from "react-lottie";
import animationData from "../../../src/images/star-in-hand-baby-astronaut.json";
function Tanks() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  return (
    <div>
      <div className="flex justify-center pt-2">
        <span className="font-black">خیلی ممنون که شرکت کردی</span>
      </div>
      <Lottie options={defaultOptions} />
    </div>
  );
}

export default Tanks;
