import React, { useEffect, useState } from "react";
import Vay from "../vay";

function QLastTest() {
  let local = JSON.parse(localStorage.getItem("#qLastTest"));
  const [qLastTest, setQLastTest] = useState(
    local
      ? local
      : {
          very: true,
          medium: false,
          low: false,
        }
  );

  const selectCheck = (KeySelected) => {
    let newAnswre = {};
    for (let [key, value] of Object.entries(qLastTest)) {
      if (KeySelected == key) {
        newAnswre[key] = true;
      } else {
        newAnswre[key] = false;
      }
    }
    localStorage.setItem("#qLastTest", JSON.stringify(newAnswre));
    setQLastTest(newAnswre);
  };
  useEffect(() => {
    if (qLastTest.low) {
      localStorage.setItem(
        "#qLastTest",
        JSON.stringify({
          very: true,
          medium: false,
          low: false,
        })
      );
      setTimeout(() => {
        setQLastTest({
          very: true,
          medium: false,
          low: false,
        });
      }, 4000);
    }
  }, [qLastTest]);

  return (
    <>
      <div className="w-[80%]">
        <form>
          <label class="block text-gray-700 text-lg font-bold mb-4">
            احسان گازار را چقدر دوست دارید؟
          </label>

          <div className="mb-2">
            <input
              className="cursor-pointer"
              name="very"
              type="checkbox"
              checked={qLastTest.very}
              onChange={() => {
                selectCheck("very");
              }}
            />
            <label className="mr-4 text-lg cursor-pointer">خیلی زیاد</label>
          </div>

          <div className="mb-2">
            <input
              className="cursor-pointer"
              name="medium"
              type="checkbox"
              checked={qLastTest.medium}
              onChange={() => {
                selectCheck("medium");
              }}
            />
            <label className="mr-4 text-lg cursor-pointer">مثل داداشیمه</label>
          </div>
          <div className="">
            <input
              className="cursor-pointer"
              name="low"
              type="checkbox"
              checked={qLastTest.low}
              onChange={() => {
                selectCheck("low");
              }}
            />
            <label className="mr-4 text-lg text-red-600 cursor-pointer">
              ازش متنفرم
            </label>
          </div>
        </form>
        <div className="flex justify-center pt-3 text-yellow-500 shadow-sm">
          گزینه آخر را به هیچ وجه انتخاب نکنید.
        </div>
      </div>
      {qLastTest.low && <Vay />}
    </>
  );
}

export default QLastTest;
