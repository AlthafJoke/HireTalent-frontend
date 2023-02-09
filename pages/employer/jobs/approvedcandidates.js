import React from "react";
import Layout from "../../../components/layout/Layout";
import ApprovedCandidates from "../../../components/recruiter/ApprovedCandidates";


export default function ApprovedCandidatesPage({approved}) {
  
  return (
    
    <>
    <Layout title="Approved">
      <ApprovedCandidates  approved={approved}/>
    </Layout>
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

  const res = await axios.get(`${process.env.API_URL}api/approved-candidates/`, {
    headers: {
        Authorization: `Bearer ${access_token}`
        
    }
  })
  

  const approved = res.data

  

  

  return {
    props: {
      access_token,
      approved,
     
    },
  };
}