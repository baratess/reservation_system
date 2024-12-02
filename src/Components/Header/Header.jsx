import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-content">
      <a className="brand" href="/Home">
        <img
          src="https://yildiz.edu.tr/themes/custom/ytu/logo.svg"
          alt="University Logo"
        />
      </a>
      <button className="logout-button">
        <a className="icon" href="/">
          <FontAwesomeIcon icon={faRightFromBracket} />
        </a>
      </button>
      <div className="name">
        <h3>Barış Muharrem Ateş</h3>
      </div>
      <button className="profile">
        <a href="/profil" className="icon_proifle">
          <FontAwesomeIcon icon={faUser} />
        </a>
      </button>
      <button className="communication">
        <Link className="h3" to={"/iletişim"}>
          İLETİŞİM
        </Link>
      </button>
      <button className="regulation">
        <Link className="h3" to={"/yönetmelik"}>
          YÖNETMELİK
        </Link>
      </button>
      <button className="about">
        <Link className="h3" to={"/randevu_al"}>
          RANDEVU AL
        </Link>
      </button>
    </div>
  );
};

export default Header;
