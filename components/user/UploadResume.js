import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import AuthContext from "../../context/AuthContext";

const UploadResume = ({ access_token }) => {
  const [resume, setResume] = useState(null);
  const {
  
    loading,
    error,
    user,
    clearErrors,
    uploadResume,
    setUploaded,
    uploaded,

  
  } = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    

    if (error) {
      toast.error(error);
      clearErrors();
    }

    if (uploaded) {
        setUploaded(false)
      toast.success("Your resume is uploaded successfully")
    }
  },[uploaded, error]);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('resume', resume)

    uploadResume(formData, access_token)

    
  };

  const onChange = (e) => {
    setResume(e.target.files[0])
  }

  return (
    <div className="modalMask ">
      <div className="card p-5">
       
        <div className="right">
          <div className="rightContentWrapper ">
            <div className="headerWrapper ">
              <h3 className="text-xl font-bold card-items"> UPLOAD RESUME </h3>
            </div>
            <form className="form"  onSubmit={submitHandler}>
              <div className="inputWrapper">
                <div className="inputBox">
                  <i aria-hidden className="fas fa-upload"></i>
                  <input
                    type="file"
                    name="resume"
                    id="customFile"
                    accept="application/pdf"
                    onChange={onChange}
                    required
                  />
                </div>
              </div>
              { user?.resume && (
              <>
                <h4 className="text-center my-3">OR</h4>

                <Link legacyBehavior href={`https://hiretalent2.s3.amazonaws.com/${user.resume}`}>
                  <a
                    className="text-success text-center ml-4"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <b>
                      <i aria-hidden className="fas fa-download"></i> Download
                      Your Resume
                    </b>
                  </a>
                </Link>
              </>
              )}

              <div className="uploadButtonWrapper">
                <button type="submit" className="uploadButton">
                  {loading? 'Uploading..' : "Upload"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadResume;
