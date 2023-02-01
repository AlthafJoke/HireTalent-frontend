import React from "react";
import Login from "../components/auth/Login";
import Layout from "../components/layout/Layout";

export default function LoginPage ({google_id}) {
  return (
    <Layout title="Login ">
      <Login google_id={google_id}/>
    </Layout>
  );
}


export async function getServerSideProps({ req }) {

  const google_id = process.env.NEXT_GOOGLE_CLIENT_ID


  return {
    props: {
      google_id,
      
     
    },
  };

}


