import React from "react";
import "./Client.css";
import serviceimgae from "./serviceImagetop.png";
import oneImage from "./one.png";
import twoImage from "./two.png";
import threeImage from "./three.png";
import fourImage from "./four.png";
import fiveImage from "./five.png";
import sixImage from "./six.png";
import sevenImage from "./seven.png";
import eightImage from "./eight.png";

const Clients = () => {
  return (
    <div className="clientContainer">
      <div className="ourClients">
        <div className="OurClientLeft">
          <p>OUR CLIENTS</p>
          <h2>Trusted by over 300+ Clients</h2>
          <p>
            We bring solutions to make life <br />
            easier for our customers
          </p>
        </div>
        <div className="ourClientRight">
          <div className="ourclientRightImage">
            <img src={oneImage} alt="" />
          </div>
          <div className="ourclientRightImage">
            <img src={twoImage} alt="" />
          </div>
          <div className="ourclientRightImage">
            <img src={threeImage} alt="" />
          </div>
          <div className="ourclientRightImage">
            <img src={fourImage} alt="" />
          </div>
          <div className="ourclientRightImage">
            <img src={fiveImage} alt="" />
          </div>
          <div className="ourclientRightImage">
            <img src={sixImage} alt="" />
          </div>
          <div className="ourclientRightImage">
            <img src={sevenImage} alt="" />
          </div>
          <div className="ourclientRightImage">
            <img src={eightImage} alt="" />
          </div>
        </div>
      </div>
      <div className="clientTopPart">
        <div className="clientLeft">
          <img src={serviceimgae} alt="" />
        </div>
        <div className="clientRight">
          <p>WHAT MAKES AS DIFFERENT?</p>
          <h3>We make spending stress free So you have the perfect control.</h3>
          <div className="rightPartInnerContent">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <img
                className="videoimg"
                src="https://png.pngtree.com/png-vector/20230428/ourmid/pngtree-creative-idea-line-icon-vector-png-image_6740073.png"
              />
              <div>
                <h4>Creativity</h4>
                <p>Curabitur blandit lacus porttitor ridiculus mus.</p>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <img
                className="videoimg"
                src="https://png.pngtree.com/png-vector/20230428/ourmid/pngtree-creative-idea-line-icon-vector-png-image_6740073.png"
              />
              <div>
                <h4>Innovative thinking</h4>
                <p>Curabitur blandit lacus porttitor ridiculus mus.</p>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <img
                className="videoimg"
                src="https://png.pngtree.com/png-vector/20230428/ourmid/pngtree-creative-idea-line-icon-vector-png-image_6740073.png"
              />
              <div>
                <h4>Rapid Solutions</h4>
                <p>Curabitur blandit lacus porttitor ridiculus mus.</p>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <img
                className="videoimg"
                src="https://png.pngtree.com/png-vector/20230428/ourmid/pngtree-creative-idea-line-icon-vector-png-image_6740073.png"
              />
              <div>
                <h4>Top-Notch Supports</h4>
                <p>Curabitur blandit lacus porttitor ridiculus mus.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="clients">
        <p class="mainheading">JOIN OUR COMMUNITY</p>
        <h1>
          We are trusted by over 5000+ clients.
          <br />
          Join them now and grow your business.
        </h1>
      </div>
      <div className="serviceCounts">
        <div className="itemsService">
          <h2>1000+</h2>
          <p>Completed projects</p>
        </div>
        <div className="itemsService">
          <h2>50K+</h2>
          <p>Happy Customers</p>
        </div>
        <div className="itemsService">
          <h2>4x</h2>
          <p>Rrevenew Growth</p>
        </div>
      </div>
      <div className="clientImageContainer">
        {/* <img src={clientImage} alt="" /> */}
      </div>
    </div>
  );
};

export default Clients;
