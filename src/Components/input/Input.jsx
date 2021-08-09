 import {FaMapMarkerAlt,FaSearch,FaTimes} from 'react-icons/fa'
import React, { useContext } from "react";
import InputWraper from "./InputWraper";
import ThemeContext from "../../Container/Context/theme-context";
import { useState } from "react";

const Input = (props) => {
const { theme,setTheme,colors }= useContext(ThemeContext)
  const [value, setValue] = useState("");
  console.log(theme,colors);
  const typing = (event) => {
    setValue(event.target.value);
  };
  const deleteValue = () => {
    setValue("");
  };

  return (
    <InputWraper className="search " Colors={colors}>
      <div className="container  pt-5">
        <form className="form-bg p-4 w-100" action="">
          <div className="row">
            <div className="col-lg-7 mb-4 mb-lg-0">
              <div className="position-relative ">
                  <FaSearch/>
                <input
                  onChange={typing}
                  value={value}
                  className="input rounded  ms-3 w-75"
                  type="text"
                  placeholder="753 335 products  "
                />
                <span
                  onClick={deleteValue}
                  className={`times ${value == "" ? "" : "d-block"}`}
                >
                  <FaTimes/>
                </span>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="row">
                <div className="col-6 col-lg-7">
                  <div className="d-flex align-items-center location">
                    <FaMapMarkerAlt/>
                    <p className="mb-0 ms-3">All Uzbekistan</p>
                  </div>
                </div>
                <div className="col-6 col-lg-5">
                  <div className="d-flex align-items-center ms-5 location btn btn-outline-secondary">
                    <p className="mb-0 ms-1 me-3 ">Search</p>
                    <FaSearch/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </InputWraper>
  );
};

export default Input;