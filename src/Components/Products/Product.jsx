import './Products.css';
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import {Link} from 'react-router-dom'

const Product = (props) => {
  return (
    <>
      {props.data.map((v, i) => (
        <div className="col-10 my-3 bg-white  border">
          <Link to={`${v.to}/${v.id}`} className="Products row d-flex justify-content-between align-items-center">
            <div className="col-3">
              <img src={v.img} className="w-100" alt="" />
            </div>
            <div className="col-9 ">
              <div>
                <div className="d-flex justify-content-between mb-5">
                  <p className="title">{v.title}</p>
                  <p className="price">{v.price}</p>
                </div>
                <div className=" d-flex justify-content-between mt-5">
                  <p className="location ">{v.location}</p>
                  <p className="">
                    <FaHeart />
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Product;
