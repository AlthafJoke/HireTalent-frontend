import React from "react";
import Link from "next/link";
import style from "../../../styles/admin.module.css";

const Header = () => {
  return (
  
    <div className=" w-full bg-blue-900  shadow">
      <nav className="nav">
        <ul className="nav-items">
          <Link href="/">
            <li className="nav-item">
              <span className="material-icons-outlined"> Home </span>
            </li>
          </Link>
          
          <Link href='/employer/jobs/'>
            <li className="nav-item">
              <span className="material-icons-outlined"> My Jobs </span>
            </li>
          </Link>
          <Link href='/employer/approvedcandidates/'>
            <li className="nav-item">
              <span className="material-icons-outlined">Approved candidates</span>
            </li>
          </Link>
          <Link href="/employer/jobs/new/">
            <div className="btn btn-primary btn">post job</div>
          </Link>
        </ul>

        {/* <div className="btn">
          <button className="btn btn-primary  ">logout</button>
        </div> */}
      </nav>

   
    </div>
  );
};

export default Header;
