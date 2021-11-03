import React from "react";
import "./style.scss";
import logo from "../../assets/logos/logo_yard_sale.svg";

export const Login = () => {
  return (
    <div className="login">
      <section className="login__top">
        <div className="login__logo">
          <img src={logo} alt="logo" />
        </div>
        <form>
          <label
            className="label-container login__label-container"
            htmlFor="email"
          >
            <span className="login__label-text">Email</span>
            <input
              className="input login__input"
              id="email"
              type="email"
              placeholder="email@example.com"
            />
          </label>
          <label
            className="label-container login__label-container"
            htmlFor="password"
          >
            <span className="login__label-text">Password</span>
            <input
              className="input login__input"
              id="password"
              type="password"
              placeholder="**********"
            />
          </label>
        </form>
        <button
          type="button"
          className="button button--green  login__button-login"
        >
          Login
        </button>
        <a href="#" className="link login__forgot-password">
          Forgot my password
        </a>
      </section>
      <section>
        <button type="button" className="button button--border-green">
          Sign up
        </button>
      </section>
    </div>
  );
};
