import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const Skills = () => {
  return (
    <div className='skill'> 
         <h1  style={{fontFamily:'initial'}}>FRONTEND DEVELOPER</h1> 
         <hr></hr>
         {/*.................. html bar..................... */}
       <div class="row">
       <div class="col-md-3">
      <h4  style={{fontFamily:'initial'}}>HTML</h4>
      <div class="progress " role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-dark" style={{width: '80%'}}>80%</div>
  </div>
  </div>
  {/*............................... css bar........................... */}
  <div class="col-md-3">
      <h4 style={{fontFamily:'initial'}}>CSS</h4>
      <div class="progress " role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-dark"  style={{width: '70%'}}>70%</div>
  </div>
  </div>
  {/* ...........................Bootstrap bar........................ */}
  <div class="col-md-3">
      <h4 style={{fontFamily:'initial'}}>Bootstrap</h4>
      <div class="progress " role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-dark"  style={{width: '85%'}}>85%</div>
  </div>
  </div>
  {/* .............................Java script .........................*/}
  <div class="col-md-3">
      <h4 style={{fontFamily:'initial'}}>Java Script</h4>
      <div class="progress " role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-dark"  style={{width: '50%'}}>50%</div>
  </div>
  </div>
  {/* .............................React JS ............................*/}
  <div class="col-md-3">
      <h4 style={{fontFamily:'initial'}}>React JS</h4>
      <div class="progress " role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-dark"  style={{width: '65%'}}>65%</div>
  </div>
  </div>
  {/*.............................. github........................... */}
  <div class="col-md-3">
      <h4 style={{fontFamily:'initial'}}>GitHub</h4>
      <div class="progress " role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-dark"  style={{width: '50%'}}>50%</div>
  </div>
  </div>
  {/*............................ power point......................... */}
  <div class="col-md-3">
      <h4 style={{fontFamily:'initial'}}>Power Point</h4>
      <div class="progress " role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-dark"  style={{width: '70%'}}>70%</div>
  </div>
  </div>
</div>
<h1 style={{fontFamily:'initial'}}>LANGUAGES</h1>
<hr></hr>
{/*............................. tamil............................ */}
<div class="row">
       <div class="col-md-3">
      <h4 style={{fontFamily:'initial'}}>Tamil</h4>
      <div class="progress " role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-dark" style={{width: '90%'}}>90%</div>
  </div>
  </div>
{/*.............................. English ........................*/}
  <div class="col-md-3">
      <h4 style={{fontFamily:'initial'}}>English</h4>
      <div class="progress " role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-dark" style={{width: '60%'}}>60%</div>
  </div>
  </div>
  {/* ............................Malayalam ............................*/}
  <div class="col-md-3">
      <h4 style={{fontFamily:'initial'}}>Malayalam</h4>
      <div class="progress " role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-dark" style={{width: '70%'}}>70%</div>
  </div>
  </div>




  </div>






</div>
  )
}

export default Skills