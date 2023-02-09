import Layout from "../../../components/recruiter/layout/Layout";
import axios from "axios";
import UpdateJob from "../../../components/job/UpdateJob";
import { isAuthenticatedUser } from "../../../utils/isAuthenticated";
import jwtDecode from "jwt-decode";

export default function UpdateJobPage({ job, access_token }) {
  return (
    <>
      <Layout title="Update Job">
        <UpdateJob access_token={access_token} job={job} />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ req, params }) {
  const access_token = req.cookies.access;

  const user = await isAuthenticatedUser(access_token);
  const decodeduser = jwtDecode(access_token);

  if (!user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  try {
    const res = await axios.get(`${process.env.API_URL}api/job/${params.id}/`);

    const job = res.data.job;
    return {
      props: {
        job,
        access_token,
      },
    };
  } catch (error) {
  
  }
}
