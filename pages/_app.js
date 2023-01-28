import * as React from "react";
import "../styles/global.css";
import "../styles/style.css";

import { AuthProvider } from "../context/AuthContext";
import { JobProvider } from "../context/JobContext";
import { NextUIProvider } from "@nextui-org/react";


export default function App({ Component, pageProps, session }) {
  return (
    
      <NextUIProvider>
        <AuthProvider>
          <JobProvider>
            <Component {...pageProps} />
          </JobProvider>
        </AuthProvider>
      </NextUIProvider>
   
  );
}
