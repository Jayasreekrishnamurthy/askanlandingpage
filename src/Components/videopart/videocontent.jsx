import React from "react";

const Videocontent = () => {
  return (
    <div className="videoheadingContianer">
      <div className="videoheading">
        <p class="font-italic">OUR WORKING PROCESS</p>
        <h1>
          Find out everything you need to know about <br />
          creating a business process model
        </h1>
      </div>
      <section id="how-it-works">
        <div class="container">
          {/* <div class="flex"> */}
          <div>
            <span>
              <img
                className="videoimg"
                src="https://png.pngtree.com/png-vector/20230428/ourmid/pngtree-creative-idea-line-icon-vector-png-image_6740073.png"
              />
            </span>
            <h4>1. Collect ideas</h4>
            <p style={{ color: "gray" }}>
              Etiam porta malessuada magna mollis euismod consectetur leo elit.
            </p>
          </div>

          <div>
            <span>
              <img
                className="videoimg"
                src="https://cdn-icons-png.flaticon.com/512/6897/6897881.png"
              />
            </span>

            <h4>2. Data Analysis</h4>
            <p style={{ color: "gray" }}>
              Etiam porta malessuada magna mollis euismod consectetur leo eli.
            </p>
          </div>

          <div>
            <span>
              <img
                className="videoimg"
                src="https://icons.veryicon.com/png/o/business/multicolor-icon/confirm-finalize.png"
              />
            </span>

            <h4>3. Finalize Product</h4>
            <p style={{ color: "gray" }}>
              Etiam porta malessuada magna mollis euismod consectetur leo eli.
            </p>
          </div>
          {/* </div> */}
        </div>
      </section>
    </div>
  );
};

export default Videocontent;
