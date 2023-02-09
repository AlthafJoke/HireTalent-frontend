import React from "react";
import Home from "../../components/admin/Home";
import Layout from "../../components/admin/Layout";
import SideBar from "../../components/admin/SideBar";


export default function adminHomePage(){
    return (
        <>
        <Layout>
            <Home/>
        </Layout>
        </>
      );
}