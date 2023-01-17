import React from "react";
import { useRouter } from "next/router";

const Filters = () => {
  const router = useRouter();

  let queryPrams;
  if (typeof window !== "undefined") {
    queryPrams = new URLSearchParams(window.location.search);
    queryPrams.delete('page');
    queryPrams.set('page',1);

  }

  console.log(queryPrams)

  function handleClick(checkbox) {
    

    if (typeof window !== "undefined") {
      
      const checkboxes = document.getElementsByName(checkbox.name);
      console.log(checkboxes);

      checkboxes.forEach((item) => {
        if (item !== checkbox){
            item.checked = false;   // this will uncheck previous checked

        } 
      });

      if(checkbox.checked == false) {
        // Delete the filter from query (url)
        if (queryPrams.has(checkbox.name)) {
            queryPrams.delete(checkbox.name)
            router.replace({
                search: queryPrams.toString()
            })
        }
      }
      else{
        // Set new filter value if it already there
        if (queryPrams.has(checkbox.name)){
            queryPrams.set(checkbox.name, checkbox.value)

        }
        else{
            //appened the new filter
            queryPrams.append(checkbox.name, checkbox.value)
        }
        router.replace({
            search: queryPrams.toString()
        });




      }
    }
  }

  function checkHandler(checkBoxType, checkBoxValue) {
    if (typeof window !== "undefined") {
        const value = queryPrams.get(checkBoxType)
        if (checkBoxValue == value){
            return true
        }
        else{
            return false
        }
    }
  }

  return (
    <div className="sidebar mt-5 bg-white p-3 ">
      <h3 className="flex justify-center text-xl items-center font-bold ">
        Filters
      </h3>

      <hr />
      <h5 className="filter-heading mb-2 mt-2 font-semibold ">Job Type</h5>

      <div className="form-check ">
        <input
          className="form-check-input"
          type="checkbox"
          name="jobType"
          id="check1"
          value="Permenent"
          defaultChecked={checkHandler("jobType", "Permenent")}
          onClick={(e) => handleClick(e.target)}
        />
        <label className="form-check-label" htmlFor="check1 ">
          Permanent
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="jobType"
          id="check2"
          value="Temporary"
          defaultChecked={checkHandler("jobType", "Temporary")}
          onClick={(e) => handleClick(e.target)}
        />
        <label className="form-check-label" htmlFor="check2">
          Temporary
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="jobType"
          id="check3"
          value="Internship"
          defaultChecked={checkHandler("jobType", "Internship")}
          onClick={(e) => handleClick(e.target)}
        />
        <label className="form-check-label" htmlFor="check3">
          Internship
        </label>
      </div>

      <hr />
      <h5 className="mb-2 mt-2 font-semibold">Education</h5>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="education"
          id="check4"
          value="Bachelors"
          defaultChecked={checkHandler("education", "Bachelors")}
          onClick={(e) => handleClick(e.target)}
        />
        <label className="form-check-label" htmlFor="check4">
          Bachelors
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="education"
          id="check5"
          value="Masters"
          defaultChecked={checkHandler("education", "Masters")}
          onClick={(e) => handleClick(e.target)}
        />
        <label className="form-check-label" htmlFor="check5">
          Masters
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="education"
          id="check6"
          value="Phd"
          defaultChecked={checkHandler("education", "Phd")}
          onClick={(e) => handleClick(e.target)}
        />
        <label className="form-check-label" htmlFor="check6">
          Phd
        </label>
      </div>

      <hr />

      <h5 className="mb-2 mt-2 font-semibold">Experience</h5>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="experience"
          id="check7"
          value="No Experience"
          defaultChecked={checkHandler("experience", "No Experience")}
          onClick={(e) => handleClick(e.target)}
        />
        <label className="form-check-label" htmlFor="check7">
          No Experience
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="experience"
          id="check8"
          value="1 Year"
          defaultChecked={checkHandler("experience", "1 Year")}
          onClick={(e) => handleClick(e.target)}
        />
        <label className="form-check-label" htmlFor="check8">
          1 Years
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="experience"
          id="check9"
          value="2 Years"
          defaultChecked={checkHandler("experience", "2 Years")}
          onClick={(e) => handleClick(e.target)}
        />
        <label className="form-check-label" htmlFor="check9">
          2 Years
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="experience"
          id="check10"
          value="3 Years above"
          defaultChecked={checkHandler("experience", "3 Years above")}
          onClick={(e) => handleClick(e.target)}
        />
        <label className="form-check-label" htmlFor="check10">
          3 Year+
        </label>
      </div>

      <hr />
      <h5 className="mb-2 font-semibold mt-2">Salary Range</h5>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="salary"
          id="check11"
          value="1-50000"
          defaultChecked={checkHandler("salary", "1-50000")}
          onClick={(e) => handleClick(e.target)}
        />
        <label className="form-check-label" htmlFor="check11">
          $1 - $50000
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="salary"
          id="check12"
          value="50000-100000"
          defaultChecked={checkHandler("salary", "50000-100000")}
          onClick={(e) => handleClick(e.target)}
        />
        <label className="form-check-label" htmlFor="check12">
          $50000 - $100,000
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="salary"
          id="check13"
          value="100000-200000"
          defaultChecked={checkHandler("salary", "100000-200000")}
          onClick={(e) => handleClick(e.target)}
        />
        <label className="form-check-label" htmlFor="check13">
          $100,000 - $200,000
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="salary"
          id="defaultCheck2"
          value="300000-500000"
          defaultChecked={checkHandler("salary", "300000-500000")}
          onClick={(e) => handleClick(e.target)}
        />
        <label className="form-check-label" htmlFor="defaultCheck2">
          $300,000 - $500,000
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="salary"
          id="check14"
          value="500000-1000000"
          defaultChecked={checkHandler("salary", "500000-1000000")}
          onClick={(e) => handleClick(e.target)}
        />
        <label className="form-check-label" htmlFor="check14">
          $500,000 - $1,000,000
        </label>
      </div>

      <hr />
    </div>
  );
};

export default Filters;
