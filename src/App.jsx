import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "../src/images/moon.json";
import ani1 from "../src/images/polar-bear.json";
import ani2 from "../src/images/satisfied-bear.json";
import ani3 from "../src/images/surprised.json";
import Qfamily from "./components/qfamily";
import Qone from "./components/qOne";
import Qtest from "./components/qtest";
import QLastTest from "./components/qLastTest";
import Tanks from "./components/thanks";

function App() {
  const [controlerPage, setControlerPage] = useState(
    localStorage.getItem("#page") ? +localStorage.getItem("#page") : 1
  );
  const [timer, setTimer] = useState(
    localStorage.getItem("#time") ? localStorage.getItem("#time") : 120
  );
  const handelPage = () => {
    setControlerPage(controlerPage + 1);
  };

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        localStorage.setItem("#time", timer - 1);
        setTimer((t) => t - 1);
      }, 1000);
    } else {
      setControlerPage(5);
      localStorage.setItem("#page", 5);
    }
  }, [timer]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  const pages = {
    1: <Qfamily handelPage={handelPage} />,
    2: <Qone handelPage={handelPage} />,
    3: <Qtest handelPage={handelPage} />,
    4: <QLastTest handelPage={handelPage} />,
    5: <Tanks handelPage={handelPage} />,
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-700">
      <div
        style={{
          backgroundColor:
            timer == 0 ? "rgb(244 ,63 ,94)" : "rgb(229 ,231 ,235 )",
        }}
        className="relative flex items-center justify-center w-24 h-12 mb-3 bg-gray-200 rounded-xl"
      >
        {timer > 0 && `${Math.floor(timer / 60)}:${timer % 60}`}
        {timer == 0 && <div className="font-black">وقت تمام</div>}
        <div className="count-page  left-[-60px]">5</div>
        <div className="count-page  right-[-60px]">{controlerPage}</div>
      </div>
      <div className="relative flex items-center justify-center w-2/3 bg-gray-200 shadow-lg h-2/3 rounded-xl">
        {timer > 0 && (
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
        )}

        {timer > 0 && (
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
        )}

        {pages[controlerPage]}
        {/*  */}
        <div className="absolute flex p-5 h-36 right-2 bottom-2 rounded-xl animate-fade-in-down">
          <Lottie options={defaultOptions} />
        </div>
        {controlerPage > 1 && (
          <div className="absolute flex p-5 h-36 right-2 top-2 rounded-xl animate-fade-in-down">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: ani1,
              }}
            />
          </div>
        )}
        {controlerPage > 2 && (
          <div className="absolute flex p-5 h-36 left-2 top-2 rounded-xl animate-fade-in-down">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: ani3,
              }}
            />
          </div>
        )}
        {controlerPage > 3 && (
          <div className="absolute left-0 flex h-48 bottom-2 rounded-xl animate-fade-in-down">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: ani2,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
