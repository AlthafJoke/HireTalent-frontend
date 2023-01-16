import React, { useState } from "react";

const ResetPassword = () => {
    const [email , setEmail] = useState('')
  return (
    <div>
      <div className="modalMask">
        <div className="modalWrapper ">
          <div className="right">
            <div className="rightContentWrapper ">
              <div className="resetPassword">
                <h2>Enter your email address</h2>
              </div>
              <form className="form" >
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
                    Submit
                  </button>
                </div>
                
                
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
