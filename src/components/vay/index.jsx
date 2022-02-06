import React, { useEffect, useState } from "react";

function Vay() {
  const [arr, setArr] = useState(["m", "i", "l", "a", "d"]);

  setInterval(() => {
    let newArr = [...arr, ...arr];
    setArr(newArr);
  }, 500);

  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 z-10 bg-red-600">
        {arr.map((a) => (
          <span className="p-3 font-black ">وا مصیبتا</span>
        ))}
      </div>
      <div className="fixed top-0 bottom-0 z-20 flex items-center justify-center mr-auto text-7xl ">
        <span className="p-8 text-red-600 shadow-2xl animate-bounce bg-orange-50 rounded-2xl">
          وا مصیبتا
        </span>
      </div>
    </>
  );
}

export default Vay;
