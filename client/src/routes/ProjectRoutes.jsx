import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes.jsx";
import React from 'react'
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

// import TestStore from "../components/testcomponent/TestStore.jsx"


const ProjectRoutes = () => {
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

