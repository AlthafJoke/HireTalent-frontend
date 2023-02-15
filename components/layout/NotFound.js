import React from "react";
import Link from "next/link";



const NotFound = () => {
  return (
    <div class="figure">
      <div class="mj">
        <div class="head">
          <div class="nose"></div>
          <div class="hair">
            <div class="ponytail"></div>
            <div class="frontpony"></div>
          </div>
        </div>
        <div class="body">
          <div class="jacket">
            <div class="hand"></div>
          </div>
        </div>
        <div class="leg">
          <div class="foot"></div>
        </div>
        <div class="leg lft">
          <div class="foot"></div>
        </div>
      </div>
      <div class="error-no">
        {" "}
        <span>4</span>
        <div class="moon"></div>
        <span>4</span>
      </div>
      <h5 className="text-xl text-white">
        Page Not Found. Go to <Link href="/"> <span className="ml-3 px-3 py-2 rounded bg-blue-900 text-white shadow" >Homepage</span></Link>{" "}
      </h5>

    </div>
  );
};

export default NotFound;
