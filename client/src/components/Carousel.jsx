import React from 'react';

const Carousel = () => {
  return (
    <div className="slider">
    <div className="callbacks_container">
          <ul className="rslides" id="slider">
            <li>
                  <img src="assets/images/1.jpg" alt=""/>
                <div className="caption wow bounceIn animated" data-wow-delay="0.4s" style={{visibility: "visible", WebkitAnimationDelay: 0.4}} >
                    <div className="logo">
                        <a href="index.html">fast food</a>
                    </div>
                    <h3>Restaurant</h3>
                </div>
            </li>
    <li>
      <img src="assets/images/2.jpg" alt=""/>
         <div className="caption wow bounceIn animated"  data-wow-delay="0.4s" style={{visibility: "visible", WebkitAnimationDelay: 0.4}}>
             <div className="logo">
              <a href="index.html">fast food</a>
              </div>
         <h3>Restaurant</h3>
     </div>
     </li>
    <li>
      <img src="assets/images/3.jpg" alt=""/>
      <div className="caption wow bounceIn animated" data-wow-delay="0.4s" style={{visibility: "visible", WebkitAnimationDelay: 0.4}}>
          <div className="logo">
              <a href="index.html">fast food</a>
              </div>
          <h3>Restaurant</h3>
          </div>
    </li>
    <li>
      <img src="assets/images/4.jpg" alt=""/>
      <div className="caption wow bounceInLeft animated" data-wow-delay="0.4s" style={{visibility: "visible", WebkitAnimationDelay: 0.4}}>
          <div className="logo">
              <a href="index.html-">fast food</a>
              </div>
          <h3>Restaurant</h3>
          </div>
    </li>
  </ul>
</div>
</div>
  );
}

export default Carousel;
