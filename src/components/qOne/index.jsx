import React, { useState } from "react";

function Qone({ handelPage }) {
  const [qone, setQone] = useState(
    localStorage.getItem("#qone") ? localStorage.getItem("#qone") : ""
  );
  return (
    <div className="w-[80%]  animate-fade-in-down">
      <form>
        <label
          class="block text-gray-700  font-bold mb-4 text-lg"
          for="username"
        >
          خودتون را در یک جمله تعریف کنید :
        </label>
        <textarea
          class="shadow  appearance-none border rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          value={qone}
          onChange={(e) => {
            localStorage.setItem("#qone", e.target.value);
            setQone(e.target.value);
          }}
          type="text"
          placeholder="من کرمانی هستم که آقا محمد خان قاجار بهش حمله کرده وچشمان تمامی مردمانم کور شده"
        />
      </form>
    </div>
  );
}

export default Qone;
