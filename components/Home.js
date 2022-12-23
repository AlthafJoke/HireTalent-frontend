import React from "react";
import Link from "next/link";
import JobItem from "./job/JobItem";
import { useRouter } from "next/router";
import Pagination from 'react-js-pagination'
import Filters from "./layout/Filters";

const Home = ({data}) => {
  const {jobs, count, resPerPage} = data
  const router = useRouter();

  let {page = 1, keyword} = router.query;

  page = Number(page)

  let queryPrams;
  if(typeof window !== 'undefined') {
    queryPrams = new URLSearchParams(window.location.search);
  }

  const handlePageClick = (currentPage) => {
    if(queryPrams.has('page')){
      queryPrams.set('page', currentPage) 

    }

    else{
      queryPrams.append('page', currentPage)
    }

    router.push({
      search: queryPrams.toString()
    })


  }



  return (
    <div className="container-sm">
      <div className="row ">
        <div className="col-xl-3 col-lg-4 ">
          <Filters />
        </div>
        <div className="col-xl-9 col-lg-8 content-left-offset text-white">
          <div className="my-5">
            <h4 className="page-title text-xl"> {keyword? `${jobs.length} Results for ${keyword}`: "Latest Jobs" } </h4>
            <Link  href="/stats">
              <button className="bg-transparent py-2 px-4 border   rounded float-right stats_btn ">
                Get Topic stats
              </button>
            </Link>
            <div className="d-block ">
              <Link  href="/search" className="hover:no-underline font-bold text-xl">Go to Search</Link>
            </div>
          </div>
          {/* if jobs exist start mapping job*/}
          {jobs && jobs.map((job) => <JobItem key={job.id} job={job}/>)}


          {resPerPage < count && (
            <div className="flex justify-center">
              <Pagination
              activePage={page}
              itemsCountPerPage={resPerPage}
              totalItemsCount={count}
              onChange={handlePageClick}
              nextPageText={"Next"}
              prevPageText={"Prev"}
              firstPageText={"First"}
              lastPageText={"Last"}
              itemClass="page-item"
              linkClass="page-link"
  
              />
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
