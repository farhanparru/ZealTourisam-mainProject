import React from 'react'

const Header = () => {
  return (
    <div>
           
  <header class="header-area shadow bg-white">
    <div class="col-xl-10 m-auto">
        <div class="header-top separator">
            <div class="row">
                    <a href="index.html" class="logo">
                       <img src="./logo_.png" class="imgimg-fluid"/>
                    </a>
                <div class="col-md-4 col-lg-4 col-xl-4 d-none d-lg-block">
                    <div class="header-social-icon">
                        <ul class="nav" >
                            <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><img src="assets/img/Icons/FacebookLogo.png"/></a></li>
                            <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><img src="assets/img/Icons/InstagramLogo.png"/></a></li>
                            <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><img src="assets/img/Icons/TwitterLogo.png"/></a></li>
                            <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><img src="assets/img/Icons/WhatsappLogo.png"/></a></li>
                            <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><img src="assets/img/Icons/YoutubeLogo.png"/></a></li>
                            <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><img src="assets/img/Icons/LinkedinLogo.png"/></a></li>
                            <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><img src="assets/img/Icons/PinterestLogo.png"/></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-6 col-9 ml-auto text-right pr-0 d-flex justify-content-end align-items-center">
                   <ul class="right-contents nav justify-content-end">
                     <li class="nav-item dropdown flagdrop">
                        <a class="nav-link dropdown-toggle" href="javascript:void(0);" id="dropdown09" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="flag-icon"><img src="assets/img/flag/united-arab-emirates.png"/></span> AED  <i class="fa-solid fa-angle-down"></i></a>
                        <div class="dropdown-menu" aria-labelledby="dropdown09"> 
                            <a class="dropdown-item" href="#fr"><span class="flag-icon"><img src="assets/img/flag/USD.png"/></span>  USD</a>   
                            <a class="dropdown-item" href="#it"><span class="flag-icon"><img src="assets/img/flag/IND.png"/></span>  INR</a>
                        </div>
                      </li>
                     <li class="nav-item user-account d-none d-lg-block">
                        <a class="nav-link dropdown-toggle" href="javascript:void(0);" id="LogIn" > <span class="user-pic"><img src="assets/img/No_user.png"/></span>  Login </a>
                        
                          <a class="nav-link dropdown-toggle" href="javascript:void(0);" id="userpic" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="user-pic"><img src="assets/img/user-profiles.jpg"/></span> Ronald Richards <i class="fa-solid fa-angle-down"></i></a>
                        <div class="dropdown-menu" aria-labelledby="userpic">
                            <a class="dropdown-item" href="Profile.html">My account</a>
                            <a class="dropdown-item" href="Profile_bookings.html">My Bookings</a>
                            <a class="dropdown-item" href="Profile_reward_points.html">Reward Points</a>
                            <a class="dropdown-item" href="Profile_saved_items.html">Saved Items</a>
                        </div>
                        
                     </li>
                     <li class="nav-item">
                        <a href="Cart.html" class="nav-link"><i class="fal fa-cart-shopping fa-lg"></i></a>
                     </li> 
                     <li class="nav-item whatsup-btn">
                        <a href="javascript:void(0);" class="nav-link" id="waht-call" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="assets/img/Icons/WhtsaapCall.png"/></a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="waht-call">
                          <a class="dropdown-item" href="tel:+9719876543210">+971 9876 543 210</a>
                          <a class="dropdown-item" href="tel:+9719876543211">+971 9876 543 211</a>
                      </div>
                     </li>
                     <li class="nav-item d-flex d-lg-none">
                      <button class="navbar-toggler top-menu-button" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon">
                         <i class="fa-solid fa-bars"></i>
                          <img class="close-img d-none" src="assets/img/Icons/close.png"/>
                        </span>
                      </button>
                     </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="main-menu">
              <nav class="navbar navbar-expand-lg fixed-top-onlymob">
                        <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                          <ul class="navbar-nav ">
                            <li class="d-block d-lg-none  user-account dropdown">
                              <a class="nav-link dropdown-toggle" href="javascript:void(0);" id="userpic" data-toggle="modal" data-target=".LogIn"><span class="user-pic Nonuser"><i class="fa-duotone fa-user-large "></i></span> Login </a>
                             <a class="nav-link dropdown-toggle" href="javascript:void(0);" id="userpic" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="user-pic"><img src="assets/img/user-profiles.jpg"/></span> Ronald Richards <i class="fa-solid fa-angle-down"></i></a>
                              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="Profile.html">My account</a>
                                <a class="dropdown-item" href="Profile_bookings.html">My Bookings</a>
                                <a class="dropdown-item" href="Profile_reward_points.html">Reward Points</a>
                                <a class="dropdown-item" href="Profile_saved_items.html">Saved Items</a>
                              </div>
                            </li>
                            <li class="nav-item ">
                              <a href="index.html" class="nav-link active"> Home</a>
                          </li>
                          <li class="nav-item">
                            <a href="Tours_grid.html" class="nav-link">Delightful Tours</a>
                        </li>
                        <li class="nav-item">
                          <a href="Holyday_grid_view.html" class="nav-link">Exciting Holidays</a>
                      </li>
                      <li class="nav-item">
                        <a href="Hotels_grid_view.html" class="nav-link">Best Hotels</a>
                    </li>
                    <li class="nav-item">
                      <a href="Customize_holidays.html" class="nav-link">Customize Holidays</a>
                  </li>
                  <li class="nav-item">
                    <a href="Umrah_grid_view.html" class="nav-link">Umarah For All</a>
                </li>
                <li class="nav-item">
                  <a href="Transfers_grid_view.html" class="nav-link">Transfer</a>
              </li>
              <li class="nav-item">
                <a href="Special_Deals.html" class="nav-link">Special Deals</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="javascript:void(0);" role="button" aria-haspopup="true" aria-expanded="false">Visa <i class="fa-solid fa-angle-down"></i></a>
<div class="dropdown-menu">
<a class="dropdown-item" href="Visa.html">Global Visa Services</a>
<a class="dropdown-item" href="Visa_Change-.html">Visa Change – UAE</a>
<a class="dropdown-item" href="Visa_review.html">Check Visa Status</a>
</div>
          </li>
          <li class="nav-item">
            <a href="Traval_Insurance.html" class="nav-link">Insurance</a>
        </li>
        <li class="nav-item">
          <a href="Forex.html" class="nav-link">Forex</a>
      </li>
                          
                            <li class="nav-item dropdown d-none d-lg-flex">
                              <a class="nav-link dropdown-toggle " href="javascript:void(0);" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-bars"></i>
                              </a>
                              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="About_us.html">About Us</a>
                                <a class="dropdown-item" href="contact_us.html">Contact Us</a>
                                <a class="dropdown-item" href="Branches.html">Branches</a>
                                <a class="dropdown-item" href="blog.html">Blog</a>
                                <a class="dropdown-item" href="Careers.html">Careers</a>
                              </div>
                            </li>
                             
                          <li class="nav-item d-lg-none d-flex">
                            <a href="About_us.html" class="nav-link">About Us</a>
                        </li>
                        <li class="nav-item d-lg-none d-flex">
                          <a href="contact_us.html" class="nav-link">Contact Us</a>
                      </li>
                      <li class="nav-item d-lg-none d-flex">
                        <a href="Branches.html" class="nav-link">Branches</a>
                    </li>
                    <li class="nav-item d-lg-none d-flex">
                      <a href="blog.html" class="nav-link">Blog</a>
                  </li>
                  <li class="nav-item d-lg-none d-flex">
                    <a href="Careers.html" class="nav-link">Careers</a>
                </li>
              

                          </ul>
                        </div>
              </nav>
        </div>
    </div>
  </header>
    </div>
  )
}

export default Header
