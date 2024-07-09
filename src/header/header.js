import img2 from "./Frame 217.svg"
import img from "./Frame 85.svg"

export const Header = () => {
  return (
    <div className="Header">
      <div className="navbar-1">
        <div className="logo">
          <img src={img} alt="" />
        </div>
        <div className="menu">
          <ul>
            <li className="menu-item-flex">Репродукции</li>
            <li className="menu-item-flex">Новинки</li>
            <li className="menu-item-flex">О нас</li>
            <li className="menu-item-flex">
              <img src={img2} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
