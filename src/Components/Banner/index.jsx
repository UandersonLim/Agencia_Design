import banner from "../../../public/assets/banner.png";
import "./style.css";

const Banner = (props) => {

  const Theme = props.eventType;
  
  return (
    <section className={(Theme === "Dark" ? "Banner_Theme" : null)} >
      <div className="box_banner">
        <figure>
          <img src={banner} alt="banner" />
        </figure>
        <div className="box_text">
          <div>
            <p>BRANDING / UI / UX / TECNOLOGIA</p>
            <h1>Agência de Branding</h1>
            <span>e design digital</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
