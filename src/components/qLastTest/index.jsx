import React, { useState } from "react";

function QLastTest() {
  const [qLastTest, setQLastTest] = useState("");
  return (
    <>
      <div className="w-[80%]">
        <form>
          <label
            class="block text-gray-700 text-sm font-bold mb-4"
            for="username"
          >
            احسان گازار را چقدر دوست داری؟
          </label>
          <textarea
            class="shadow  appearance-none border rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            value={qLastTest}
            onChange={(e) => {
              localStorage.setItem("#qone", e.target.value);
              setQLastTest(e.target.value);
            }}
            type="text"
            placeholder="من کرمانی هستم که آقا محمد خان قاجار بهش حمله کرده وچشمان تمامی مردمانم کور شده"
          />
        </form>
      </div>
    </>
  );
}

export default QLastTest;
