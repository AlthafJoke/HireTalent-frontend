import React from "react";
import Link from "next/link";
import JobItem from "./job/JobItem";

const Home = ({data}) => {
  const {jobs, count, resPerPage} = data
  return (
    <div className="container-sm">
      <div className="row ">
        <div className="col-xl-3 col-lg-4 ">
          {/* <Filters />{" "} */}

         
        </div>

        <div className="col-xl-9 col-lg-8 content-left-offset text-white">
          <div className="my-5">
            <h4 className="page-title ">Latest Jobs</h4>
            <Link  href="/stats">
              <button className="bg-transparent py-2 px-4 border   rounded float-right stats_btn">
                Get Topic stats
              </button>
            </Link>
            <div className="d-block ">
              <Link  href="/search" className="hover:no-underline">Go to Search</Link>
            </div>
          </div>
          {/* if jobs exist start mapping job*/}
          {jobs && jobs.map((job) => <JobItem key={job.id} job={job}/>)}
        </div>
      </div>
    </div>
  );
};

export default Home;
