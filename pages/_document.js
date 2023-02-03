import React from "react";
import { Html, Head, Main  } from "next/document";
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
       
        

        <Script
          src="https://accounts.google.com/gsi/client"
          async
          defer
        ></Script>
       
      </body>
    </Html>
  );
}
