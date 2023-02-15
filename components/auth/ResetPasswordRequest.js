import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import Link from "next/link";
import { toast } from "react-toastify";

const ResetPasswordRequest = () => {
  const [email, setEmail] = useState('')
  // const [send, setSend] = useState(false)

  const { resetPasswordRequest, loading, send, setSend, error,clearErrors } = useContext(AuthContext);


  useEffect(() => {
    if (error) {
      toast.error(error);
      clearErrors();
    }

    

  }, [error]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    resetPasswordRequest(email);
  };




  return (
    <div>
      {!send ? (
        <>
          <div className="modalMask">
            <div className="modalWrapper ">
              <div className="right">
                <div className="rightContentWrapper ">
                  <div className="resetPassword">
                    <h2>Enter your registered email</h2>
                  </div>
                  <form className="form" onSubmit={handleSubmit}>
                    <div className="inputWrapper">
                      <div className="inputBox">
                        <i aria-hidden className="fas fa-envelope"></i>
                        <input
                          type="email"
                          placeholder="Enter Your Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          pattern="\S+@\S+\.\S+"
                          title="your email is invalid"
                          required
                        />
                      </div>
                    </div>
                    <div className="loginButtonWrapper">
                      <button type="submit" className="loginButton">
                        {loading ? "Sending.." : "Send"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div class="flex flex-col space-y-4 min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-gray-900">
            <div class="flex flex-col p-8 bg-green-200 shadow-md hover:shodow-lg rounded">
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <span className="font-bold text-green-800 text-xl">&#10003;</span>

                  {/* <svg
                    // xmlns="http://www.w3.org/2000/svg"
                    class="w-16 h-16 rounded p-3 border border-green-800 text-gray-100 bg-green-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg> */}
                  <div class="flex flex-col ml-3">
                    <div class="font-medium leading-none text-green-800">
                      success
                    </div>
                    <p class="text-sm text-gray-500 leading-none mt-1">
                      Email send successfully check your email and verify
                    </p>
                  </div>
                </div>
                <Link href="/" onClick={()=> setSend(false) }>
                  <button class="flex-no-shrink bg-blue-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-blue-500 text-white rounded">
                    Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ResetPasswordRequest;
