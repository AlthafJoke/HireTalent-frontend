import React from "react";
import Head from "next/head";
import Script from "next/script";
import Header from "./Header";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const Layout = ({ children, title = "HireTalent - Find your job now" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        
      </Head>

      
      <ToastContainer position="top-right"/>

      <Header />
      {children}

      <Footer/>




    </div>
  );
};

export default Layout;
