import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "../src/images/moon.json";
import Qfamily from "./components/qfamily";
import Qone from "./components/qOne";
import Qtest from "./components/qtest";
import QLastTest from "./components/qLastTest";
import Tanks from "./components/thanks";

const pages = {
  1: <Qfamily />,
  2: <Qone />,
  3: <Qtest />,
  4: <QLastTest />,
  5: <Tanks />,
};
const animations = {
  1: {
    loop: true,
    autoplay: true,
    animationData: animationData,
  },
  2: {
    loop: true,
    autoplay: true,
    animationData: animationData,
  },
  3: {
    loop: true,
    autoplay: true,
    animationData: animationData,
  },
  4: {
    loop: true,
    autoplay: true,
    animationData: animationData,
  },
  5: {
    loop: true,
    autoplay: true,
    animationData: animationData,
  },
};

function App() {
  let animation1 = null;
  const [controlerPage, setControlerPage] = useState(
    localStorage.getItem("#page") ? +localStorage.getItem("#page") : 1
  );
  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: animation1.current,
  //     renderer: "svg",
  //     loop: true,
  //     autoplay: true,
  //     // animationData: require("../src/images/manifest.json"),

  //     // path: "../src/images/manifest.json",
  //   });
  // }, []);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-700">
      <div className="relative flex items-center justify-center w-24 h-12 mb-3 bg-gray-200 rounded-xl">
        2:00
        <div className="count-page  left-[-60px]">5</div>
        <div className="count-page  right-[-60px]">{controlerPage}</div>
      </div>
      <div className="relative flex items-center justify-center w-2/3 bg-gray-200 shadow-lg h-2/3 rounded-xl">
        <div
          onClick={() => {
            if (controlerPage !== 1) {
              setControlerPage(controlerPage - 1);
              localStorage.setItem("#page", controlerPage - 1);
            }
          }}
          className="icon right-2 "
        >
          &#10094;
        </div>
        <div
          onClick={() => {
            if (controlerPage !== 5) {
              setControlerPage(controlerPage + 1);
              localStorage.setItem("#page", controlerPage + 1);
            }
          }}
          className="icon left-2 "
        >
          &#10095;
        </div>
        {pages[controlerPage]}
        {/*  */}
        <div className="absolute flex p-5 h-36 right-2 bottom-2 rounded-xl">
          <Lottie options={defaultOptions} />
        </div>
        <div className="absolute flex p-5 h-36 right-2 top-2 rounded-xl">
          <Lottie options={defaultOptions} />
        </div>
        <div className="absolute flex p-5 h-36 left-2 bottom-2 rounded-xl">
          <Lottie options={defaultOptions} />
        </div>
        <div className="absolute flex p-5 h-36 left-2 top-2 rounded-xl">
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </div>
  );
}

export default App;
