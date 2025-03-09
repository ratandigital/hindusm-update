'use client'

import React, { useState } from 'react'
import SideNavbar from './SideNavebar'

export default function HeaderSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSideNavbarOpen, setIsSideNavbarOpen] = useState(false); 

  // Toggle the mobile menu visibility
  const toggleMobileMenu = () => {
    setIsSideNavbarOpen(true)
  }

  return (
<>
  {/* partial:partia/__header.html */}
  <header className="sigma_header header-2 can-sticky">
    {/* Middle Header Start */}
    <div className="sigma_header-middle">
      <nav className="navbar">
        {/* Controls */}
        <div className="sigma_header-controls style-2">
          <ul className="sigma_header-controls-inner">
            {/* Desktop Toggler */}
            <li className="aside-toggler style-2 aside-trigger-right desktop-toggler"
            onClick={toggleMobileMenu}
            >
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </li>
            {/* Mobile Toggler */}
            <li className="aside-toggler style-2 aside-trigger-left">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </li>
          </ul>
        </div>
        {/* Menu */}
        <ul className="navbar-nav">
          <li className="menu-item ">
            <a href="/">Home</a>
          
          </li>
          <li className="menu-item menu-item-has-children">
            <a href="#">Pages</a>
            <ul className="sub-menu">
              <li className="menu-item">
                {" "}
                <a href="/about-us">About Us</a>{" "}
              </li>
              <li className="menu-item menu-item-has-children">
                <a href="#">Blog</a>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <a href="/blog-grid">Blog Archive</a>
                  </li>
                  <li className="menu-item">
                    {" "}
                    <a href="blog-details">Blog Details</a>{" "}
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-has-children">
                <a href="#">Shop</a>
                <ul className="sub-menu">
                  <li className="menu-item">
                    {" "}
                    <a href="/shop">Shop</a>{" "}
                  </li>
                  <li className="menu-item">
                    {" "}
                    <a href="/product-details">Product Details</a>{" "}
                  </li>
                  <li className="menu-item">
                    {" "}
                    <a href="/cart">Cart</a>{" "}
                  </li>
                  <li className="menu-item">
                    {" "}
                    <a href="/checkout">Checkout</a>{" "}
                  </li>
                  <li className="menu-item">
                    {" "}
                    <a href="/wishlist">Wishlist</a>{" "}
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-has-children">
                <a href="#">Service</a>
                <ul className="sub-menu">
                  <li className="menu-item">
                    {" "}
                    <a href="/services">Service</a>{" "}
                  </li>
                
                </ul>
              </li>
              <li className="menu-item">
                {" "}
                <a href="/broadcast">Broadcast</a>{" "}
              </li>
              <li className="menu-item">
                {" "}
                <a href="/contact">Contact Us</a>{" "}
              </li>
              <li className="menu-item menu-item-has-children">
                <a href="#">Volunteers</a>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <a href="/volunteers">Volunteers</a>
                  </li>
                  <li className="menu-item">
                    {" "}
                    <a href="/volunteers-details">Volunteer Details</a>{" "}
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                {" "}
                <a href="/faq">FAQ</a>{" "}
              </li>
            </ul>
          </li>
          <li className="menu-item menu-item-has-children">
            <a href="#">Event</a>
            <ul className="sub-menu">
              <li className="menu-item">
                {" "}
                <a href="/event">Event</a>{" "}
              </li>
              <li className="menu-item">
                {" "}
                <a href="/event-details">Event Detail</a>{" "}
              </li>
            </ul>
          </li>
          <li className="menu-item menu-item-has-children">
            <a href="#">Holis</a>
            <ul className="sub-menu">
              <li className="menu-item">
                {" "}
                <a href="/holi">Holi</a>{" "}
              </li>
              <li className="menu-item">
                {" "}
                <a href="/holi-details">Holi Details</a>{" "}
              </li>
            </ul>
          </li>
          <li className="menu-item menu-item-has-children">
            <a href="#">Puja</a>
            <ul className="sub-menu">
              <li className="menu-item">
                {" "}
                <a href="/puja">Puja</a>{" "}
              </li>
              <li className="menu-item">
                {" "}
                <a href="/puja-details">Puja Details</a>{" "}
              </li>
            </ul>
          </li>
          <li className="menu-item menu-item-has-children">
            <a href="#">Donation</a>
            <ul className="sub-menu">
              <li className="menu-item">
                {" "}
                <a href="/donation">Donation</a>{" "}
              </li>
              <li className="menu-item">
                {" "}
                <a href="/donation-archive">Donation Archive</a>{" "}
              </li>
            </ul>
          </li>
        </ul>
        {/* Logo Start */}
        <div className="sigma_logo-wrapper">
          <a className="navbar-brand" href="index-2.html">
            <img src="assets/img/logo.png" alt="logo" />
          </a>
        </div>
        {/* Logo End */}
        {/* Button & Phone */}
        <div className="sigma_header-controls sigma_header-button">
          <a href="tel:+123456789" className="sigma_header-contact">
            <i className="fal fa-phone" />
            <div className="sigma_header-contact-inner">
              <span>Get Support</span>
              <h6>xxxx-xxx-xxx-xx</h6>
            </div>
          </a>
          <a className="sigma_btn-custom" href="/donation">
            {" "}
            Donate Now{" "}
          </a>
        </div>
        {/* Controls */}
        <div className="sigma_header-controls style-1">
          <a href="#" className="sigma_search-trigger">
            {" "}
            <i className="flaticon-magnifying-glass" />{" "}
          </a>
        </div>
      </nav>
    </div>
    {/* Middle Header End */}
  </header>
  {/* partial */}
  
</>

  )
} 