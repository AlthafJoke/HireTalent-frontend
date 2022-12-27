import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AuthContext from "../../context/AuthContext";

const Header = () => {
  const { loading, user, logout } = useContext(AuthContext);

  const logoutHandler = () => {
    logout()
  }

  return (
    <div className="navWrapper items-center justify-center ">
      <div className="navContainer items-center justify-center">
        <Link href="/">
          <div className="logoWrapper">
            
            <span className="logo1">Hire</span>
            <span className="logo2">Talent.com</span>
          </div>
        </Link>
        <div className="btnsWrapper items-center justify-center">
          <Link href="/employer/jobs/new">
            <button className="postAJobButton flex items-center justify-center">
              <span>Post A Job</span>
            </button>
          </Link>

          {user ? (
            <div className="dropdown ml-3">
              <a
                className="btn dropdown-toggle mr-4 text-black"
                id="dropDownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span>Hi, {user.first_name}</span>
              </a>
              <div
                className="dropdown-menu "
                aria-labelledby="dropDownMenuButton"
              >
                <Link  href="/employer/jobs/" className="hover:no-underline">
                  <button className="dropdown-item hover:bg-blue-100 ">
                    <span >My jobs</span>
                  </button>
                </Link>
                <Link  href="me/applied" className="hover:no-underline">
                  <button className="dropdown-item hover:bg-blue-100">
                    <span>Jobs Applied</span>
                  </button>
                </Link>
                <Link  href="/me" className="hover:no-underline">
                  <button className="dropdown-item hover:bg-blue-100">
                    <span>Profile</span>
                  </button>
                </Link>
                <Link  href="/upload/resume" className="hover:no-underline">
                  <button className="dropdown-item hover:bg-blue-100">
                    <span>Upload Resume</span>
                  </button>
                </Link>
                <Link  href="/" className="hover:no-underline">
                  <button className="dropdown-item text-red-500 hover:bg-red-100" onClick={() => logout()}>
                    <span>Logout</span>
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            !loading && (
              <Link href="/login" className="items-center justify-center">
                <button className="loginButtonHeader items-center justify-center">
                  <span className="items-center justify-center">Login</span>
                </button>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
