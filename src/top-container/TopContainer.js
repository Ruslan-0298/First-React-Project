import birdImg from "./Layer 0 1.png";

export const TopContainer = () => {
  return (
    <div className="top-container">
      <div className="container-image">
        <img src={birdImg} alt="" />
      </div>
      <div className="container-text">
        <div className="top-container-title">
          Реплики картин от <span>Ink. House</span>
        </div>
        <div className="top-container-text">
          Высокое качество отрисовки на плотной бумаге или льняном холсте.
          Редкие произведения, доступные цены.
        </div>
        <div className="top-container-button">
          <div
            className="button-text"
            onClick={() => {
              alert(`На данный момент мы не имеем товаров
We currently have no products`);
            }}
          >
            Продукция
          </div>
        </div>
      </div>
    </div>
  );
};
