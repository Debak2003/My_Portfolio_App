import React from 'react'
import img1 from '../components/kk.webp';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const Projects = () => {
  return (
    <div>
        <div class="container">
          <br></br>
      <h1 style={{fontFamily:'-moz-initial'}}>PROJECTS</h1><hr></hr>
    <br /><br />
      <div class="row" >
                <div class="card col-md-5" style={{padding:'20px',margin:'10px'}}>
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img src={img1} class="img-fluid" alt="..." style={{height:'fit-content',margin:'10px'}}></img>
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">Tourism Website</h5>
                            <p class="card-text">Tourism Website Using HTML,CSS,Bootstrap</p>
                            <a class="btn btn-dark" href=" https://debak2003.github.io/tourism-website/" role="button">View Project</a>
                          </div>
                        </div>
                      </div>
                </div>

          <div class="card col-md-5" style={{padding:'20px',margin:'10px'}} >
            <div class="row g-0">
              <div class="col-md-4">
                <img src={img1} class="img-fluid" alt="..." style={{height:'fit-content',margin:'10px'}}></img>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Tourism Website</h5>
                  <p class="card-text">Tourism Website Using HTML,CSS,Bootstrap</p>
                  <a class="btn btn-dark" href=" https://debak2003.github.io/tourism-website/" role="button">View Project</a>
                </div>
              </div>
            </div>
          </div>
      </div>
     
      </div>

{/* <div class="card col-md-6">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={img1} class="img-fluid rounded-start" alt="..."></img>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Tourism Website</h5>
        <p class="card-text">Tourism Website Using HTML,CSS,Bootstrap</p>
        <a class="btn btn-dark" href=" https://debak2003.github.io/tourism-website/" role="button">View Project</a>
      </div>
    </div>
  </div>
</div> */}
</div>
   
  )
}

export default Projects