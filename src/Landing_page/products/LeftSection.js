import React from "react";
function LeftSection({imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay,appstore,}) {
  return (
   <div className="conatiner">
    <div className="row">
      <div className="col-6">
        <img src={imageUrl}></img>
      </div>
      <div className="col-6">
        <h1>{productName}</h1>
        <p>{productDescription}</p>
        <a href={tryDemo}>Try Demo</a>
        <a href={learnMore}>Learn More</a>
        <a href={googlePlay}><img src=""></img></a>
        <a href={appstore}><img src=""></img></a>
      </div>
    </div>
   </div>
  );
}

export default LeftSection;
