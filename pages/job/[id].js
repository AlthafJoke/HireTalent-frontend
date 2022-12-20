
import Layout from "../../components/layout/Layout";
import axios from "axios";


export default function JobDetailsPage( {job, candidates} ) {
    console.log("job is: ",job )
    console.log("candidates are:" , candidates)
  

  return (
    <>
    <Layout>
      <h1 className="text-xl">Job details</h1>
    </Layout>
      
    </>
  )
}
 
export async function getServerSideProps({params}) {
    const response = await axios.get(`${process.env.API_URL}api/job/${params.id}/`)
    
    const job = response.data.job
    const candidates = response.data.candidates

    return {
        props: {
            job,
            candidates
        }
    }
}