import React from 'react';
import CategoryCard from '../../Components/MainCategoryComponets/CategoryCard';
import './Home.css';
import Data from '../../Data/CategoryData';
import PremiumProducts from '../../Components/PremiumProducts/PremiumProducts';
const data = [
  {
    to:"/obyavlenie/",
    img: `https://apollo-olx.cdnvideo.ru/v1/files/wd2ejhfr17521-UZ/image;s=644x461`,
    title: `Видео съемка, Video syomka Xizmati`,
    subTitle: `Buxoro 2 avg.`,
    price:``
  },

  {
    to:"/obyavlenie/",
    img: `https://apollo-olx.cdnvideo.ru/v1/files/2g12yoelx75t2-UZ/image;s=644x461`,
    title: `ЛЕКСАН "Поликарбонат" по оптовой цене.Консультация`,
    subTitle: `Toshkent, Shayxontohur tumani Kecha 14:25`,
    price:`35 000 so’m`
  },
  {
    to:"/obyavlenie/",
    img: `https://apollo-olx.cdnvideo.ru/v1/files/8hj0tf8osf1z-UZ/image;s=644x461`,
    title: `Деярли Бепул Интернет!!! Акцияли Интернет Пакетлар!!!`,
    subTitle: `Nukus Kecha 23:55`,
    price:`10 000 so’m`
  },
  {
    to:"/obyavlenie/",
    img: `https://apollo-olx.cdnvideo.ru/v1/files/4vvrmdjicgtq2-UZ/image;s=644x461`,
    title: `Шлем виртуальной реальности Oculus Rift CV1 +`,
    subTitle: `Toshkent, Mirobod tumani Bugun 10:44`,
    price:`450$`
  },
  {
    to:"/obyavlenie/",
    img: `https://apollo-olx.cdnvideo.ru/v1/files/xwugvtjdc3fl1-UZ/image;s=644x461`,
    title: `Охлаждающий спрей SPRAY ICE заморозка, спрей`,
    subTitle: `Toshkent, Uchtepa tumani 2 avg.`,
    price:`99 000 so’m`
  },
  {
    to:"/obyavlenie/",
    img: `https://apollo-olx.cdnvideo.ru/v1/files/lbu7p478s3ft1-UZ/image;s=644x461`,
    title: `Микрофон петличный беспроводной`,
    subTitle: `Toshkent, Chilonzor tumani `,
    price:`200 у.е.`
  },
  {
    to:"/obyavlenie/",
    img: `https://apollo-olx.cdnvideo.ru/v1/files/wd2ejhfr17521-UZ/image;s=644x461`,
    title: `Видео съемка, Video syomka Xizmati`,
    subTitle: `Samarqand Bugun 13:26`,
    price:`28 000 so’m`
  },
  {
    to:"/obyavlenie/",
    img: `https://apollo-olx.cdnvideo.ru/v1/files/v1tvmn32dyzm3-UZ/image;s=644x461`,
    title: `Ящики для холодильника`,
    subTitle: `Samarqand Bugun 13:26`,
    price:`28 000 so’m`
  },
];
const Home = () => {
  return (
    <div className="container d-flex Home">
      <div className="row">
        {Data.map((v, i) => {
          return <CategoryCard data={v} />;
        })}
        <h1 className="text-center">PREMIUM E`LONLAR</h1>
       <div className="row m-0">
       {
          data.map((v,i)=>{
            return(<PremiumProducts data={v}/>)
          })
        }
       </div>
      </div>
    </div>
  );
};

export default Home;
