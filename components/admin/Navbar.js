import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";


const Navbar = () => {
  const {logout} = useContext(AuthContext)
  return (
    <>
      <nav className="bg-gray-800 p-2">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" class="text-white font-bold text-xl">
              Admin panel
            </a>
          </div>
          
          <div className="flex items-center">
            <button className="bg-red-500 p-2 text-white hover:bg-red-600 rounded" onClick={() => logout()}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
