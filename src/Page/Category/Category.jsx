import React from 'react';
import { useParams } from 'react-router-dom';
import './Category.css';
import Product from '../../Components/Products/Product';
import datas from '../../Data/Datas';
const Category = () => {
  const { category } = useParams();
  const data = datas[category];
  return (
    <div className="  row m-0 mt-5 container">
      <Product data={data} />
    </div>
  );
};

export default Category;
