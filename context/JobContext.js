import axios from "axios";

import { useState, createContext } from "react";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);
  const [updated, setUpdated] = useState(false);
  const [applied, setApplied] = useState(false);
  const [stats, setStats] = useState(false);
  const [created, setCreated] = useState(false);
  const [deleted, setDeleted] = useState(false)

  //Apply to job
  const applyToJob = async (id, access_token) => {
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

  // get topic stats
  const getTopicStats = async (topic) => {
    try {
      setLoading(true);

      const res = await axios.get(`${process.env.API_URL}api/stats/${topic}/`);

      setLoading(false);
      setStats(res.data);
    } catch (error) {
      setLoading(false);
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );
    }
  };

  //Create a new Job
  const newJob = async (data, access_token) => {
    

    try {
      setLoading(true);

      const res = await axios.post(
        `${process.env.API_URL}api/job/new-job/`,
        data,

        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      if (res.data) {
        setLoading(false);
        setCreated(true);
      }
    } catch (error) {
      setLoading(false);
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );
    }
  };

  //Update Job
  const updateJob = async (id, data, access_token) => {
    try {
      setLoading(true);

      const res = await axios.put(
        `${process.env.API_URL}api/job/${id}/update/`,
        data,

        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      if (res.data) {
        setLoading(false);
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

  //Delete job
  const deleteJob = async (id, access_token) => {
    try {
      setLoading(true);

      const res = await axios.delete(
        `${process.env.API_URL}api/job/${id}/delete/`,

        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      setLoading(false)
      setDeleted(true)
     
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
        created,
        applied,
        deleted,
        clearErrors,
        applyToJob,
        checkJobApplied,
        stats,
        getTopicStats,
        newJob,
        setUpdated,
        setCreated,
        updateJob,
        setLoading,
        deleteJob,
        setDeleted
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export default JobContext;
