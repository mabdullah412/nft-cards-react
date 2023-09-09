import eth from "./assets/images/icon-ethereum.svg";
import clock from "./assets/images/icon-clock.svg";
import avatar from "./assets/images/icon-avatar.png";
import "./NFTCard.css";

function NFTCard({ image, title, description, amount, timeLeft, author }) {
  return (
    <div className="card">
      <div className="card__image">
        <img className="card__image__img" src={image} alt="" />
      </div>

      <h2 className="card__title">{title}</h2>

      <p className="card__description">{description}</p>

      <div className="card__price_time_holder">
        <div className="card__price">
          <img src={eth} alt="" />
          <span>{amount} ETH</span>
        </div>
        <div className="card__timeleft">
          <img src={clock} alt="" />
          <span>{timeLeft} days left</span>
        </div>
      </div>

      <div className="card__splitter"></div>

      <div className="card__avatar">
        <div className="card__avatar_img">
          <img src={avatar} alt="" />
        </div>

        <p>
          Creation of <span className="card__avatar_name">{author}</span>
        </p>
      </div>
    </div>
  );
}

export default NFTCard;
