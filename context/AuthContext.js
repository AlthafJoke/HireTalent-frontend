import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect, createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);
  const [updated, setUpdated] = useState(null);
  const [uploaded, setUploaded] = useState(null);
  const [success, setSuccess] = useState(false);

  const [isRecruiter, setIsRecruiter] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [send, setSend] = useState(false)

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      loadUser();
    }
  }, [user]);

  //login user
  const login = async ({ email, password }) => {
    try {
      setLoading(true);

      const res = await axios.post("/api/auth/login", {
        email,
        password,
      });
      if (res.data.success) {
        loadUser();
        setIsAuthenticated(true);
        setLoading(false);
        if(res.data.user.is_recruiter == "True"){
          setIsRecruiter(true);
        }
        router.push("/");

      }

      if(res.data.user.is_recruiter == "True"){
        setIsRecruiter(true);
      }
      else{
        setIsRecruiter(false);
      }



    } catch (error) {
      setLoading(false);
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );
    }
  };

  //Retrive user
  const loadUser = async () => {
    try {
      setLoading(true);

      const res = await axios.get("/api/auth/user");

      if (res.data.user) {
        setIsAuthenticated(true);
        setLoading(false);
        setUser(res.data.user);
      }
      console.log(res.data.user.is_recruiter, 'dsfjsd')

      if (res.data.user.is_recruiter == "True"){
        setIsRecruiter(true);
      }

      if (res.data.user.is_approved == "True"){
        setIsApproved(true);
      }




    } catch (error) {
      setLoading(false);
      setIsAuthenticated(false);
      setIsAuthenticated(false);
      setIsRecruiter(false);
      setUser(null);
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );
    }
  };

  //Logout user
  const logout = async () => {
    try {
      const res = await axios.post("/api/auth/logout");

      if (res.data.success) {
        setIsAuthenticated(false);
        setIsRecruiter(false);
        setUser(null);
      }
    } catch (error) {
      setLoading(false);
      setIsAuthenticated(false);
      setIsRecruiter(false);
      setUser(null);
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );
    }
  };

  //Register User
  const register = async ({
    firstName,
    lastName,
    email,
    password,
    confirm_password,
    company,
    designation,
  }) => {
    try {
      setLoading(true);

      const res = await axios.post(`${process.env.API_URL}api/auth/register/`, {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        confirm_password,
        company,
        designation,
      });
      if (res.data.success) {
        setSuccess(true);
        setUploaded(true);
        setLoading(false);
        router.push("/login");
      }
    } catch (error) {
      setLoading(false);
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );
    }
  };

  const googleAuth = async ({token}) => {
    try {
      setLoading(true);

      const res = await axios.post("/api/auth/google",{
        token,
      } );

      if (res.status == 200 ) {
        setIsAuthenticated(true);
        setLoading(false);
        setUser(res.data.user);
      }
    } catch (error) {
      setLoading(false);
      setIsAuthenticated(false);
      setUser(null);
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );
    }
  };
 


  // clear errors
  const clearErrors = () => {
    setError(null);
  };

  //updateprofile
  const updateProfile = async (
    { firstName, lastName, email, password },
    access_token
  ) => {
    try {
      setLoading(true);

      const res = await axios.put(
        `${process.env.API_URL}api/me/update/`,
        {
          first_name: firstName,
          last_name: lastName,
          email,
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      if (res.data) {
        setLoading(false);
        setUser(res.data);
        setUpdated(true);
      }
    } catch (error) {
      setLoading(false);
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );
    }
  };

  //upload Resume
  const uploadResume = async (formData, access_token) => {
    try {
      setLoading(true);

      const res = await axios.put(
        `${process.env.API_URL}api/upload/resume/`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      if (res.data) {
        setLoading(false);
        setUploaded(true);
      }
    } catch (error) {
      setLoading(false);
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );
    }
  };


  const resetPasswordRequest = async (email) => {
    setLoading(true);

    try{
      
      const response = await axios.post(`${process.env.API_URL}api/forgot-password/`, {email})

      

      if(response.data){ 
        setLoading(false)
        
        setSend(true)


      }
      
    }
    catch(error){
      console.log(error)
      setLoading(false);
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );
    }
  }


  const resetPassword = async (password, confirmPassword) => {
    const response = await axios.post(`${process.env.API_URL}api/change_password/`, {password, confirmPassword})

    // console.log(password)
    

  }

  return (
    <AuthContext.Provider
      value={{
        loading,
        user,
        isAuthenticated,
        error,
        login,
        logout,
        register,
        clearErrors,
        updated,
        updateProfile,
        setUpdated,
        uploadResume,
        uploaded,
        setUploaded,
        success,
        setSuccess,
        googleAuth,
        isRecruiter,
        isApproved,
        resetPasswordRequest,
        send,
        setSend,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
