import React from "react";
import ReactDOM from "react-dom";
import Perks from "./perks";
import Startups from "./Community";
import NavBar from "./Navbar";
import Modal from '../Profile/Modal';
import "./index.css";
import Log from "./Login";



const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-text">
        <h2> Find your perfect partner in two clicks </h2>
        <p>"Your partner is your key to success "</p>
        <button data-target="#Login"
        data-toggle="modal"
        className="call-to-action">
          <i class="fas fa-rocket" /> Get Started
        </button>
        <Modal title="Login Form" id="Login" content={Log} />
      </div>
    </div>
  );
};

const Ask = () => {
  return (
    <div className="ask-presentation">
      <img
        data-srcset="https://cdn.shopify.com/assets2/homepage/mission-control-small-d27a4b6ea69c55cd03f7d3b7eb84cd633f4ee3e4e2cdec02a201b4ff470a33de.png 1x, https://cdn.shopify.com/assets2/homepage/mission-control-large-f57da08db440a20282e2775e483e1973632cd12faed75823564745e821766d5d.png 2x"
        srcset="https://cdn.shopify.com/assets2/homepage/mission-control-small-d27a4b6ea69c55cd03f7d3b7eb84cd633f4ee3e4e2cdec02a201b4ff470a33de.png 1x, https://cdn.shopify.com/assets2/homepage/mission-control-large-f57da08db440a20282e2775e483e1973632cd12faed75823564745e821766d5d.png 2x"
      />

      <div className="ask-text">
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
          placeat nam corrupti sequi molestiae eveniet. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Hic eveniet officiis voluptas
          asperiores nostrum deserunt nesciunt
        </p>
        <button>Ask for a partnership</button>
      </div>
    </div>
  );
};
const Search = () => {
  return (
    <div className="ask-presentation">
      <div className="ask-text">
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
          placeat nam corrupti sequi molestiae eveniet. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Hic eveniet officiis voluptas
          asperiores nostrum deserunt nesciunt
        </p>
        <button>Search for a partnership</button>
      </div>
      <img
        src="https://cdn.shopify.com/assets2/homepage/your-brand-small-e0d03fb292195631c91683148ab13f23e2bb55930d168b503ea3b9bfdd2af714.png 1x, https://cdn.shopify.com/assets2/homepage/your-brand-large-e0d03fb292195631c91683148ab13f23e2bb55930d168b503ea3b9bfdd2af714.png 2x"
        width="500px;"
        srcset="https://cdn.shopify.com/assets2/homepage/your-brand-small-e0d03fb292195631c91683148ab13f23e2bb55930d168b503ea3b9bfdd2af714.png 1x, https://cdn.shopify.com/assets2/homepage/your-brand-large-e0d03fb292195631c91683148ab13f23e2bb55930d168b503ea3b9bfdd2af714.png 2x"
      />
    </div>
  );
};

export default function Index() {
  return (
    <div className="App">
    <NavBar/>
      <Intro />
      <Ask />
      <Search />
      <Perks />
      <Startups />
      <div />
    </div>
  );
}


