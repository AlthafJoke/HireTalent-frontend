import React from "react";
import Login from "../components/auth/Login";
import ResetPassword from "../components/auth/ResetPassword";
import Layout from "../components/layout/Layout";

export default function ResetPage () {
  return (
    <Layout title="Reset Password">
      <ResetPassword />
    </Layout>
  );
}