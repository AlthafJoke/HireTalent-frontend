import * as React from 'react';
import "../styles/globals.css";
import { AuthProvider } from "../context/AuthContext";
import { JobProvider } from "../context/JobContext";
import { NextUIProvider } from '@nextui-org/react';

export default function App({ Component, pageProps }) {
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
