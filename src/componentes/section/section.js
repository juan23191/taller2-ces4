import { Link } from "react-router-dom";
import Button from "../botones/Button";
import "./Section.css";

const Section = ({
  topLine,
  headLine,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  lighBackgroud,
  lighHeadText,
  lighdescription,
}) => {
  return (
    <>
      <div
        className={
          lighBackgroud ? "home__hero-section" : "home__hero-section darkBg"
        }
      >
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lighHeadText ? "heading" : "heading dark"}>
                  {headLine}
                </h1>
                <p
                  className={
                    lighdescription
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark"
                  }
                >
                  {description}
                </p>
                <Link to="/">
                  <Button buttonSize="btn--wide" buttonColor="blue">
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
