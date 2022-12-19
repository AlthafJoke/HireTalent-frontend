import Home from "../components/Home";
import Layout from "../components/layout/Layout";
import axios from "axios";


export default function Index({data}) {
  console.log(data)

  return (
    <>
    <Layout>
      <Home/>
    </Layout>
      
    </>
  )
}

export async function getServerSideProps() {

  const response = await axios.get(`${process.env.API_URL}api/jobs/`)

  const data = response.data

  return {
    props: {
      data,
    }
  }


}
