import React from 'react'
import "./client.css"

const Client = () => {
  return (
   
    <div class="footer-row">
      <div class="footer-col">
        <h4>Sandbox</h4>
        <ul class="links">
          <li><a href="#">2023 Sandbox.</a></li>
          <li><a href="#">All rights reserved.</a></li>
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
          <li><a href="#">Moonshine St.14/05</a></li>
          <li><a href="#">Light City, London,</a></li>
          <li><a href="#">United Kingdom</a></li>
          <li><a href="#">Popular Designs</a></li>
          <li><a href="#">info@email.com</a></li>
          <li><a href="#">00(123) 456 78 90</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Learn More</h4>
        <ul class="links">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Our Story</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Privacy Policy</a></li>
         
        </ul>
      </div>
      <div class="footer-col">
        <h4>Our Newsletter</h4>
        <p>
          Subscribe to our newsletter to get our
          news & deals delivered to you.
        </p>
        <form action="#">
          <input type="text" placeholder="Email Address" required/>
          <button type="submit">Join</button>
        </form>
        
      </div>
    </div>
  
     
  )
}

export default Client
