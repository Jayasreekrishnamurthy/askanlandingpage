import React from "react";
import Gallary from "./gallary";
import magazineImage from "./mag.png";

const Gallarymain = () => {
  return (
    <div className="gallarypart">
      <Gallary />
      <section id="properties">
        <div class="main">
          <ul class="cards">
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  {/* <img src="https://picsum.photos/500/300/?image=10" /> */}
                  <img src={magazineImage} alt="Magazine Image" />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Cras Fermentum Sem</h2>
                  <p class="card_text">Stationary</p>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  {/* <img src="https://picsum.photos/500/300/?image=5" /> */}
                  <img src={magazineImage} alt="Magazine Image" />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Mollis Ipsum Mattis</h2>
                  <p class="card_text">Magazine Books</p>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  {/* <img src="https://picsum.photos/500/300/?image=11" /> */}
                  <img src={magazineImage} alt="Magazine Image" />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Ipsum Ultricies cursus</h2>
                  <p class="card_text">Packaging</p>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  {/* <img src="https://picsum.photos/500/300/?image=14" /> */}
                  <img src={magazineImage} alt="Magazine Image" />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Inceptus Euismod Egestas</h2>
                  <p class="card_text">Stationary Branding</p>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  {/* <img src="https://picsum.photos/500/300/?image=17" /> */}
                  <img src={magazineImage} alt="Magazine Image" />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Ipsum Mollis Vulputate</h2>
                  <p class="card_text">Packaging</p>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  {/* <img src="src/assets/img/magazine.jpg" alt="Magazine Image" /> */}
                  <img src={magazineImage} alt="Magazine Image" />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Porto Ornare Cras</h2>
                  <p class="card_text">Branding</p>
                </div>
              </div>
            </li>
          </ul>
      <div className="btn">
        <button class="rounded">Start a project</button>
      </div>
        </div>
      </section>
    </div>
  );
};

export default Gallarymain;
