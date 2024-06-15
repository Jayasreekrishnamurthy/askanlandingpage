import React from "react";
import "./Services.css";
import magazineImage from "./mag.png"; // Correctly import the image
import magazineImage1 from "./mag1.png"; // Correctly import the image
import magazineImage2 from "./mag2.png"; // Correctly import the image

const Services = () => {
  return (
    <div className="serviceContainer">
      <div className="Services">
        <p class="mainheading">WHAT WE DO?</p>
        <h1>
          The Service we offer is specifically <br />
          designed to meet your needs.
        </h1>
      </div>
      <div>
        <article class="article group second">
          <div class="picture ">
            <img class="image right" src={magazineImage1} alt="Image" />
          </div>
          <div class="content" style={{ color: "black" }}>
            <h2 class="headline">Web Design</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
              et voluptatem nihil tempora omnis consequuntur reprehenderit minus
              odio quia. Itaque dicta quisquam ea in totam.
            </p>
            <ul>
              <li>Itaque dicta quisquam ea in totam.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            </ul>
            <div className="btn1">
        <button class="rounded">Start a project</button>
      </div>
          </div>
        </article>
        <article class="article group">
          <div class="content" style={{ color: "black" }}>
            <h2 class="headline">Web Design</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
              et voluptatem nihil tempora omnis consequuntur reprehenderit minus
              odio quia. Itaque dicta quisquam ea in totam.
            </p>
            <ul>
              <li>Itaque dicta quisquam ea in totam.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            </ul>
            <div className="btn1">
        <button class="rounded">Start a project</button>
      </div>
          </div>
          <div class="picture">
            <img class="image right" src={magazineImage2} alt="Image" />
          </div>
        </article>
        <article class="article group second">
          <div class="picture ">
            <img class="image right" src={magazineImage} alt="Image" />
          </div>
          <div class="content" style={{ color: "black" }}>
            <h2 class="headline">Web Design</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
              et voluptatem nihil tempora omnis consequuntur reprehenderit minus
              odio quia. Itaque dicta quisquam ea in totam.
            </p>
            <ul>
              <li>Itaque dicta quisquam ea in totam.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            </ul>
            <div className="btn1">
        <button class="rounded">Start a project</button>
      </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Services;
