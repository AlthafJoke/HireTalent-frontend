import React, { useEffect } from "react";
import Link from "next/link";
import DataTable from "react-data-table-component";
import { useContext } from "react";
import JobContext from "../../context/JobContext";
import { toast } from "react-toastify";
import { useRouter } from "next/router";



const MyJobs = ({ jobs, access_token }) => {
    const { clearErros, error, loading, deleted, deleteJob, setDeleted} = useContext(JobContext)
    const router = useRouter()

    useEffect(() => {
      if (error){
        toast.error(error)
        clearErros()
      }
      if(deleted) {
        setDeleted(false)
        router.push(router.asPath)
      }


    }) 

    const deleteJobHandler = (id) => {
      deleteJob(id, access_token)

    }



  const columns = [
    {
      name: "Job ID",
      sortable: true,
      selector: (row) => row.id,
    },
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
      name: "Action",
      sortable: true,
      selector: (row) => row.action,
    },
  ];

  const data = []; //
  jobs &&
    jobs.forEach((job) => {
      // here data.push is inserting data into data array
      data.push({
        id: job.id,

        title: job.title,
        salary: job.salary,
        
        action: (
          <div className="table-action-items">
            <Link href={`/job/${job.id}`}>
              <button className="btn btn-dark btn-sm">
                <i aria-hidden className="fa fa-eye"></i>
              </button>
            </Link>
            <Link href={`/employer/jobs/candidates/${job.id}/`}>
              <button className="btn btn-secondary btn-sm my-2 mx-1">
                <i aria-hidden className="fa fa-users "></i>
              </button>
            </Link>
            <Link href={`/employer/jobs/${job.id}/`}>
              <button className="btn btn-warning btn-sm my-2 mx-1">
                <i aria-hidden className="fa fa-pencil "></i>
              </button>
            </Link>

            <button  className="btn btn-danger btn-sm my-2 mx-1" onClick={() => deleteJobHandler(job.id)}>
                <i className="fa fa-trash"></i>
            </button>


          </div>
        ),
      });
    });

  return (
    <div className="row">
      <div className="col-2"></div>
      <div className="col-8 mt-5 text-center ">
        <h1 className=" text-xl font-bold bg-white p-3">My Jobs</h1>
        {/* data is commming from data.push */}
        <>
          <DataTable
            
            // key={data.id}
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

export default MyJobs;
