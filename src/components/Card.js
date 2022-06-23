import React from "react";
import nft from "../images/image-equilibrium.jpg";
import ethereum from "../images/icon-ethereum.svg";
import clock from "../images/icon-clock.svg";
import avatar from "../images/image-avatar.png";

const Card = () => {
  return (
    <div className="nft-card">
      <div className="overlay"></div>
      <img className="hero" src={nft} alt="equilibrium" />
      <h1 className="heading">Equilibrium #3429</h1>
      <p className="summary">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className="tags">
        <div>
          <img src={ethereum} alt="ethereum" />
          <span className="tag-value">0.41ETH</span>
        </div>
        <div>
          <img src={clock} alt="clock" />
          <span className="tag-time">3 days left</span>
        </div>
      </div>
      <hr className="hr" />
      <div className="user-details">
        <img className="avatar" src={avatar} alt="avatar" />
        <p className="details">
          Creation of <span>Jules Wyvern</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
