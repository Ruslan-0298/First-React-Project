import Img1 from "./Hand.png";
import Img2 from "./girl with hat.png";
import Img3 from "./team-man.jpg";
import Img4 from "./smiling man.jpg";

export const Wrapper = () => {
  return (
    <div className="wrapper">
      <div className="data-image">
        <img src={Img1} alt="" />
      </div>
      <div className="data-teams">
        <div className="teams-title">Наша команда</div>
        <div className="teams-text">
          Значимость этих проблем настолько очевидна, что базовый вектор
          развития позволяет оценить значение экспериментов, поражающих по своей
          масштабности и грандиозности. Мы вынуждены отталкиваться от того, что
          консультация с широким активом.
        </div>
        <div className="teams-photo">
          <div className="img">
            <img src={Img2} alt="" />
          </div>
          <div className="img">
            <img src={Img3} alt="" />
          </div>
          <div className="img">
            <img src={Img4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
