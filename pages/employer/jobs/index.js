import axios from "axios";
// import Layout from "../../../components/layout/Layout";

import Layout from "../../../components/recruiter/layout/Layout";
import MyJobs from "../../../components/job/MyJobs";
import { isAuthenticatedUser } from "../../../utils/isAuthenticated";
import jwtDecode from "jwt-decode";




export default function MyJobPage({ jobs, access_token }) {
  
  return (
    
    <>
    {jobs?
    <Layout title="My Jobs">
      <MyJobs jobs={jobs} access_token={access_token} />
    </Layout>:
    <>

    </>
    }
    </>
  );
}

export async function getServerSideProps({ req }) {
  
  const access_token = req.cookies.access;

  const usertoken = await isAuthenticatedUser(access_token);

  const decodeduser = jwtDecode(access_token);
 

  

  

  if (!decodeduser.is_recruiter) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const res = await axios.get(`${process.env.API_URL}api/me/jobs/`, {
    headers: {
        Authorization: `Bearer ${access_token}`
        
    }
  })
  

  const jobs = res.data

  

  

  return {
    props: {
      access_token,
      jobs,
     
    },
  };
}