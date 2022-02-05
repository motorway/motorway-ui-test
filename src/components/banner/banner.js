import "./banner.css";

const Banner = ({ image, title, subtitle }) => {
  return (
    <div className="banner__image-wrapper">
      <img className="banner__image" src={`${image.url}.jpg`} alt="" />
      <div className="banner__text">
        <h1 className="banner__title">{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </div>
  );
};

export default Banner;
