import React from 'react';

const Footer = () => {
  return (
    <footer>
        <div className="footer-section">
			<div className="container">
				<div className="footer-top wow bounceInRight animated" data-wow-delay="0.4s" style={{visibility: "visible", WebkitAnimationDelay: 0.4}}>
					<div className="social-icons">
                        <a href="#"><i className="icon4"></i></a>
                        <a href="#"><i className="icon5"></i></a>
                        <a href="#"><i className="icon6"></i></a>
					</div>
				</div>
                <div className="footer-bottom">
                    <p> Copyright &copy;2015  All rights  Reserved | Design by<a href="http://w3layouts.com" target="target_blank">W3Layouts</a></p>
                </div>
                <a className="scroll" href="#head" id="toTop" style={{display: "block"}}> <span id="toTopHover" style={{opacity: 1}}> </span></a>
			</div>
		</div>      
    </footer>
  );
}

export default Footer;
