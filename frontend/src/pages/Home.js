import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('/api/jobs').then((res) => setJobs(res.data));
  }, []);

  return (
    <div className='p-4'>
      <h1 className='text-xl font-bold'>Available Jobs</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job._id} className='border p-2 my-2 rounded'>
            <h2 className='text-lg font-semibold'>{job.title}</h2>
            <p>{job.company} - {job.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;