import React, { useState, useEffect } from "react";
// import { FaAngleDoubleRight } from "react-icons/fa";
import Companies from "./components/Companies";
import Duties from "./components/Duties";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  console.log(`app called`);
  const [data, setData] = useState([]);
  const [jobInfo, setJobInfo] = useState([]);

  useEffect(() => {
    console.log(`useEffct called`);
    async function fetchJobs() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
        setJobInfo(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchJobs();
  }, []);

  // console.log(jobInfo);

  function showJobInfo(e) {
    const newInfo = data.filter(
      (job) => job.company === e.target.textContent.toUpperCase()
    );

    setJobInfo(newInfo);
  }

  return (
    <main>
      {console.log(`return called`)}
      <section className="section">
        <div className="title">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          <Companies showJobInfo={showJobInfo} />
          <Duties jobInfo={jobInfo} />
        </div>
        <button className="btn btn-center">More Info</button>
      </section>
    </main>
  );
}

export default App;
