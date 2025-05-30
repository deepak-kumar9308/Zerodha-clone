import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h2 className="fs-2 text-center text-muted">
          We pioneered the discount broking model in India. <br></br>
          Now, we are breaking ground with our technology.
        </h2>
      </div>
      <div className="row p-5 mt-5 border-top" style={{lineHeight:"1.8" , fontSize:"1.1rem"}}>
        <div className="col-6 p-5">
          <p className=" text-muted">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier. <br></br> <br></br>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.<br></br> <br></br>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.<br></br> <br></br>
          </p>
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

export default Hero;
