// import React from 'react'
// import "./footer.css"

// const Footer = () => {
//   return (
// <footer class="section bg-footer">
//         <div class="container">
//             <div class="row">
//                 <div class="col-lg-3">
//                     <div class="">
//                         <h6 class="footer-heading text-uppercase text-white">Information</h6>
//                         <ul class="list-unstyled footer-link mt-4">
//                             <li><a href="">Pages</a></li>
//                             <li><a href="">Our Team</a></li>
//                             <li><a href="">Feuchers</a></li>
//                             <li><a href="">Pricing</a></li>
//                         </ul>
//                     </div>
//                 </div>

//                 <div class="col-lg-3">
//                     <div class="">
//                         <h6 class="footer-heading text-uppercase text-white">Ressources</h6>
//                         <ul class="list-unstyled footer-link mt-4">
//                             <li><a href="">Monitoring Grader </a></li>
//                             <li><a href="">Video Tutorial</a></li>
//                             <li><a href="">Term &amp; Service</a></li>
//                             <li><a href="">Zeeko API</a></li>
//                         </ul>
//                     </div>
//                 </div>

//                 <div class="col-lg-2">
//                     <div class="">
//                         <h6 class="footer-heading text-uppercase text-white">Help</h6>
//                         <ul class="list-unstyled footer-link mt-4">
//                             <li><a href="">Sign Up </a></li>
//                             <li><a href="">Login</a></li>
//                             <li><a href="">Terms of Services</a></li>
//                             <li><a href="">Privacy Policy</a></li>
//                         </ul>
//                     </div>
//                 </div>

//                 <div class="col-lg-4">
//                     <div class="">
//                         <h6 class="footer-heading text-uppercase text-white">Contact Us</h6>
//                         <p class="contact-info mt-4">Contact us if need help withanything</p>
//                         <p class="contact-info">+01 123-456-7890</p>
//                         <div class="mt-5">
//                             <ul class="list-inline">
//                                 <li class="list-inline-item"><a href="#"><i class="fab facebook footer-social-icon fa-facebook-f"></i></a></li>
//                                 <li class="list-inline-item"><a href="#"><i class="fab twitter footer-social-icon fa-twitter"></i></a></li>
//                                 <li class="list-inline-item"><a href="#"><i class="fab google footer-social-icon fa-google"></i></a></li>
//                                 <li class="list-inline-item"><a href="#"><i class="fab apple footer-social-icon fa-apple"></i></a></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>

//         <div class="text-center mt-5">
//             <p class="footer-alt mb-0 f-14">2019 © Anup, All Rights Reserved</p>
//         </div>
//     </footer>
//   )
// }

// export default Footer

import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <section class="footer">
      <div class="footer-row">
        <div class="footer-col">
          <h4>Sandbox</h4>
          <ul class="links">
            <li>
              <a href="#">2023 Sandbox.</a>
            </li>
            <li>
              <a href="#">All rights reserved.</a>
            </li>
            <div class="icons">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-github"></i>
            </div>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Get in Touch</h4>
          <ul class="links">
            <li>
              <a href="#">Moonshine St.14/05</a>
            </li>
            <li>
              <a href="#">Light City, London,</a>
            </li>
            <li>
              <a href="#">United Kingdom</a>
            </li>
            <li>
              <a href="#">Popular Designs</a>
            </li>
            <li>
              <a href="#">info@email.com</a>
            </li>
            <li>
              <a href="#">00(123) 456 78 90</a>
            </li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Learn More</h4>
          <ul class="links">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Our Newsletter</h4>
          <p>
            Subscribe to our newsletter to get our news & deals delivered to
            you.
          </p>
          <form action="#">
            <input type="text" placeholder="Email Address" required />
            <button type="submit">Join</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Footer;
