import "./App.css";
import "./header/header.scss";
import { Header } from "./header/header";
import { TopContainer } from "./top-container/TopContainer";
import "./top-container/TopContainer.scss";
import { RenderProduct } from "./reproduction-product/RenderProduct";
import "./reproduction-product/RenderProduct.scss";
import { CenterContainer } from "./center-container/Center-containerş";
import "./center-container/Center-container.scss";
import { Wrapper } from "./wrapper/Wrapper.js";
import "./wrapper/Wrapper.scss";
import { Footer } from "./footer/Footer.js";
import "./footer/Footer.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <TopContainer />
      <RenderProduct />
      <CenterContainer />
      <Wrapper />
      <Footer />
    </div>
  );
}

export default App;
