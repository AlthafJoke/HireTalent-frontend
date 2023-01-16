import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AuthContext from "../../context/AuthContext";
import { useRouter } from "next/router";

const Header = () => {
  const { loading, user, logout, isRecruiter, isApproved } = useContext(AuthContext);
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const router = useRouter()

   console.log(user)

  

  const logoutHandler = () => {
    logout();
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    
    if (keyword) {
      let searchQuery = `/?keyword=${keyword}`;

      router.push(searchQuery);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="navWrapper items-center justify-center ">
      <div className="navContainer items-center justify-center">
        <Link href="/">
          <div className="logoWrapper md:w-3/4 lg:w-1/2 xl:w-1/3">
            <span className="logo1 sm:w-full ">Hire</span>
            <span className="logo2 sm:w-full ">Talent.com</span>
          </div>
        </Link>
        <form onSubmit={submitHandler} className="search-bar w-80 text-dark">
          <div className="relative rounded-md shadow-sm ">
            <input
              id="search"
              className="form-input search-bar-form  py-2 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              placeholder="Search..."
              type="search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              
            </div>
          </div>
        </form>
        <div className="btnsWrapper items-center justify-center">
        

          {/* { isApproved ?  <Link href="/employer/jobs/new">
                <button className="postAJobButton flex items-center justify-center">
                  <span>Post A Job</span>
                </button>
              </Link>:<></>

          
          

           } */}
           { isRecruiter ?  <Link href="/employer/jobs/new">
                <button className="postAJobButton flex items-center justify-center">
                  <span>Post A Job</span>
                </button>
              </Link>:<></>

          
          

           }

           

          {/* {isRecruiter? (
            isApproved? (
          <Link href="/employer/jobs/new">
            <button className="postAJobButton flex items-center justify-center">
              <span>Post A Job</span>
            </button>
          </Link>

            ):(
              <Link href="#">
              <button className="postAJobButton">
                <span>Waiting list</span>
              </button>
            </Link>
            )
          ):(
            <Link href="/recuriterRegister">
              <button className="postAJobButton">
                <span>Register as recruiter</span>
              </button>
            </Link>
          )} */}
          

          {user ? (
            <div className="dropdown ml-3">
              <a
                className="btn dropdown-toggle mr-4 text-black"
                id="dropDownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span>Hi, {user.first_name + user.last_name}</span>
              </a>
              <div
                className="dropdown-menu "
                aria-labelledby="dropDownMenuButton"
              >
                
                <Link href="/employer/jobs/" className="hover:no-underline">
                  <button className="dropdown-item hover:bg-blue-100 ">
                    <span>My jobs</span>
                  </button>
                </Link>
                <Link href="me/applied" className="hover:no-underline">
                  <button className="dropdown-item hover:bg-blue-100">
                    <span>Jobs Applied</span>
                  </button>
                </Link>
                <Link href="/me" className="hover:no-underline">
                  <button className="dropdown-item hover:bg-blue-100">
                    <span>Profile</span>
                  </button>
                </Link>
                <Link href="/upload/resume" className="hover:no-underline">
                  <button className="dropdown-item hover:bg-blue-100">
                    <span>Upload Resume</span>
                  </button>
                </Link>
                <Link href="/" className="hover:no-underline">
                  <button
                    className="dropdown-item text-red-500 hover:bg-red-100"
                    onClick={() => logout()}
                  >
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
