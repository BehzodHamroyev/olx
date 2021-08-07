import React from 'react';
import CategoryCard from '../../Components/MainCategoryComponets/CategoryCard';
import './Home.css';
import Data from '../../Data/CategoryData';
import PremiumProducts from '../../Components/PremiumProducts/PremiumProducts';
const data = [
  {
    to: 'obmen-barter',
    img: `https://apollo-olx.cdnvideo.ru/v1/files/3e3t0jroxula-UZ/image;s=1000x700`,
    title: `Konteyner uylar`,
    subTitle: `Buxoro 2 avg.`,
    details: {
      title: 'Konteyner uylar',
      imgs: [
        {
          img: 'https://apollo-olx.cdnvideo.ru/v1/files/ahbhnecyhklp-UZ/image;s=1000x700',
        },
        {
          img: 'https://apollo-olx.cdnvideo.ru/v1/files/1gbf3be3itav1-UZ/image;s=1000x700',
        },
        {
          img: 'https://apollo-olx.cdnvideo.ru/v1/files/anvfu22vjpcm-UZ/image;s=1000x700',
        },
        {
          img: 'https://apollo-olx.cdnvideo.ru/v1/files/xgaoojur6emm1-UZ/image;s=1000x700',
        },
        {
          img: 'https://apollo-olx.cdnvideo.ru/v1/files/hq9rnhsls59g3-UZ/image;s=1000x700',
        },
      ],
      content: [
        {
          p: 'Продаётся двух этажный кровать новый белого цвета очень прочный',
        },
        {
          p: 'Длина 180 см',
        },
        {
          p: 'Ширина 80 см',
        },
        {
          p: 'Помешаются взрослые тоже',
        },
        {
          p: 'Ikki etajlik krovat sotiladi yangi oq rangda juda mustahkam',
        },
        {
          p: 'Boyi 180 sm',
        },
        {
          p: 'Eni 80 sm',
        },
        {
          p: 'Konteyner uylar, dacha, yotoqxona xar-xil turdagi do‘kon ofeslar quramiz',
        },
      ],
    },
    price: ``,
    id: 9,
  },

  {
    to: 'nedvizhimost',
    img: `https://apollo-olx.cdnvideo.ru/v1/files/2g12yoelx75t2-UZ/image;s=644x461`,
    title: `ЛЕКСАН "Поликарбонат" по оптовой цене.Консультация`,
    subTitle: `Toshkent, Shayxontohur tumani Kecha 14:25`,
    price: `35 000 so’m`,
    id: 9,
  },
  {
    to: 'transport',
    img: `https://apollo-olx.cdnvideo.ru/v1/files/8hj0tf8osf1z-UZ/image;s=644x461`,
    title: `Деярли Бепул Интернет!!! Акцияли Интернет Пакетлар!!!`,
    subTitle: `Nukus Kecha 23:55`,
    price: `10 000 so’m`,
    id: 9,
  },
  {
    to: 'rabota',
    img: `https://apollo-olx.cdnvideo.ru/v1/files/4vvrmdjicgtq2-UZ/image;s=644x461`,
    title: `Шлем виртуальной реальности Oculus Rift CV1 +`,
    subTitle: `Toshkent, Mirobod tumani Bugun 10:44`,
    price: `450$`,
    id: 9,
  },
  {
    to: 'elektronika',
    img: `https://apollo-olx.cdnvideo.ru/v1/files/xwugvtjdc3fl1-UZ/image;s=644x461`,
    title: `Охлаждающий спрей SPRAY ICE заморозка, спрей`,
    subTitle: `Toshkent, Uchtepa tumani 2 avg.`,
    price: `99 000 so’m`,
    id: 9,
  },
  {
    to: 'dom-i-sad',
    img: `https://apollo-olx.cdnvideo.ru/v1/files/lbu7p478s3ft1-UZ/image;s=644x461`,
    title: `Микрофон петличный беспроводной`,
    subTitle: `Toshkent, Chilonzor tumani `,
    price: `200 у.е.`,
    id: 9,
  },
  {
    to: 'uslugi',
    img: `https://apollo-olx.cdnvideo.ru/v1/files/wd2ejhfr17521-UZ/image;s=644x461`,
    title: `Видео съемка, Video syomka Xizmati`,
    subTitle: `Samarqand Bugun 13:26`,
    price: `28 000 so’m`,
    id: 9,
  },
  {
    to: 'moda-i-stil',
    img: `https://apollo-olx.cdnvideo.ru/v1/files/v1tvmn32dyzm3-UZ/image;s=644x461`,
    title: `Ящики для холодильника`,
    subTitle: `Samarqand Bugun 13:26`,
    price: `28 000 so’m`,
    id: 9,
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
          {data.map((v, i) => {
            return <PremiumProducts data={v} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
