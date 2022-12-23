import React from "react";

function Header(){
    return (
        // <header>
        //     <div class="head-div">
        //     <h1>Re-sell Website</h1>
        //     </div>
        // </header>
        <section>
        <div class="head-div">
          <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <svg class="bi me-2" width="40" height="32"></svg>
              <span class="fs-4" font size="7">Re-sell Website</span>
            </a>

            <ul class="nav nav-pills" padding="0 10px 0 0">
              <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Reviews</a></li>
              <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
              <li class="nav-item"><a href="#" class="nav-link">About</a></li>

            </ul>
          </header>


        </div>
        </section>
    );
}
export default Header;
