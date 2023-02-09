


import NewJob from "../../../components/job/NewJob";
import Layout from "../../../components/recruiter/layout/Layout";
import {isAuthenticatedUser} from "../../../utils/isAuthenticated"
import AuthContext from "../../../context/AuthContext";
import { useContext } from "react";
import StatusVerify from "../../../components/verify/StatusVerify";
import jwtDecode from "jwt-decode";

export default function NewJobPage({ access_token }) {
  const {isRecruiter, isApproved} = useContext(AuthContext)
  
  return (
    <>
    <Layout title="Post a new job">
      {isRecruiter && isApproved? <NewJob access_token={access_token} />:<StatusVerify/>}
    </Layout>
    </>
  );
}

export async function getServerSideProps({ req }) {
  
  const access_token = req.cookies.access;

  const user = await isAuthenticatedUser(access_token);

  const decodeduser = jwtDecode(access_token);



  if (!decodeduser.is_recruiter) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  

  

  return {
    props: {
      access_token,
    },
  };
}