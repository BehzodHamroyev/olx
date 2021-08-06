import React from 'react';
import { useParams } from 'react-router-dom';
import './Category.css';
import Products from '../../Components/Products/Products';
import datas from '../../Data/Datas';
const Category = () => {
  const { category } = useParams();
  const data = datas[category];
  return (
    <div className="  row m-0 mt-5 container">
      <Products data={data} />
    </div>
  );
};

export default Category;
