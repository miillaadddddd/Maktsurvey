import React, { useState } from "react";

function Qfamily() {
  const [name, setName] = useState(
    localStorage.getItem("#name") ? localStorage.getItem("#name") : ""
  );
  return (
    <div className="w-[80%]">
      <form>
        <label
          class="block text-gray-700 text-sm font-bold mb-4"
          for="username"
        >
          نام و نام خانوادگی:
        </label>
        <input
          class="shadow  appearance-none border rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          value={name}
          onChange={(e) => {
            localStorage.setItem("#name", e.target.value);
            setName(e.target.value);
          }}
          type="text"
          placeholder="نام و نام خانوادگی"
        ></input>
      </form>
    </div>
  );
}

export default Qfamily;
