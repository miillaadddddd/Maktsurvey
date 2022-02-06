import React, { useState } from "react";

function Qtest() {
  let local = JSON.parse(localStorage.getItem("#qtest"));
  const [qtest, setQtest] = useState(
    local
      ? local
      : {
          isgood: true,
          isbad: false,
        }
  );

  const selectCheck = () => {
    let newAnswre = {};
    for (let [key, value] of Object.entries(qtest)) {
      newAnswre[key] = !value;
    }
    localStorage.setItem("#qtest", JSON.stringify(newAnswre));
    setQtest(newAnswre);
  };
  return (
    <>
      <div className="w-[80%]">
        <form>
          <label
            class="block text-gray-700 text-lg font-bold mb-4"
            for="username"
          >
            نظرتون درباره برنامه نویسی من چیه؟
          </label>

          <div className="mb-2">
            <input
              className="cursor-pointer"
              name="isgood"
              type="checkbox"
              checked={qtest.isgood}
              onChange={() => {
                selectCheck();
              }}
            />
            <label className="mr-4 text-lg cursor-pointer">خوبه</label>
          </div>

          <div className="">
            <input
              className="cursor-pointer"
              name="isbad"
              type="checkbox"
              checked={qtest.isbad}
              onChange={() => {
                selectCheck();
              }}
            />
            <label className="mr-4 text-lg cursor-pointer">بده</label>
          </div>
        </form>
      </div>
    </>
  );
}

export default Qtest;
