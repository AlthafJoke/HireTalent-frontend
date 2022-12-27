import React from "react";
import Link from "next/link";
import DataTable from "react-data-table-component";

const JobCandidates = ({ candidatesApplied }) => {
  
//   const tableCustomStyles = {
//     headCells: {
//       style: {
//         fontSize: "15px",
//         fontWeight: "semi-bold",
//         paddingLeft: "0 8px",

//         justifyContent: "center",
//         backgroundColor: "#d9e7ff",
//       },
//     },
//   };

  const columns = [
    {
      name: "User ID",
      sortable: true,
      selector: (row) => row.id,
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
  ];

  const data = []; //
  candidatesApplied &&
    candidatesApplied.forEach((item) => {
      // here data.push is inserting data into data array
      data.push({
        id: item.job.id,

        title: item.job.title,
        salary: item.job.salary,

        resume: (
          <>
            <Link
              legacyBehavior
              href={`https://hiretalent2.s3.amazonaws.com/${item.resume}`}
            >
              <a
                className="text-success text-center ml-4"
                rel="noreferrer"
                target="_blank"
              >
                <b>
                  <i aria-hidden className="fas fa-download"></i> View Resume
                  Resume
                </b>
              </a>
            </Link>
          </>
        ),
        appliedAt : item.appliedAt.substring(0, 10)
      });
    });

  return (
    <div className="row">
      <div className="col-2"></div>
      <div className="col-8 mt-5 text-center ">
        <h1 className=" text-xl font-semi-bold bg-white p-3">{candidatesApplied && `${candidatesApplied.length} Candidates applied for this job`}</h1>
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

export default JobCandidates;
