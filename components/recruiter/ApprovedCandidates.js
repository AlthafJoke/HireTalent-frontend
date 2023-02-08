import React, { useState } from "react";
import DataTable from "react-data-table-component";
import Link from "next/link";


const ApprovedCandidates = ({ approved }) => {
  const columns = [
    {
      name: "User ID",
      sortable: true,
      selector: (row) => row.id,
    },
    {
      name: "Username",
      sortable: true,
      selector: (row) => row.username,
    },
    {
      name: "Job Name",
      sortable: true,
      selector: (row) => row.title,
    },
    {
      name: "Candidate Resume",
      sortable: true,
      selector: (row) => row.resume,
    },

    {
      name: "Applied At",
      sortable: true,
      selector: (row) => row.appliedAt,
    },
    {
      name: "Status",
      sortable: false,
      selector: (row) => row.status,
    },
    
  ];

  const data = []; //
  approved &&
    approved.forEach((item) => {
      

      // here data.push is inserting data into data array
      data.push({
        id: item.id,
        username: item.user,
        title: item.job,
        salary: item.job.salary,

        resume: (
          <div className="">
            <Link
              legacyBehavior
              href={`https://hiretalent2.s3.amazonaws.com/${item.resume}`}
            >
              <a
                className="text-success text-center text-xs"
                rel="noreferrer"
                target="_blank"
              >
                <b>
                  <i aria-hidden className="fas fa-download"></i> View Resume
                  Resume
                </b>
              </a>
            </Link>
          </div>
        ),
        appliedAt: item.appliedAt.substring(0, 10),
        status: <>{item.status}</>,

        // actions: (
        //   <>
        //     <span className="">
        //       <button
        //         className="bg-green-600 rounded px-2 py-1 text-white"
        //         onClick={() => approveCandidate(item.id, access_token)}
        //       >
        //         approve
        //       </button>
        //     </span>
        //     <span className="ml-2">
        //       <button
        //         className="bg-red-500 rounded px-2 py-1 text-white"
        //         onClick={() => rejectCandidate(item.id, access_token)}
        //       >
        //         reject
        //       </button>
        //     </span>
        //   </>
        // ),
      });
    });

  return (
    <div className="row">
      
      <div className="col-2"></div>
      <div className="col-8 mt-5 text-center ">
        <h1 className=" text-xl font-semi-bold bg-white p-3">{approved && `${approved.length} Candidates approved for this job`}</h1>
        {/* data is commming from data.push */}
        <>
          <DataTable
            // customStyles={tableCustomStyles}
            columns={columns}
            data={data}
            responsive
          ></DataTable>
        </>
      </div>
      <div className="col-2"></div>
    </div>
  );
};

export default ApprovedCandidates;
