import React from "react";
import Link from "next/link";
import style from "../../../styles/admin.module.css";

const Header = () => {
  return (
    // <div className="navWrapper2">
    //   <div className="navContainer">
    //     <Link href="/recruiter">
    //       <div className="logoWrapper md:w-3/4 lg:w-1/2 xl:w-1/3">
    //         <span className="logo1 sm:w-full ">Hire</span>
    //         <span className="logo2 sm:w-full ">Talent.com</span>
    //       </div>
    //     </Link>
    //   </div>
    // </div>
    <div className="header">
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

      {/* <h1 className={style.name}>hello</h1> */}
    </div>
  );
};

export default Header;
