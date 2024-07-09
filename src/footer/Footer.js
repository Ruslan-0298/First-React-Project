import logoFot from "./Frame 85.svg";
import logoFot2 from "./Frame (2).svg";
import logoFot3 from "./Frame (1).svg";
import logoFot4 from "./Frame.svg";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-flex">
        <div className="footer-logo">
          <div className="logo-fot">
            <img src={logoFot} alt="" />
          </div>
          <div className="footer-tel">
            <div className="tel">+7 (999) 543-54-54</div>
            <div className="tel-text">Мастерская</div>
          </div>
        </div>
        <div className="footer-contacts">
          <div className="contacts-foot">
            <div className="titles-contacts">Репродукции</div>
            <div className="Text-class">Франция</div>
            <div className="Text-class">Германия</div>
            <div className="Text-class">Англия</div>
          </div>
          <div className="news">
            <div className="titles-contacts">Новинки</div>
            <div className="Text-class">2021</div>
            <div className="Text-class">2020</div>
          </div>
          <div className="about-footer">
            <div className="titles-contacts">О нас</div>
            <div className="Text-class">Художники</div>
            <div className="Text-class">Менеджеры</div>
          </div>
        </div>
        <div className=" footer-rights">
          <div className="rights-logos">
            <div className="logos-fot">
              <img src={logoFot2} alt="" />
            </div>
            <div className="logos-fot">
              <img src={logoFot3} alt="" />
            </div>
            <div className="logos-fot">
              <img src={logoFot4} alt="" />
            </div>
          </div>
          <div className="logos-texts">
            <div className="log-text">Ink. House ®</div>
            <div className="rights-fot log-text">All rights reserved</div>
          </div>
        </div>
      </div>
    </div>
  );
};
