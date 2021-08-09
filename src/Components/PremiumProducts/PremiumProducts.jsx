import React, { useContext } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import ThemeContext from '../../Container/Context/theme-context';
import PremiumProductsWraper from './PremiumProductsWraper';

const PremiumProducts = (props) => {
const   { theme,setTheme,colors }= useContext(ThemeContext);
  // console.log(colors);
  return (
    <div className="col-md-3 mt-4 ">
     <PremiumProductsWraper className="shadows" Colors={colors}> <Link to={`/${props.data.to}/${props.data.id}`} className="shadows  w-100">
        <div >
          <img src={props.data.img} className="w-100 " alt="" />
        </div>
        <div className="content ">
          <p className="title mt-2 ">{props.data.title}</p>
          <div className=" bottomContent">
            <div className="w-75 h-100">
              <span className=" d-block ">{props.data.subTitle}</span>
              <p>{props.data.price}</p>
            </div>
            <div className="d-block h-100 w-25 fs-3">
              <FaHeart className="heart" />
            </div>
          </div>
        </div>
      </Link>
      </PremiumProductsWraper>
    </div>
  );
};

export default PremiumProducts;
