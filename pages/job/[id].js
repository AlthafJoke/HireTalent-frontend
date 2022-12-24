
import Layout from "../../components/layout/Layout";
import axios from "axios";
import JobDetails from "../../components/job/JobDetails";



export default function JobDetailsPage( {job, candidates, access_token } ) {
  

 
 

  console.log("job is: ",job )
  console.log("candidates are:" , candidates)
  

  return (
    <>
    <Layout>
      
      <JobDetails job={job} candidates={candidates} access_token={access_token}/>
    </Layout>
      
    </>
  )
}
 
export async function getServerSideProps({ req, params}) {
  try {
    const response = await axios.get(`${process.env.API_URL}api/job/${params.id}/`);
  
  const job = response.data.job;
  const candidates = response.data.candidates;
  const access_token = req.cookies.access

  return {
      props: {
          job,
          candidates,
          access_token,
      },
  };

  }
  catch (error) {
    console.log(error)
  }
  
}