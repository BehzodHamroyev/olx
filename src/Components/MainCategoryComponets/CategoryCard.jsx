// import CardCategoryWraper from './cardCategoryWraper';
import React from 'react';
import { Link } from 'react-router-dom';
import CategoryCardWraper from './CategoryCardWraper'

const CategoryCard = (props) => {
  return (
      <CategoryCardWraper className="CategoryCard mt-3 col-md-2 col-3">
        <Link to={props.data.to}>
          <div className="d-flex flex-column align-items-center">
            <div
              className="img rounded-circle"
              style={{ backgroundColor: `${props.data.color}` }}
            >
              <img src={props.data.img} alt="" className="w-100" />
            </div>
            <p className="title fw-bold text-center mt-2">{`${props.data.title}`}</p>
          </div>
        </Link>
      </CategoryCardWraper>
  );
};

export default CategoryCard;
