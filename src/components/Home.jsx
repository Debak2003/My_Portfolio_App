import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import img1 from '../components/dpbg.png';
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div >
      {/*.............................. background DP image..............................*/}
    <div class="container">
    <div class="row">
        <div class="col" style={{paddingTop:'125px',paddingLeft:'125px'}}>
        <img src={img1} className='home-main' height={350} width={350} s/>
        </div>
        {/*.............................. text as home page ..............................*/}
        <div class="col" id='letter'>
        <h3>HEY,</h3>
        <h2>I AM</h2>
        <h1>DEBAK A</h1>
        {/*................................. text-typed.................................. */}
        <div className='texttype'>
        <ReactTyped strings={["Frontend Developer Using React JS"]}
        typeSpeed={40}
        backSpeed={50}
        loop
        />
        </div>
        <a class="btn btn-dark" href="#" role="button">Download CV</a>
        </div>
         </div>
          </div>
           </div>
  )
}

export default Home