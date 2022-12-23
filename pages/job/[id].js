
import Layout from "../../components/layout/Layout";
import axios from "axios";
import JobDetails from "../../components/job/JobDetails";



export default function JobDetailsPage( {job, candidates} ) {
  

 
 

  console.log("job is: ",job )
  console.log("candidates are:" , candidates)
  

  return (
    <>
    <Layout title={job.title}>
      
      <JobDetails job={job} candidates={candidates}/>
    </Layout>
      
    </>
  )
}
 
export async function getServerSideProps({params}) {
  try {
    const response = await axios.get(`${process.env.API_URL}api/job/${params.id}/`);
  
  const job = response.data.job;
  const candidates = response.data.candidates;

  return {
      props: {
          job,
          candidates
      },
  };

  }
  catch (error) {
    console.log(error)
  }
  
}