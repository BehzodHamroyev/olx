import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../Context/theme-context';
import FooterWraper from './FooterWraper';
const data = [
  {
    links: [
      { to: '/mobilApp', link: 'Mobil ilovalar' },
      { to: '/help', link: 'Yordam' },
      { to: '/', link: 'Pullik xizmatlar' },
      { to: '/', link: 'OLX-da biznes' },
      { to: '/', link: 'Saytda reklama' },
      { to: '/', link: 'Foydalanish shartlari' },
      { to: '/', link: 'Maxfiylik siyosati' },
    ],
  },
  {
    links: [
      { link: 'Qanday sotib olish va sotish?', to: '/' },
      { link: 'Xavfsizlik qoidalari', to: '/' },
      { link: 'Sayt xaritasi', to: '/' },
      { link: 'Mintaqalar  xaritasi', to: '/' },
      { link: 'Career', to: '/' },
      { link: 'Teskari aloqa', to: '/"' },
    ],
  },
];
const Footer = () => {
  const { theme, setTheme,colors } = useContext(ThemeContext);
  return (
    <FooterWraper Colors={colors}>
      <div className="row container  m-0">
        {data.map((v, i) => {
          return (
            <div class="col-md-4 d-flex flex-column justify-content-around">
              {v.links.map((value, index) => {
                return <Link to={value.to}>{value.link}</Link>;
              })}
            </div>
          );
        })}
        <div className="col-md-4">
          <div className="d-flex">
            <a href={`https://play.google.com/store/apps/details?id=com.torg.torg&hl=ru&referrer=utm_source%3Dolx.uz%26utm_medium%3Dcpc%26utm_campaign%3Dandroid-app-footer`}>
              <img
                src="https://static.olx.uz/static/olxuz/packed/font/2fc9f37e6707acfc0e1255cec57c49a986.svg"
                className="w-100 mx-3"
                alt=""
              />
            </a>
            <a href={`https://itunes.apple.com/uz/app/torg.uz/id665094472?mt=8&ign-mpt=uo%3D4`}>
              <img
                src="https://static.olx.uz/static/olxuz/packed/font/2fccd2faa9395d5faed1011516c64dc929.svg"
                className="w-100 mx-3"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </FooterWraper>
  );
};

export default Footer;
