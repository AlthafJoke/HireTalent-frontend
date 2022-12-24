import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect, createContext } from "react";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);
  const [updated, setUpdated] = useState(null);
  const [applied, setApplied] = useState(false);

  const [success, setSuccess] = useState(false);

  //Apply to job
  const applyToJob = async (id, access_token) => {
    console.log(access_token, "hdfjdsfdffd");

    try {
      setLoading(true);

      const res = await axios.post(
        `${process.env.API_URL}api/job/${id}/apply/`,
        {},

        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      if (res.data.applied == true) {
        setLoading(false);
        setApplied(true);
      }
    } catch (error) {
      setLoading(false);
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );
    }
  };

  // check job applied
  const checkJobApplied = async (id, access_token) => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${process.env.API_URL}api/job/${id}/check/`,

        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      setLoading(false);
      setApplied(res.data);


    } catch (error) {
      setLoading(false);
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

  return (
    <JobContext.Provider
      value={{
        loading,
        error,
        updated,
        setUpdated,
        clearErrors,
        applied,
        applyToJob,
        checkJobApplied,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export default JobContext;
