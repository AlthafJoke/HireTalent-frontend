import React from "react";
import Login from "../components/auth/Login";
import ResetPasswordRequest from "../components/auth/ResetPasswordRequest";

import Layout from "../components/layout/Layout";

export default function ResetPage () {
  return (
    <Layout title="Reset Password">
      <ResetPasswordRequest />
    </Layout>
  );
}