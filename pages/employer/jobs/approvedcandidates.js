

export default function ApprovedCandidates() {
  
  return (
    
    <>
    {/* <Layout title="Approved"> */}
      <ApprovedCandidates  />
    {/* </Layout> */}
    </>
  );
}

// export async function getServerSideProps({ req }) {
  
//   const access_token = req.cookies.access;

//   const usertoken = await isAuthenticatedUser(access_token);

//   const decodeduser = jwtDecode(access_token);
 

  

  

//   if (!decodeduser.is_recruiter) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   const res = await axios.get(`${process.env.API_URL}api/me/jobs/`, {
//     headers: {
//         Authorization: `Bearer ${access_token}`
        
//     }
//   })
  

//   const jobs = res.data

  

  

//   return {
//     props: {
//       access_token,
//       jobs,
     
//     },
//   };
// }