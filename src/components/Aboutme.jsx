import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const Aboutme = () => {
  return (
    <div className='about'>  
        <div class="container">
    <header class="text-center my-5">
        <h1 style={{fontFamily:'initial'}}>About Me</h1><hr></hr>
    </header>
    
    <section class="bio mb-4">
        <p>I am a passionate and motivated B.Tech graduate in Information
Technology from St. Xavier's Catholic College of Engineering,
Kanyakumari. Currently pursuing a six-months full-stack course in
Python at Networkz Systems, Trivandrum. Strongly focused on
frontend development, with a passion for building responsive and
engaging web applications. Looking to leverage my technical
skills and creativity in a dynamic development team.
</p>
    </section>

    <section class="interests mb-4">
        <h2 style={{fontFamily:'initial'}}>My Interests</h2>
        <ul class="list-group">
            <h5 style={{fontFamily:'initial'}}>*Travel</h5>
            <h5 style={{fontFamily:'initial'}}>*Sports</h5>
            <h5 style={{fontFamily:'initial'}}>*Music</h5>
        </ul>
    </section>

</div>
</div>
  )
}

export default Aboutme