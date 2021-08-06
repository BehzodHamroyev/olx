import './CategoryCard.css';
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = (props) => {
  return (
    <div className="CategoryCard mt-3 col-2">
      <Link to={props.data.to}>
        <div className="d-flex flex-column align-items-center">
          <div
            className="img"
            style={{ backgroundColor: `${props.data.color}` }}
          >
            <img src={props.data.img} alt="" className="w-100" />
          </div>
          <p className="title fw-bold text-center mt-2">{`${props.data.title}`}</p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
