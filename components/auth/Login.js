import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import AuthContext from '../../context/AuthContext' 

import { useRouter } from "next/router";
import {toast} from 'react-toastify'




const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {loading, error, isAuthenticated, login, clearErrors } = useContext(AuthContext)

  const Router = useRouter()

  useEffect(() => {
    if(error) {
      console.log(error);
      toast.error(error)
      clearErrors(); 
    }
    if(isAuthenticated && !loading) {
      Router.push('/')
    }
  }, [isAuthenticated, error, loading])

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password)
    login({username: email, password});
  }


  return (
    <div className="modalMask">
      <div className="modalWrapper">
        <div className="left">
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <Image src="/images/login.svg" alt="login" layout="fill" />
          </div>
        </div>
        <div className="right">
          <div className="rightContentWrapper">
            <div className="headerWrapper">
              <h2> LOGIN</h2>
            </div>
            <form className="form" onSubmit={submitHandler}>
              <div className="inputWrapper">
                <div className="inputBox">
                  <i aria-hidden className="fas fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    pattern = '\S+@\S+\.\S+'
                    title="your email is invalid"
                    required
                  />
                </div>
                <div className="inputBox">
                  <i aria-hidden className="fas fa-key"></i>
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="loginButtonWrapper">
                <button type="submit" className="loginButton">
                  {loading ? 'Authenticating..': 'Login'}
                </button>
              </div>
              <p style={{ textDecoration: "none" }} className="signup">
                Not having account? <a href="/register">Create an account</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
