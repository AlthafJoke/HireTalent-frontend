import Home from "../components/Home";
import Layout from "../components/layout/Layout";
import axios from "axios";

export default function Index({ data }) {
  return (
    <>
      <Layout>
        <Home data={data} />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const keyword = query.keyword || "";
  const location = query.location || "";
  const page = query.page || 1;

  const queryStr = `keyword=${keyword}&location=${location}&page=${page}`;

  const response = await axios.get(
    `${process.env.API_URL}api/jobs?${queryStr}`
  );

  const data = response.data;

  return {
    props: {
      data,
    },
  };
}
