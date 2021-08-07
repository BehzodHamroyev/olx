import React, { useContext } from "react";
import MobileAppsWrapper from "./MobileAppsWrapper";
import ThemeContext from "../../Container/Context/theme-context";
import {FaRegCheckCircle} from 'react-icons/fa'
import Containers from "../../Container/Containers/Containers";

const list = [
  {
    icon: <FaRegCheckCircle/>,
    title: "Используйте удобное бесплатное приложение для смарфтона",
  },
  {
    icon: <FaRegCheckCircle/>,
    title: "Создавайте и публикуйте объявления за минуты",
  },
  {
    icon: <FaRegCheckCircle/>,
    title: "Ищите объявления и общайтесь откуда угодно",
  },
];

const MobileApps = () => {
  const { colors } = useContext(ThemeContext);
  return (
   
      <MobileAppsWrapper colors={colors}>
        <div className="mobile-footer">
          <div className="container">
            <div className="row mobile-wrapper">
              <div className="col-md-6 mobile-contact">
                <h1 className="mb-4">Возьмите OLX с собой</h1>
                <div>
                  {list.map((value, index) => {
                    return (
                      <div className="d-flex align-items-center my-2">
                        {value.icon}
                        <h5 className="mb-0 ms-3">{value.title}</h5>
                      </div>
                    );
                  })}
                  <div className="mt-5">
                    <a href="https://itunes.apple.com/uz/app/torg.uz/id665094472?mt=8&ign-mpt=uo%3D4">
                      <img
                        className="me-3"
                        src="	https://static.olx.uz/static/olxuz/packed/font/2f435807ce8bd79e1929d42f0ff6995cfc.svg"
                        alt=""
                      />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.torg.torg&hl=ru&referrer=utm_source%3Dolx.uz%26utm_medium%3Dcpc%26utm">
                      <img
                        src="https://static.olx.uz/static/olxuz/packed/font/2ffcd0509f3e3ea2b46691cb401b7f64c3.svg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mobile-img">
                <img
                  className="w-50"
                  src="https://static.olx.uz/static/olxuz/packed/img/2fb666ead34773f24a9b66bb4474a72ebe.png"
                  alt="rasm"
                />
              </div>
            </div>
          </div>
        </div>
      </MobileAppsWrapper>

  );
};

export default MobileApps;
