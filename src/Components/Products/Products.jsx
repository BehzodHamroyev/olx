import './Products.css';
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import {Link} from 'react-router-dom'

const Products = (props) => {
  console.log(props.data);
  return (
    <>
      {props.data.map((v, i) => (
        <div className="col-md-10 col-12 my-1 bg-white  border">
          <Link to={`${v.to}/${v.id}`} className="Products row d-flex justify-content-between align-items-center">
            <div className="col-md-3 col-12">
              <img src={v.img} className="w-100" alt="" />
            </div>
            <div className="col-md-9 col-12">
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

export default Products;
