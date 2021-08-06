import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const data = [
  {
    links: [
      { to: '/mobilApp', link: 'Mobil ilovalar' },
      { to: '/help', link: 'Yordam' },
      { to: '/payment', link: 'Pullik xizmatlar' },
      { to: '/business', link: 'OLX-da biznes' },
      { to: '/advertising', link: 'Saytda reklama' },
      { to: '/articils', link: 'Foydalanish shartlari' },
      { to: '/secret', link: 'Maxfiylik siyosati' },
    ],
  },
  {
    links: [
      { link: 'Qanday sotib olish va sotish?', to: '/howitWork' },
      { link: 'Xavfsizlik qoidalari', to: '/safeUser' },
      { link: 'Sayt xaritasi', to: '/siteMap' },
      { link: 'Mintaqalar  xaritasi', to: '/siteMap/region' },
      { link: 'Career', to: '/Career' },
      { link: 'Teskari aloqa', to: '/contact' },
    ],
  },
];
const Footer = () => {
  return (
    <div className="Footer  ">
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
    </div>
  );
};

export default Footer;
