import axios from "axios";
import { useRouter } from "next/router";

import { useState, createContext } from "react";

const JobContext = createContext();


export const JobProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);
  const [updated, setUpdated] = useState(false);
  const [applied, setApplied] = useState(false);
  const [stats, setStats] = useState(false);
  const [created, setCreated] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [approved, setApproved] = useState(false)
  const [rejected, setRejected] = useState(false)

  const router = useRouter();
  

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

  const approveCandidate = async (id, access_token) => {
    try{
      setLoading(true)

      const res = await axios.post(`${process.env.API_URL}api/candidate/${id}/approve/`,
      {},

      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
      
      )
      if (res.data.success){
        setLoading(false)
        setApproved(true)
        // router.reload()

        // window.location.reload()
      }
    }
    catch(error){
      setApproved(false)
      setLoading(false)
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );

    }
  }

  const rejectCandidate = async (id, access_token) => {
    try{
      setLoading(true)

      const res = await axios.post(`${process.env.API_URL}api/candidate/${id}/reject/`,
      {},
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
      
      )
      if (res.data.success){
        setRejected(true)
        // window.location.reload()
        // router.reload()
        setLoading(false)
        
      }

    }
    catch(error){
      setRejected(false)
      setLoading(false)
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );

    }
  }

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
        setDeleted,
        approveCandidate,
        rejectCandidate,
        approved,
        rejected
        
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export default JobContext;
