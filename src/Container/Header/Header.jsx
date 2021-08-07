import React, { useContext } from 'react';
import HeaderWraper from './HeaderWraper.jsx';
import { FaHeart, FaSun, FaMoon, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ThemeContext from '../Context/theme-context';

const Header = () => {
  const { theme, setTheme,colors } = useContext(ThemeContext);

  const sunClick = () => {
    return setTheme(theme == 'dark' ? 'light' : 'dark');
  };
  console.log(colors);
  return (
    <HeaderWraper Color={colors} >
      <div className="container d-flex justify-content-between">
      <Link to="/">
      <img
          className="logo"
          src="https://s.dou.ua/img/static/companies/olx_logo_black__white.png"
          alt=""
        /></Link>
        <div className="d-lg-flex w-50 justify-content-around align-items-center d-none">
          <div className="lang me-5">
            <span className="uz">Uz</span>
            <span className=" mx-3">|</span>
            <span className="Ru">Ru</span>
          </div>
          <FaHeart className="text-white" />
          <Link className="User" to="/">
            <FaUser />
            <span className="ms-3">Mening Profilim</span>
          </Link>
          <button className="btn btn-outline-success">
            E'lon Berish
          </button>
          <button onClick={sunClick} className={`btn btn-${theme}`}>
            <FaSun className={`${theme=="dark"&&"d-block"||"d-none"}`} />
            <FaMoon className={`${theme=="dark"&&"d-none"||"d-block"}`}/>
          </button>
        </div>
      </div>
    </HeaderWraper>
  );
};

export default Header;
