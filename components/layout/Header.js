import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AuthContext from "../../context/AuthContext";

const Header = () => {
  const { loading, user } = useContext(AuthContext);

  return (
    <div className="navWrapper items-center justify-center ">
      <div className="navContainer items-center justify-center">
        <Link href="/">
          <div className="logoWrapper">
            <div className="logoImgWrapper">
              <Image width="30" height="30" src="/images/logo.png" alt="" />
            </div>
            <span className="logo1">Hire</span>
            <span className="logo2">Talent</span>
          </div>
        </Link>
        <div className="btnsWrapper items-center justify-center">
          <Link href="/employeer/jobs/new">
            <button className="postAJobButton items-center justify-center">
              <span>Post A Job</span>
            </button>
          </Link>

          {user ? (
            <div className="btn dropdown ml-3">
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
                className="dropdown-menu  "
                aria-labelledby="dropDownMenuButton"
              >
                <Link legacyBehavior href="/employor/jobs/">
                  <a className="dropdown-item hover:bg-blue-100">
                    <span className="">My jobbs</span>
                  </a>
                </Link>
                <Link legacyBehavior href="me/applied">
                  <a className="dropdown-item hover:bg-blue-100">
                    <span>Jobs Applied</span>
                  </a>
                </Link>
                <Link legacyBehavior href="/me">
                  <a className="dropdown-item hover:bg-blue-100">
                    <span>Profile</span>
                  </a>
                </Link>
                <Link legacyBehavior href="/upload/resume">
                  <a className="dropdown-item hover:bg-blue-100">
                    <span>Upload Resume</span>
                  </a>
                </Link>
                <Link legacyBehavior href="/">
                  <a className="dropdown-item text-red-500 hover:bg-red-100">
                    <span>Logout</span>
                  </a>
                </Link>
              </div>
            </div>
          ) : (
            !loading && (
              <Link href="/login">
                <button className="loginButtonHeader  ">
                  <span>Login</span>
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
