


import NewJob from "../../../components/job/NewJob";
import Layout from "../../../components/layout/Layout";
import {isAuthenticatedUser} from "../../../utils/isAuthenticated"

export default function NewJobPage({ access_token }) {
  
  return (
    <>
    <Layout title="Post a new job">
      <NewJob access_token={access_token} />
    </Layout>
    </>
  );
}

export async function getServerSideProps({ req }) {
  
  const access_token = req.cookies.access;

  const user = await isAuthenticatedUser(access_token);

  console.log("this is user value: ", user);

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  

  

  return {
    props: {
      access_token,
    },
  };
}