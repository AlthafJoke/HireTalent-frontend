import React, { useContext, useEffect } from "react";
import Link from "next/link";
import DataTable from "react-data-table-component";
import JobContext from "../../context/JobContext";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import Loader from "../layout/Loader";

const JobCandidates = ({ candidatesApplied, access_token }) => {
  const { approveCandidate, rejectCandidate, approved, rejected, load } =
    useContext(JobContext);
  const router = useRouter();

  useEffect(() => {

    
    if (approved) {
      toast.success("approved");
      router.reload();
    }
    if (rejected) {
      toast.error("rejected");
      router.reload();
    }
  }, [approved, rejected]);

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
    {
      name: "Status",
      sortable: false,
      selector: (row) => row.status,
    },
    {
      name: "Actions",
      sortable: false,
      selector: (row) => row.actions,
    },
  ];

  const data = []; //
  candidatesApplied &&
    candidatesApplied.forEach((item) => {
      const stat = item.status;

      // here data.push is inserting data into data array
      data.push({
        id: item.id,

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
        appliedAt: item.appliedAt.substring(0, 10),
        status: <div>{item.status}</div>,

        actions: (
          <div className="">
            <span className="">
              <button
                className="bg-green-600 rounded px-2 py-1 text-white"
                onClick={() => approveCandidate(item.id, access_token)}
              >
                approve
              </button>
            </span>
            <span className="ml-2">
              <button
                className="bg-red-500 rounded px-2 py-1 text-white"
                onClick={() => rejectCandidate(item.id, access_token)}
              >
                reject
              </button>
            </span>
          </div>
        ),
      });
    });

  return (
    <div className="row">
      {load ? (
        <Loader />
      ) : (
        <>
          <Toaster />
          <div className="col-2"></div>
          <div className="col-8 mt-5 text-center ">
            <h1 className=" text-xl font-semi-bold bg-white p-3">
              {candidatesApplied &&
                `${candidatesApplied.length} Candidates applied for this job`}
            </h1>
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
        </>
      )}
    </div>
  );
};

export default JobCandidates;
