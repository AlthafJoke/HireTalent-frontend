import Layout from '../../../components/layout/Layout'
import ResetPassword from '../../../components/auth/ResetPassword'

import axios from 'axios'

export default function ResetPasswordPage({data}) {
  return (
    <Layout >
        <ResetPassword data={data}/> 
    </Layout>
  )
}


export async function getServerSideProps({ req, params }) {

    const res = await axios.post(`${process.env.API_URL}api/forgot-password/verify/`,{
      uid:params.uid,
      token:params.token
    })
  
    const data = res.data
 

    
    

  
    return {
      props: {
        data,
      },
    }
  
  }