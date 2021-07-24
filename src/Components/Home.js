import React from "react";
import "../style/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          {/* Product */}
          <Product
            id={13434355}
            title="FLAVAA Bhut Jolokia Ghost Pepper Hottest Chilli Pickle in Mustard Oil Glass Jar 250g"
            price={410}
            image="https://m.media-amazon.com/images/I/51p+Kej5etS._AC_SR250,230_.jpg"
            rating={5}
          />
          <Product
            id={34345343}
            title="Redmi Note 10 (Aqua Green, 4GB RAM, 64GB Storage) -Amoled Dot Display | 48MP Sony Sensor IMX582 | Snapdragon 678 Processor"
            price={15075}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/71OGzLCrjZS._SY606_.jpg"
            }
            rating={4}
          />

          {/* Product */}
        </div>

        <div className="home__row">
          {/* Product */}
          <Product
          id={3143533}
            title="Naraz"
            image="https://images-eu.ssl-images-amazon.com/images/I/41AUdI5RhzL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            price={175}
            rating={3}
          />

          {/* Product */}
          <Product
          id={3435446}
            title="Mattel Uno Playing Card Game"
            image="https://images-na.ssl-images-amazon.com/images/I/812Yr9WChrL._SL1500_.jpg"
            price={99}
            rating={3}
          />

          {/* Product */}
          <Product
            id={
              6735435
            }
            title="Tobo DVI to HDMI; DVI (DVI-D) to HDMI Male to Female Adapter with Gold-Plated (Pack of 1)"
            image="https://images-na.ssl-images-amazon.com/images/I/31Ws6b7dJaL.jpg"
            price={249}
            rating={3}
          />
        </div>

        <div className="home__row">
          {/* Product */}
          <Product
          id={358873867}
            title="
            Acer 31.5-inch (80.01 cm) Curved Full HD LED Backlit Computer Monitor with Stereo Speakers - ED322Q (White)"
            image="https://images-na.ssl-images-amazon.com/images/I/A1OUm0nT0uL._SL1500_.jpghttps://images-na.ssl-images-amazon.com/images/I/81wdb6hG6iL._SL1500_.jpg"
            price={35000}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
