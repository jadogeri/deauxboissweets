import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes.jsx";
import React, { useEffect } from 'react'
import ForgotPassword from "../pages/ForgotPassword.jsx";
import ResetPassword from "../pages/ResetPassword.jsx"
import NoPage from '../pages/NoPage.jsx';
import DashBoard from '../pages/DashBoard'
import TestPage from "../pages/TestPage.jsx";
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
import Event from "../pages/Event.jsx";
import Menu from "../pages/Menu.jsx";
import Home from "../pages/Home.jsx"
import $ from "jquery"
import { WOW } from "wowjs"

// import TestStore from "../components/testcomponent/TestStore.jsx"


const ProjectRoutes = () => {
	useEffect(() => {
	
			window.scrollFunction()
			window.slider()
			//window.swipebox()
	
	
			$(document).ready(function($) {
				$(".scroll").click(function(event){		
					event.preventDefault();
					$('html,body').animate({scrollTop:$(this.hash).offset().top},1200);
				});
			});
	  
			new WOW().init();
			var navoffeset=$(".header-bottom").offset().top;
			console.log("value of offset ==== ", navoffeset)
			$(window).scroll(function(){
			 var scrollpos=$(window).scrollTop(); 
			 if(scrollpos >=navoffeset){
			   $(".header-bottom").addClass("fixed");
			 }else{
			   $(".header-bottom").removeClass("fixed");
			 }
			});
	
			// $(document).ready(function($) {
			// 	$(".scroll").click(function(event){		
			// 	  event.preventDefault();
			// 	  $('html,body').animate({scrollTop:$(this.hash).offset().top},1200);
			// 	});
	
	
				
			//   });
	
			
	
			  $("span.menu").click(function(){
				$(".top-menu ul").slideToggle("slow" , function(){
				});
				});
	
		
	
		})
	
	let auth = localStorage.getItem("AUTHKEY");
	
	console.log("in projectsss auth ===  ",auth)

  return (


	<BrowserRouter >

		<Routes >				
			<Route path="/" element={auth ? <Navigate to="/dashboard" /> : <Home />} index /> 
			<Route path="/resetpassword" element={auth ? <Navigate to="/dashboard" /> : <ResetPassword />} /> 
			<Route path="/forgotpassword" element={auth ? <Navigate to="/dashboard" /> :<ForgotPassword />} /> 
			<Route path="/login" element={auth ? <Navigate to="/dashboard" /> :<Login />} /> 
			<Route path="/register" element={auth ? <Navigate to="/dashboard" /> :<Register />} /> 
			<Route path="/event" element={auth ? <Navigate to="/dashboard" /> :<Event />} /> 
			<Route path="/Home" element={auth ? <Navigate to="/dashboard" /> :<Home />} /> 
			<Route path="/test" element={auth ? <Navigate to="/dashboard" /> :<TestPage />} /> 
			<Route path="/menu" element={auth ? <Navigate to="/dashboard" /> :<Menu />} /> 
			<Route path="*" element={<NoPage />} /> 





			{/* <Route path="/test" element={<TestStore />} />  */}
			 

    		<Route element={<PrivateRoutes />}>
			
            <Route path="/dashboard" element={<DashBoard />  } />






    		</Route>
			<Route path="*" element={<NoPage />} />
		</Routes>
	</BrowserRouter>



  )
}



export default ProjectRoutes

