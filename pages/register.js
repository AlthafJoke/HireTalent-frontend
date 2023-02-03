import React from "react";
import Register from "../components/auth/Register";
import Layout from "../components/layout/Layout";

export default function LoginPage () {
  return (
    <Layout title="Register as Job seeker ">
      <Register />
    </Layout>
  );
}


export async function getServerSideProps({ req }) {

  const url = process.env.API_URL


  return {
    props: {
      url,
      
     
    },
  };

}