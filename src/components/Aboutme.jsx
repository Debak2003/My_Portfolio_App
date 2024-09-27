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
        {/* <h2 style={{fontFamily:'initial'}}>Hi, I'm Debak !</h2> */}
        <p>Recent Information Technology Engineering graduate proficient in Python programming and full-stack web development.
Skilled in frontend (HTML, CSS, JavaScript, Bootstrap,React). Currently pursuing a B.T and seeking new opportunities to
leverage my development expertise.
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