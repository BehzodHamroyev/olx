import React, { useContext } from 'react';
import ContainersWraper from './ContainersWraper.jsx';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ThemeContext from '../Context/theme-context.jsx';
import Input from '../../Components/input/Input'
const Containers = (props) => {
  const {colors} = useContext(ThemeContext)
  console.log(colors);
  return (
    <div className="Containers">
      <Header></Header>
      <Input/>
      <ContainersWraper Colors={colors}>{props.children}</ContainersWraper>
      <Footer></Footer>
    </div>
  );
};

export default Containers;
