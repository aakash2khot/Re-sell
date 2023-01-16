import React from 'react';
import {Login} from "./Login"
import {Register} from "./Register"
import {Routes, Route, useNavigate} from 'react-router-dom';
//import { render } from 'react-dom/cjs/react-dom.production.min';
// function Header(){
//   return(
//       <div className="header fixed flex">
//           <div className="logo">
//           <img src={require("../img/icon.png")}/>
//           </div>
//       </div>
//   );
// }
function Header(props){
  
  // const navigateToLogin = (event) => {
  //   console.log("heloo");
  // const navigate = useNavigate();
  //   navigate(Login);
  //   //render(Login);
  // };
  return(

    // <Login/>

    <header class="p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <div id="topName"><h2>Re-sell</h2></div>
      <div id="icon">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <img className="bi me-2" width="70" height="70" padding-left="1px" src={require("../img/icon.png")}/>
        </a>
        </div>
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 text-white">Home</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Sell</a></li>
          <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" class="nav-link px-2 text-white">About</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Testimonials</a></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2" onClick={(event) =>{console.log("hello"); props.showLogin(true);}}>Login</button>
          <button type="button" class="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
);
}
// import React from "react";
//
// function Header(){
//     return (
//         // <header>
//         //     <div class="head-div">
//         //     <h1>Re-sell Website</h1>
//         //     </div>
//         // </header>
//         <section>
//                <div class="head-div">
//                  <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
//                    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
//                    <svg class="bi me-2" width="40" height="32"></svg>
//                      <span class="fs-4" font size="7">Re-sell Website</span>
//                    </a>
//
//                    <ul class="nav nav-pills" padding="0 10px 0 0">
//                      <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
//                      <li class="nav-item"><a href="#" class="nav-link">Reviews</a></li>
//                      <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
//                      <li class="nav-item"><a href="#" class="nav-link">About</a></li>
//
//                    </ul>
//                  </header>
//
//
//                </div>
//         </section>
//     );
// }
//const navigate = useNavigate(); navigate('./Login')
export default Header;
