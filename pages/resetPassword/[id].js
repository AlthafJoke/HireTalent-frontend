import Layout from '../../components/layout/Layout'
// import  VerifyRec from '../../components/verify/verifyRec'

import axios from 'axios'
import ResetPassword from '../../components/auth/ResetPassword'

export default function ResetPage({data}) {
  return (
    <Layout title="Reset Password">
        {/* <VerifyRec data={data}/> */}
        <ResetPassword />
    </Layout>
  )
}


export async function getServerSideProps({ req, params }) {
    console.log(params.id, "this is params id")

    const res = await axios.post(`${process.env.API_URL}api/resetPassword/${params.id}/`)
  
    const data = res.data
    

  
    return {
      props: {
        data,
      },
    }
  
  }