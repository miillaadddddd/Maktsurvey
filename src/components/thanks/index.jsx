import React from "react";
import Lottie from "react-lottie";
import animationData from "../../../src/images/star-in-hand-baby-astronaut.json";
function Tanks() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  // #qtest
  const information = {
    name: localStorage.getItem("#name")
      ? localStorage.getItem("#name")
      : "اسمشو ننوشته",
    information: localStorage.getItem("#qone")
      ? localStorage.getItem("#qone")
      : "درباره خودش ننوشته",
    CommentAboutMe: JSON.parse(localStorage.getItem("#qtest"))?.isgood
      ? "با برنامه نویس من حال کرده"
      : "با برنامه نویسی من حال نکرده",

    gazar: "آقای گازار تو قلب ما جا داری",
  };
  console.table(information);

  return (
    <div className=" animate-fade-in-down">
      <div className="flex justify-center pt-2">
        <span className="font-black">خیلی ممنون که شرکت کردی</span>
      </div>
      <Lottie options={defaultOptions} />
    </div>
  );
}

export default Tanks;
