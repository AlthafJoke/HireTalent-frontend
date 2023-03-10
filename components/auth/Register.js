import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import AuthContext from "../../context/AuthContext";


import { useRouter } from "next/router";
import { toast } from "react-toastify";

const Register = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("")

  const { loading, error, isAuthenticated, register, clearErrors } =
    useContext(AuthContext);

  const Router = useRouter();

  useEffect(() => {
    if (error) {
      toast.error(error);
      clearErrors();
    }

    if (isAuthenticated && !loading) {
      Router.push("/");
    }
  });

  const submitHandler = (e) => {
    e.preventDefault();
    
    register({ firstName , lastName, email, password, confirm_password });
    
   
  };

  return (
    <div className="modalMask">
      <div className="modalWrapper ">
        
        <div className="right">
          <div className="rightContentWrapper">
            <div className="headerWrapper">
              <h2 > SIGN UP</h2>
            </div>
            <form className="form" onSubmit={submitHandler}>
              <div className="inputWrapper">
                <div className="inputBox">
                  <i aria-hidden className="fas fa-user"></i>
                  <input type="text" placeholder="Enter First Name" value={firstName} onChange={(e)=> setFirstName(e.target.value)} required />
                </div>

                <div className="inputBox">
                  <i aria-hidden className="fas fa-user-tie"></i>
                  <input type="text" placeholder="Enter Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>

                <div className="inputBox">
                  <i aria-hidden className="fas fa-envelope"></i>
                  <input type="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="inputBox">
                  <i aria-hidden className="fas fa-key"></i>
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    minLength={6}
                    required
                  />
                </div>
                <div className="inputBox">
                  <i aria-hidden className="fas fa-key"></i>
                  <input
                    type="password"
                    placeholder="Confirm Your Password"
                    value={confirm_password} onChange={(e) => setConfirm_password(e.target.value)}
                    minLength={6}
                    required
                  />
                </div>
              </div>
              <div className="registerButtonWrapper">
                <button type="submit" className="registerButton">
                    {loading ? 'processing..': 'Register'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
