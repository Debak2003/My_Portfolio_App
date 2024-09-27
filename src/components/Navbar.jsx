import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      {/*............................. navbar............................... */}
       <nav class="navbar navbar-expand-lg nav-bg-black">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><Link to={'/'} style={{textDecoration:'none',color:' #e2e2ce',fontFamily:'-moz-initial'}}><h1>MyPortfolio</h1></Link></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><Link to={'/'} style={{textDecoration:'none', color:' #e2e2ce',fontFamily:'-moz-initial'}}>Home</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><Link to={'/about'} style={{textDecoration:'none',color:' #e2e2ce',fontFamily:'-moz-initial'}}>About Me</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><Link to={'/education'} style={{textDecoration:'none',color:'#e2e2ce',fontFamily:'-moz-initial'}}>Education</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><Link to={'/skill'} style={{textDecoration:'none',color:' #e2e2ce',fontFamily:'-moz-initial'}}>Skills</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><Link to={'/project'} style={{textDecoration:'none',color:'#e2e2ce',fontFamily:'-moz-initial'}}>Projects</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><Link to={'/contact'} style={{textDecoration:'none',color:' #e2e2ce',fontFamily:'-moz-initial'}}>Contact Me</Link></a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar