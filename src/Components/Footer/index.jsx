import Logo from "../../../public/assets/logo.png";
import Facebook from "../../../public/assets/facebook.png";
import Twitter from "../../../public/assets/twitter.png";
import Linkedin from "../../../public/assets/linkedin.png";
import Dribble from "../../../public/assets/dribble.png";
import Behance from "../../../public/assets/behance.png";
import GooGle_Plus from "../../../public/assets/google-plus.png";
import './style.css';




const Footer = (props) => {
  return (
    <footer className={props.eventType === 'Dark' ? 'footer' : null}>
      <div className="Logo_M">
      <figure>
        <img src={Logo} alt="Logo" />
      </figure>
        <p>
          Ajudamos a criar uma personalidade digital construindo sua marca no
          ambiente online utilizando estratégias, ferramentas e tecnologias
          personalizadas.
        </p>
      </div>
      <figure className="social_networks">
        <img src={Facebook} alt="Icon Facebook"/>
        <img src={Twitter} alt="Icon twitter"/>
        <img src={Linkedin} alt="Icon Linkedin"/>
        <img src={Dribble} alt="Icon Dribble"/>
        <img src={Behance} alt="Icon Behance"/>
        <img src={GooGle_Plus} alt="Icon Google_Plus"/>
      </figure>
      <div className="box_name_professional">
        <p>Copyright 2022 Uanderson Lima DEV</p>
      </div>
    </footer>
  );
};

export default Footer;
