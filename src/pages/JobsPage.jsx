import React from 'react';
import Job from '../components/Job';
import jobs from '../jobs';

const JobsPage = () => {
  return (
    <div className='container'>
      <div className='title-primary'><h1>Current Openings</h1></div>
      {jobs.map((job, index) => (
        <Job key={index} listing={job} />
      ))}
    </div>
  );
};

export default JobsPage;
