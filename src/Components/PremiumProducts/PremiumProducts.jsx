import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import PremiumProductsWraper from './PremiumProductsWraper';

const PremiumProducts = (props) => {
  return (
    <div className="col-md-3 mt-4 ">
     <PremiumProductsWraper> <Link to={`/${props.data.to}/${props.data.id}`} className="PremiumProducts  w-100">
        <div>
          <img src={props.data.img} className="w-100" alt="" />
        </div>
        <div className="content ">
          <p className="title mt-2 ">{props.data.title}</p>
          <div className=" bottomContent">
            <div className="w-75 h-100">
              <span className=" d-block ">{props.data.subTitle}</span>
              <p>{props.data.price}</p>
            </div>
            <div className="d-block h-100 w-25 fs-3">
              <FaHeart />
            </div>
          </div>
        </div>
      </Link>
      </PremiumProductsWraper>
    </div>
  );
};

export default PremiumProducts;
