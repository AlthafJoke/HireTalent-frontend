import React from "react";
import Link from "next/link";


const Sidebar = () => {
  return (
    <div className="mt-3">
      <Link href="/recruiter">
        <div className="logoWrapper md:w-3/4 lg:w-1/2 xl:w-1/3">
          <span className="logo1 sm:w-full ">Hire</span>
          <span className="logo2 sm:w-full ">Talent.com</span>
        </div>
      </Link>
      <hr />
      <div className="sidebar-container">
        <ul className="sidebar-items">
            <li className="font-bold">Dashboard</li>
            <li className="font-bold">My Jobs</li>
            <li></li>
            <li>Dashboard</li>

        </ul>
        
      </div>
    </div>
  );
};

export default Sidebar;
