import React, { useState } from 'react';

const Job = ({ listing }) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    title,
    location,
    description,
    responsibilities,
    requirements,
    qualifications,
  } = listing;

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='job-content'>
      <button className='job-button' aria-label='Show job' onClick={toggleDetails}>{title} ↓</button>
      {isOpen && (
        <>
          <div className='job-block'>
            <h2>Location:</h2>
            {location}
          </div>
          <div className='job-block'>
            <h2>Job Description:</h2>
            {description}
          </div>
          <div className='job-block'>
            <h2>Key Responsibilities:</h2>
            <ul className='job-list'>
              {responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className='job-block'>
            <h2>Requirements:</h2>
            <ul className='job-list'>
              {requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className='job-block'>
            <h2>Preferred Qualifications:</h2>
            <ul className='job-list'>
              {qualifications.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className='content-offer job-block'>
            <h2>What We Offer:</h2>
            <ul className='job-list'>
              <li>
                Opportunity to work on cutting-edge projects in a highly
                innovative environment.
              </li>
              <li>Fully remote work with a flexible schedule.</li>
              <li>
                Competitive salary ranging from $5,000 to $12,000 per month,
                based on experience and qualifications.
              </li>
              <li>
                A collaborative and supportive team of experts passionate about
                technology and research.
              </li>
            </ul>
          </div>
          <div className='job-block'>
            <div className='title-secondary'>
              <h2>How to Apply:</h2>
            </div>
            <p>
              Please send your resume, a brief cover letter, and links to any
              relevant projects or publications to <a className='link-mail' href='mailto:neurogeometrica@gmail.com'>neurogeometrica@gmail.com</a>. We
              look forward to hearing from you!
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Job;
