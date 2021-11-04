import React from "react";
import "./style.scss";
import menuIcon from "../../assets/icons/icon_menu.svg";
import arrowIcon from "../../assets/icons/flechita.svg";
import shoppingCartIcon from "../../assets/icons/icon_shopping_cart.svg";
import logoYarnSale from "../../assets/logos/logo_yard_sale.svg";

export const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar__mobile-menu">
        <img src={menuIcon} alt="icon-menu" />
      </div>
      <div className="navbar__left">
        <img className="navbar__logo" src={logoYarnSale} alt="logo" />
        <ul className="navbar__categories">
          <li className="nabvar__category-item">
            <a className="nabvar__category-link" href="#">
              All
            </a>
          </li>
          <li className="nabvar__category-item">
            <a className="nabvar__category-link" href="#">
              Clohes
            </a>
          </li>
          <li className="nabvar__category-item">
            <a className="nabvar__category-link" href="#">
              Electronics
            </a>
          </li>
          <li className="nabvar__category-item">
            <a className="nabvar__category-link" href="#">
              Furniture
            </a>
          </li>
          <li className="nabvar__category-item">
            <a className="nabvar__category-link" href="#">
              Toys
            </a>
          </li>
          <li className="nabvar__category-item">
            <a className="nabvar__category-link" href="#">
              Others
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar__right">
        <div className="navbar__account">
          <span>email@example.com</span>
          <img src={arrowIcon} alt="arrow" />
        </div>
        <div className="navbar__shopping-cart">
          <img
            className="navbar__cart-icon"
            src={shoppingCartIcon}
            alt="shopping cart"
          />
          <div className="navbar__cart-item-count">2</div>
        </div>
      </div>
    </nav>
  );
};
