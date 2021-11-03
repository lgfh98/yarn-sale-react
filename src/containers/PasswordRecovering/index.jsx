import React from "react";
import "./style.scss";
import logo from "../../assets/logos/logo_yard_sale.svg";
import emailIcon from "../../assets/icons/email.svg";

export const PasswordRecovering = () => {
  return (
    <div className="password-recovering">
      <div className="password-recovering__logo">
        <img src={logo} alt="logo" />
      </div>
      <h2 className="password-recovering__title">Email has been sent!</h2>
      <p className="password-recovering__subtitle">
        Please check yout inbox for instructions on how to reset the password
      </p>
      <div className="password-recovering__icon">
        <img src={emailIcon} alt="email" />
      </div>
      <button
        type="button"
        className="button button--green password-recovering__button"
      >
        Login
      </button>
      <div className="password-recovering__resend">
        <span>Didn't receive the email?</span>
        <a href="#" className="link password-recovering__resend-link">
          Resend
        </a>
      </div>
    </div>
  );
};
