import React from "react";

const SideBar = () => {
  return (
    <div>
      <div className="">
        <div className="h-full w-64 bg-gray-900">
          <div className="p-6">
            <nav>
              <a href="#" className="text-white p-2 block hover:bg-gray-800">
                Dashboard
              </a>
              <a href="#" className="text-white p-2 block hover:bg-gray-800">
                users
              </a>
              <a href="#" className="text-white p-2 block hover:bg-gray-800">
                sales
              </a>
            </nav>
          </div>
        </div>
        
        {/* <div class="h-full w-full p-6"></div> */}
      </div>
    </div>
  );
};

export default SideBar;
