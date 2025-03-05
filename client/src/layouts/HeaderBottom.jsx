import React from 'react';

const HeaderBottom = () => {
  return (
	<div className="header-bottom">
			<div className="fixed-header">
			<div className="container">
				<div className="top-menu">
					<span className="menu"><img src="assets/images/nav.png" alt=""/> </span>
                     <ul>
						<nav className="cl-effect-5">
					 <li><a  href="index.html"><span data-hover="Home">home</span></a></li>
					 <li><a className="scroll" href="#service"><span data-hover="service">service</span></a></li>
					 <li><a className="scroll" href="#about"><span data-hover="about">about</span></a></li>
					 <li><a href="menu.html"><span data-hover="menus">menus</span></a></li>
					 <li><a  href="event.html"><span data-hover="event">event</span></a></li>
					 <li><a className="scroll" href="#tests"><span data-hover="Tests">tests</span></a></li>
					 <li><a className="scroll" href="#location"><span data-hover="location">location</span></a></li>
					 </nav>
				 </ul>
				 {/* <!-- script for menu --> */}
					{/* <!--script-nav--> */}


					{/* <!-- //script for menu --> */}

						{/* <!-- script-for sticky-nav --> */}

					{/* <!-- //script-for sticky-nav -->		 */}
			 </div>

				</div>
			</div>
		</div>
  );
}

export default HeaderBottom;
