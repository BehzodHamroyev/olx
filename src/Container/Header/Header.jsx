import React, { useContext } from 'react';
import './Header.css';
import { FaHeart, FaSun, FaMoon, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ThemeContext from '../Context/theme-context';

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);
  const sunClick = () => {
    return setTheme(theme == 'dark' ? 'white' : 'dark');
  };
  return (
    <div className={`Navbar bg-${theme} d-flex justify-content-between `}>
      <div className="container d-flex justify-content-between">
        <img
          className="logo"
          src="https://s.dou.ua/img/static/companies/olx_logo_black__white.png"
          alt=""
        />
        <div className="d-lg-flex w-50 justify-content-around align-items-center d-none">
          <div className="lang me-5">
            <span className="uz text-white">Uz</span>
            <span className="text-white mx-3">|</span>
            <span className="Ru text-white">Ru</span>
          </div>
          <FaHeart className="text-white" />
          <Link className="User" to="/">
            <FaUser />
            <span className="ms-3">Mening Profilim</span>
          </Link>
          <button className="btn btn-outline-success text-white">
            E'lon Berish
          </button>
          <button onClick={sunClick} className={`btn btn-${theme}`}>
            <FaSun />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
