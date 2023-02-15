import axios from "axios";
import jwtDecode from "jwt-decode";
import { useState } from "react";
import ApprovedCandidates from "../../components/recruiter/ApprovedCandidates";
import Layout from "../../components/recruiter/layout/Layout";

export default function ApprovedPage({approved}) {
  
  return (
    <Layout>
      <ApprovedCandidates approved={approved} />
    </Layout>
  );
}

export async function getServerSideProps({req}) {
  const access_token = req.cookies.access;
  if (access_token){

    const decodeduser = jwtDecode(access_token);
    if (!decodeduser.is_recruiter) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  }


  if (!access_token){
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  }
  

  const response = await axios.get(`${process.env.API_URL}api/approved-candidates/`, {
    headers: {
      Authorization: `Bearer ${access_token}`
      
  }
  
  })

  

   const approved = response.data

   
  

  return {
    props: {
      approved,
     
    }
  }



}
