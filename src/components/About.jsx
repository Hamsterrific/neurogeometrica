import React from 'react';

const About = () => {
  return (
    <div className='container'>
      <div className='content about'>
        <p>We are a cutting-edge startup transforming CAD (Computer-Aided Design)
        with state-of-the-art neural network technologies. Our work focuses on
        advancing:</p>
        <ul className='about-list'>
        <li>Geometric Solvers: enhancing efficiency in 3D modeling and
        design.</li>
        <li>Nonlinear Equation Solvers on GPUs: delivering high-performance
        solutions for complex engineering tasks.</li>
        </ul>
        <p>Our team, including PhD-level
        experts in AI, computational geometry, and software development, is
        dedicated to research and development. By combining academic excellence
        with practical innovation, we create faster and more robust components
        to enhance existing CAD packages. Let’s shape the future of CAD
        together!</p>
      </div>
    </div>
  );
};

export default About;
