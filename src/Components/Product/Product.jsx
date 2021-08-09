import ProductWraper from './ProductWraper.jsx';
// import React from 'react';
import { useParams } from 'react-router-dom';
import Datas from '../../Data/Datas';
import React, { useContext, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaUser, FaLocationArrow } from 'react-icons/fa';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import ThemeContext from '../../Container/Context/theme-context.jsx';
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Product = (props) => {
  const {colors} = useContext(ThemeContext)
  let details;
  const { category, id } = useParams();
  console.log(category, id);
  const data = Datas[category];
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return data.map((v, i) => {
    if (i == id - 1) {
      console.log(i, v, v.details);
      return (
        <ProductWraper Colors={colors}>
          <div className="row m-0">
            <div className="col-md-8">
              <div>
                <Swiper
                  pagination={pagination}
                  navigation={true}
                  className="mySwiper"
                >
                  {v.details?.imgs.map((v, i) => {
                    return (
                      <SwiperSlide>
                        <img src={v.img} alt="" />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="d-flex shadows  w-100 justify-content-between align-items-center flex-column">
                <div className="py-3 d-flex justify-content-center align-items-center">
                  <img
                    className="w-50"
                    src="https://img-resizer.prd.01.eu-west-1.eu.olx.org/img-eu-olxuz-production/46136482_1_261x203.jpg"
                    alt=""
                  />
                </div>
                <div className="user  mt-3  py-4">
                  <h5 className="ps-3">Foydalanuvchi</h5>
                  <div className="row  d-flex align-items-start justify-content-center m-0 ">
                    <div className="col-3    d-flex justify-content-center img align-items-center rounded-circle">
                      <img
                        src="https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png"
                        className="w-100 "
                        alt=""
                      />
                    </div>
                    <div className="col-9">
    
                      <div className="d-flex  flex-column">
                        <p className="fw-bold">Online Shopping</p>
                        <p>OLx da 2019 dan beri</p>
                        <p>oxirgi marta kecha</p>
                      </div>
                    </div>
                    <div className="d-flex mt-2 justify-content-center align-items-center">
                      <button className="btn btn-outline-primary me-3">
                        Qo'ng'iroq qilish
                      </button>
                      <button className="btn btn-outline-primary ms-3">
                        Xabar yozish
                      </button>
                    </div>
                  </div>
                </div>
                <div className="locatio mt-4">
                  <div className="row  m-0 py-3">
                    <p className="fw-bold ps-3">Joylashuv</p>
                    <div className="col-6 p-0 py-3 d-flex align-items-start justify-content-between">
                      <FaLocationArrow className="col-3 p-0" />
                      <div className="col-9">
                        <p className="fw-bold">{v.location}</p>
                        <p>Toshkent viloyati</p>
                      </div>
                    </div>
                    <div className="col-6 p-0">
                      <img
                        src="https://www.olx.uz/app/static/media/staticmap.65e20ad98.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8  mt-3 col-12">
              <div className=" p-4">
                <p className="fs-2">{v.details?.title}</p>
                <h2>{v.details?.price}</h2>
                <h5>Tavsif</h5>
                {v.details.content.map((value, index) => (
                  <p>{value.p}</p>
                ))}
              </div>
            </div>
          </div>
        </ProductWraper>
      );
    }
  });
};

export default Product;
