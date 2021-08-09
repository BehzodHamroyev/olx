import ProductsWraper from './ProductsWraper.jsx';
import React, { useContext } from 'react';
import { FaHeart } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import ThemeContext from '../../Container/Context/theme-context.jsx';


const Products = (props) => {
  const { theme,setTheme,colors }= useContext(ThemeContext);
  return (
    <ProductsWraper Colors={colors}>
      {props.data.map((v, i) => (
        <div className="col-md-10 col-12 my-1 shadow">
          <Link to={`${v.to}/${v.id}`} className="Products row d-flex justify-content-between align-items-center">
            <div className="col-md-3 col-12">
              <img src={v.img} className="w-100" alt="" />
            </div>
            <div className="col-md-9  col-12">
              <div className="px-3">
                <div className="d-flex justify-content-between mb-5">
                  <p className="title">{v.title}</p>
                  <p className="price">{v.price}</p>
                </div>
                <div className=" d-flex justify-content-between mt-5">
                  <p className="location ">{v.location}</p>
                  <p className="">
                    <FaHeart  className="heart"/>
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </ProductsWraper>
  );
};

export default Products;
