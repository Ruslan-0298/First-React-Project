import StarPhoto from "./Star 2.svg";

export const CenterContainer = () => {
  return (
    <div className="center-container">
      <div className="container-flex-column">
        <div className="center-container-title">
          <img src={StarPhoto} alt="" className="" />
          <div className="center-container-title-text">
            Новая коллекция французских авторов
          </div>
        </div>
        <div className="center-container-text">
          Сложно сказать, почему акционеры крупнейших компаний призывают нас к
          новым свершениям, которые, в свою очередь, должны быть заблокированы в
          рамках своих собственных рациональных ограничений. Принимая во
          внимание показатели успешности, граница обучения кадров предопределяет
          высокую востребованность направлений прогрессивного развития.
        </div>
        <div className="center-container-button">
          <div className="center-container-button-text">Ознакомиться</div>
        </div>
      </div>
    </div>
  );
};
