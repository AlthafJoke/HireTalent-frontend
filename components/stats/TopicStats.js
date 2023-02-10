import React, { useState, useEffect, useContext } from "react";
import JobContext from "../../context/JobContext";
import { toast } from "react-toastify";
import Loader from "../layout/Loader";


const TopicStats = () => {
  const [topic, setTopic] = useState("");
  const { clearErrors, error, loading, stats, getTopicStats } = useContext(JobContext);

  useEffect(() => {
    if (error) {
      toast.error(error);
      clearErrors();
    }
  });

  const submitHandler = (e) => {
    e.preventDefault();

    getTopicStats(topic)

    console.log(topic);
  };
  return (
    <div className="modalMask">
      <div className="card p-4 m-5">
        <div className="left">
          <div className="rightContentWrapper">
            <div className="headerWrapper">
              <h3 className="text-xl font-bold"> Get Topic Stats </h3>
            </div>
            <form className="form" onSubmit={submitHandler}>
              <div className="inputWrapper">
                <div className="inputBox">
                  <i aria-hidden className="fas fa-chart-line"></i>
                  <input
                    type="text"
                    placeholder="Enter Your Topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    minLength={3}
                    required
                  />
                </div>
              </div>

              <div className="uploadButtonWrapper">
                <button type="submit" className="uploadButton">
                  {loading ? "Fetching..." : "Get stats"}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="right">
          <div className="rightContentWrapper">
            {loading ? (
              <Loader />
            ) : (
                stats && stats.message ? (
                    <div className="alert alert-danger">
                        <b>{stats.message}</b>
                    </div>
                ): stats && (
              <>
                <h4 className="font-bold">Stats of {topic.toUpperCase()}:</h4>
                <table className="table table-striped mt-4">
                  <tbody>
                    
                    <tr>
                      <th scope="row">Total Jobs</th>
                      <td>{stats.total_jobs}</td>
                    </tr>
                    <tr>
                      <th scope="row">Minimum Salary</th>
                      <td>{stats.min_salary}</td>
                    </tr>
                    <tr>
                      <th scope="row">Maximum Salary</th>
                      <td>{stats.max_salary}</td>
                    </tr>
                    <tr>
                      <th scope="row">Average Salary</th>
                      <td>{stats.avg_salary}</td>
                    </tr>
                  </tbody>
                </table>

                <div className="alert alert-danger mt-4">
                  <b>Note:</b> These stats are collected from the jobs that are
                  posted only on HireTalent. Do not compare these stats with other
                  sites.
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicStats;
