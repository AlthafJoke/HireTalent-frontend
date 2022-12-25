import React from "react";
import Link from "next/link";
import DataTable from "react-data-table-component";

const JobsApplied = ({ jobs }) => {
  const tableCustomStyles = {
    headCells: {
      style: {
        fontSize: "15px",
        fontWeight: "semi-bold",
        paddingLeft: "0 8px",

        justifyContent: "center",
        backgroundColor: "#d9e7ff",
      },
    },
  };

  const columns = [
    {
      name: "Job name",
      sortable: true,
      selector: (row) => row.title,
    },
    {
      name: "Salary",
      sortable: true,
      selector: (row) => row.salary,
    },
    {
      name: "Education",
      sortable: true,
      selector: (row) => row.education,
    },
    {
      name: "Experience",
      sortable: true,
      selector: (row) => row.experience,
    },
    {
      name: "Applied On",
      sortable: true,
      selector: (row) => row.appliedOn,
    },
    {
      name: "Action",
      sortable: true,
      selector: (row) => row.action,
    },
  ];

  const data = []; //
  jobs &&
    jobs.forEach((item) => {
      // here data.push is inserting data into data array
      data.push({
        title: item.job.title,
        salary: item.job.salary,
        education: item.job.education,
        experience: item.job.experience,
        appliedOn: item.appliedAt.substring(0, 10),
        action: (
          <>
            <Link href={`/job/${item.job.id}`}>
              <button className="btn btn-primary btn-sm">
                <i aria-hidden className="fa fa-eye"></i>
              </button>
            </Link>
          </>
        ),
      });
    });

  return (
    <div className="row">
      <div className="col-2"></div>
      <div className="col-8 mt-5 text-center ">
        <h1 className=" text-xl font-semi-bold bg-white p-3">Applied Jobs</h1>
        {/* data is commming from data.push */}
        <>
          <DataTable
            
            customStyles={tableCustomStyles}
            columns={columns}
            data={data}
            responsive
            
          >
            
          </DataTable>
        </>
      </div>
      <div className="col-2"></div>
    </div>
  );
};

export default JobsApplied;
