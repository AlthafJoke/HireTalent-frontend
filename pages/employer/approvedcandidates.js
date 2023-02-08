import axios from "axios";
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
  

 

  const response = await axios.get(`${process.env.API_URL}api/approved-candidates/`, {
  
  })

  

   const approved = response.data

   
  

  return {
    props: {
      approved,
     
    }
  }



}
