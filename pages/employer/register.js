import React from "react";
import Layout from "../../components/layout/Layout";
import RecruiterRegister from "../../components/auth/EmployerRegister";


export default function EmployerRegisterPage () {
  return (
    <Layout title="Register as Employer ">
      <RecruiterRegister/>
    </Layout>
  );
}