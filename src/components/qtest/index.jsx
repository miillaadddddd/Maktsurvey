import React, { useState } from "react";

function Qtest() {
  const [qtest, setQtest] = useState({
    isgood: true,
    isbad: false,
  });

  const selectCheck = () => {
    let newAnswre = {};
    for (let [key, value] of Object.entries(qtest)) {
      newAnswre[key] = !value;
    }
    setQtest(newAnswre);
  };
  return (
    <>
      <div className="w-[80%]">
        <form>
          <label
            class="block text-gray-700 text-sm font-bold mb-4"
            for="username"
          >
            نظرتون درباره برنامه نویسی من چیه؟
          </label>

          <div className="">
            <input
              name="isgood"
              type="checkbox"
              checked={qtest.isgood}
              onChange={() => {
                selectCheck();
              }}
            />
            <label>خوبه</label>
          </div>

          <div className="">
            <input
              name="isbad"
              type="checkbox"
              checked={qtest.isbad}
              onChange={() => {
                selectCheck();
              }}
            />
            <label>بده</label>
          </div>
        </form>
      </div>
    </>
  );
}

export default Qtest;
