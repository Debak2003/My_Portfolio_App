import React from 'react'
import img1 from '../components/kk.webp';
import movie from '../components/movie2.jpg'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const Projects = () => {
  return (
    <div>
        <div className="container">
          <br></br>
      <h1 style={{fontFamily:'-moz-initial'}}>PROJECTS</h1><hr></hr>
    <br /><br />
      <div className="row" >
                <div className="card col-md-5" style={{padding:'20px',margin:'10px'}}>
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img src={img1} className="img-fluid" alt="..." style={{height:'fit-content',margin:'10px'}}></img>
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">Tourism Website</h5>
                            <p className="card-text">Tourism Website Using HTML,CSS,Bootstrap</p>
                            <a className="btn btn-dark" href=" https://debak2003.github.io/tourism-website/" role="button">View Project</a>
                          </div>
                        </div>
                      </div>
                </div>

          <div className="card col-md-5" style={{padding:'20px',margin:'10px'}} >
            <div className="row g-0">
              <div className="col-md-4">
                <img src={movie} className="img-fluid" alt="..." style={{height:'fit-content',margin:'10px'}}></img>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Movie Recommender</h5>
                  <p className="card-text">Movie Recommender using React JS</p>
                  <a className="btn btn-dark" href="https://debak2003.github.io/Movie_Recommender/" role="button">View Project</a>
                </div>
              </div>
            </div>
          </div>
      </div>
     
      </div>

{/* <div className="card col-md-6">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={img1} className="img-fluid rounded-start" alt="..."></img>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Tourism Website</h5>
        <p className="card-text">Tourism Website Using HTML,CSS,Bootstrap</p>
        <a className="btn btn-dark" href=" https://debak2003.github.io/tourism-website/" role="button">View Project</a>
      </div>
    </div>
  </div>
</div> */}
</div>
   
  )
}

export default Projects