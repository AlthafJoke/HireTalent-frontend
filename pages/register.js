import React from "react";
import Register from "../components/auth/Register";
import Layout from "../components/layout/Layout";

export default function LoginPage () {
  return (
    <Layout title="Login ">
      <Register />
    </Layout>
  );
}