import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import resume from '../components/NewResume2024.pdf'
import img1 from '../components/dpbg.png';
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={img1} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="300" height="200" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3"><h3  class="col" id='letter'>HEY,</h3>
         <h2 class="col" id='letter'>I AM</h2>
         <h1 class="col" id='letter'>DEBAK A</h1></h1>
          <div className='texttype'>
       <ReactTyped strings={["Frontend Developer Using React JS"]}
        typeSpeed={40}
        backSpeed={50}
        loop
        /> 
        </div>
        {/* <a className="btn btn-dark" href="NewResume2024.pdf" role="button">Download CV</a> */}
         
          <button type="button"  className="btn btn-dark btn-lg px-4 mt-4 me-md-2">
          <a href={resume} download='resume' style={{textDecoration:'none',color:'white'}}> Download CV </a> 
          </button>
        </div>
       </div>
       </div>
  )
}

export default Home