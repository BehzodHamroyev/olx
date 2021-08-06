import React from 'react';
import './Containers.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
const Containers = (props) => {
  return (
    <div className="Containers">
      <Header></Header>
      <div className="children">{props.children}</div>
      <Footer></Footer>
    </div>
  );
};

export default Containers;
