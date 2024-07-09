import React, { useState } from "react";
import image from "./1.jpg";
import image2 from "./2.jpg";
import image3 from "./5.jpg";
import image4 from "./6.jpg";
import image5 from "./Procedure.jpg";
import image6 from "./Rose.jpg";

export const RenderProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const products = [
    {
      category: "France",
      img: image,
      authorName: "Марсель Руссо",
      paintName: "Охота Амура",
      description: "Холст, масло (50х80)",
      price: "14 500 руб ",
      buttonText: "В корзину",
    },
    {
      category: "France",
      img: image2,
      authorName: "Анри Селино",
      paintName: "Дама с собачкой",
      description: " Акрил, бумага (50х80)",
      price: "16 500 руб",
      buttonText: "В корзину",
    },
    {
      category: "Germany",
      img: image5,
      authorName: "Франсуа Дюпон",
      paintName: "Процедура",
      description: "Цветная литография (40х60)",
      price: "20 000 руб",
      buttonText: "В корзину",
    },
    {
      category: "Germany",
      img: image6,
      authorName: "Луи Детуш",
      paintName: "Роза",
      description: "Бумага, акрил (50х80)",
      price: "12 000 руб",
      buttonText: "В корзину",
    },
    {
      category: "England",
      img: image3,
      authorName: "Франсуа Дюпон",
      paintName: "Птичья трапеза",
      description: "Цветная литография (40х60)",
      price: "22 500 руб",
      buttonText: "В корзину",
    },
    {
      category: "England",
      img: image4,
      authorName: "Пьер Моранж",
      paintName: "Пейзаж с рыбой",
      description: "Цветная литография (40х60)",
      price: "20 000 руб",
      buttonText: "В корзину",
    },
  ];
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  let filteredProducts;
  if (selectedCategory === "Все") {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter(
      (product) => product.category === selectedCategory
    );
  }

  return (
    <div className="main-container">
      <div class="navbar-2">
        <div class="navbar-2-title">Репродукции</div>
        <div class="navbar-2-menu">
          <ul class="ul-tab">
            <li
              class="France"
              onClick={() => {
                handleCategoryChange("Все");
              }}
            >
              <div class="country">Все</div>
            </li>
            <li
              class="France"
              onClick={() => {
                handleCategoryChange("France");
              }}
            >
              <div class="country">Франция</div>
            </li>
            <li
              class="country-li Germany"
              onClick={() => {
                handleCategoryChange("Germany");
              }}
            >
              <div class="country country-2">Германия</div>
            </li>
            <li
              class="country-li England"
              onClick={() => {
                handleCategoryChange("England");
              }}
            >
              <div class="country country-3">Англия</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="products-container">
        {filteredProducts.map((product, index) => (
          <div key={index} className="product">
            <img
              src={product.img}
              alt={product.paintName}
              className="items-data-image"
            />
            <div className="flex-1-title">{product.authorName}</div>
            <div className="flex-1-about">{product.paintName}</div>
            <div className="flex-1-text">{product.description}</div>
            <div className="flex-1-price">{product.price}</div>
            <button className="flex-1-button ">{product.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};
