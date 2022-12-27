import Layout from "../../../../components/layout/Layout";
import axios from "axios";
import JobCandidates from "../../../../components/job/JobCandidates";
import { isAuthenticatedUser } from "../../../../utils/isAuthenticated";

export default function JobCandidatesPage({ candidatesApplied, error }) {
  return (
    <>
      <Layout title="Job candidates">
        <JobCandidates candidatesApplied={candidatesApplied} />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ req, params }) {
  const access_token = req.cookies.access;

  const user = await isAuthenticatedUser(access_token);

  

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  try {
    const res = await axios.get(`${process.env.API_URL}api/job/${params.id}/candidates/`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const candidatesApplied = res.data;
    return {
      props: {
        candidatesApplied,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
