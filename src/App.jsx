import logo from "./logo.svg";
import "./App.css";
import { useState,useEffect } from "react";
import lottie from "lottie-web";

function App() {
  let animation1=null;
  const [controlerPage, setControlerPage] = useState(1);
  useEffect(() => {
    lottie.loadAnimation({
      container: animation1.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../src/images/manifest.json"),

      //   path: "./lottie/animation.json",
    });
  }, []);
  return (
    <div className="h-screen bg-slate-700 flex flex-col justify-center items-center">
      
      <div className="w-24 h-12 bg-gray-200 mb-3 rounded-xl flex justify-center items-center relative">
        2:00
        <div className="count-page  left-[-60px]">5</div>
        <div className="count-page  right-[-60px]">{controlerPage}</div>
      </div>
      <div  className="w-2/3 bg-gray-200 h-2/3 rounded-xl shadow-lg relative">
        <div onClick={()=>{
          if(controlerPage !== 1){
            setControlerPage(controlerPage-1)
          }
        }} className="icon right-2 ">
          &#10094;
        </div>
        <div onClick={()=>{
          if(controlerPage !== 5){
            setControlerPage(controlerPage+1)
          }
        }} className="icon  left-2 ">
          &#10095;
        </div>
        <div ref={animation1} className=""></div>
      </div>
    </div>
  );
}

export default App;
