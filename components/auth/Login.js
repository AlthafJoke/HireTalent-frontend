import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import AuthContext from "../../context/AuthContext";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Link from "next/link";
// reactstrap components
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

const Login = ({google_id}) => {

  
  const [modalOpen, setModalOpen] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  const {
    loading,
    error,
    isAuthenticated,
    login,
    clearErrors,
    success,
    setSuccess,
    googleAuth,
    repass,
    setRePass,
  } = useContext(AuthContext);

  const Router = useRouter();
  const [user, setUser] = useState();

  function handleCallbackResponse(response) {
    
    var userObject = jwt_decode(response.credential);
    var token = response.credential;

    googleAuth({ token });
    
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        google_id,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  },[google_id, handleCallbackResponse]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      clearErrors();
    }

    if (success) {
      toast.success("Registration completed successfully");
      setSuccess(false);
    }
    if(repass){
      toast.success("Password changed successfully");
      setRePass(false)


    }

    if (isAuthenticated && !loading) {
      Router.push("/");
    }
  }, [clearErrors, repass, setSuccess, Router, error, isAuthenticated, loading, setRePass]);

  const submitHandler = (e) => {
    e.preventDefault();

    login({ email, password });
  };

  return (
    <>
      <div className="modalMask">
        <div className="modalWrapper ">
          <div className="right">
            <div className="rightContentWrapper ">
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
                      pattern="\S+@\S+\.\S+"
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
                  <Link href='reset_password-request'>
                    <p className="mx-4" style={{ color: "grey" }}>
                      Forgot Password ?
                    </p>
                  </Link>
                </div>
                <div className="loginButtonWrapper">
                  <button type="submit" className="loginButton">
                    {loading ? "Authenticating.." : "Login"}
                  </button>
                </div>
                <div style={{ textDecoration: "none" }} className="signup">
                  <p style={{ color: "grey" }}>Not having account?</p>
                  <button
                    className="mx-2 text-primary pointer"
                    onClick={() => setModalOpen(!modalOpen)}
                  >
                    Register
                  </button>
                </div>
                <div
                  id="signInDiv"
                  className="flex mt-2 items-center justify-center"
                ></div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
          <div className=" modal-header">
            <h5 className=" modal-title" id="exampleModalLabel">
              Choose your registration type:
            </h5>
            <button
              aria-label="Close"
              className=" close"
              type="button"
              onClick={() => setModalOpen(!modalOpen)}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <ModalBody>
            <Link
              href="/register"
              className="items-center justify-center  flex bg-blue-500 text-white hover:bg-blue-400"
            >
              <button className=" items-center justify-center">
                <span className="items-center justify-center">
                  Register as a Job seeker
                </span>
              </button>
            </Link>
            <Link
              href="/employer/register"
              className="items-center justify-center  flex mt-2 bg-black text-white hover:bg-black/75"
            >
              <button className=" items-center justify-center">
                <span className="items-center justify-center">
                  Register as a Job Employer
                </span>
              </button>
            </Link>
          </ModalBody>
          <ModalFooter>
            <Button
              color="secondary"
              type="button"
              outline="none"
              onClick={() => setModalOpen(!modalOpen)}
            >
              Close
            </Button>
          </ModalFooter>
        </Modal>
      )}
    </>
  );
};

export default Login;
