import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";

const ResetPassword = ({data}) => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [uid, setUid] = useState('')
    const {resetPassword, loading} = useContext(AuthContext)
    

    console.log(data, "this is data")


    const handleSubmit = (e) => {
        e.preventDefault()
        setUid(data)
        resetPassword(password, confirmPassword, data)
    }



  return (
    <div className="modalMask">
        <div className="modalWrapper ">
          <div className="right">
            <div className="rightContentWrapper ">
              <div className="resetPassword">
                <h2>Reset Your Password</h2>
              </div>
              <form className="form" onSubmit={handleSubmit}>
                <div className="inputWrapper">
                  
                  <div className="inputBox">
                    <i aria-hidden className="fas fa-key"></i>
                    <input
                      type="password"
                      placeholder="Enter New Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="inputBox">
                    <i aria-hidden className="fas fa-key"></i>
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                  
                </div>
                <div className="loginButtonWrapper">
                  <button type="submit" className="loginButton">
                    {loading ? "saving.." : "save"}
                  </button>
                </div>
                
                
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ResetPassword;
