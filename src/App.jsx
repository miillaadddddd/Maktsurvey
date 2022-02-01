import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [controlerPage, setControlerPage] = useState(1);
  return (
    <div className="h-screen bg-slate-700 flex flex-col justify-center items-center">
      <div className="w-1/3 h-12 bg-gray-200 mb-3 rounded-xl flex justify-center"></div>
      <div className="w-2/3 bg-gray-200 h-2/3 rounded-xl shadow-lg relative">
        <div className="absolute top-[50%] left-2  p-2 text-xl cursor-pointer duration-300 hover:scale-125">
          &#10094;
        </div>
        <div className="absolute top-[50%] right-2  p-2  text-xl cursor-pointer duration-300 hover:scale-125">
          &#10095;
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default App;
