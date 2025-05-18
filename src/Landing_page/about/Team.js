import React from 'react';
function Team() {
    return ( 
        <div className="container">
        <div className="row p-5 mt-5 mb-5 border-top">
          <h2 className="text-center mt-5 ">
           People
          </h2>
        </div>
        <div className="row p-5 mt-5 " >
          <div className="col-6 p-5">
                <img src='/media/nithinKamath.jpg' alt='nithinKamath'></img>
          </div>
          <div className="col-6 p-5">
            <p className=" text-muted">
              In addition, we run a number of popular open online educational and
              community initiatives to empower retail traders and investors.
              <br></br> <br></br>
              <a href='#' style={{textDecoration:"none"}}>Rainmatter</a>, our fintech fund and incubator, has invested in several
              fintech startups with the goal of growing the Indian capital
              markets.<br></br> <br></br>
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our <a href='#' style={{textDecoration:"none"}}>blog</a> or see what the media is <a href='#' style={{textDecoration:"none"}}>saying about us</a>.
            </p>
          </div>
        </div>
      </div>
 );
}

export default Team;