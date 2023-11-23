import React from "react";
import pexelToldo from "../assets/pexels-toldo.jpg";
import arrowImg from "../assets/arrow-img.png";

const Home = () => {
  return (
    <div
      id="page1"
      className="h-screen relative bg-gradient-to-br from-gray-600 to-gray-700 "
    >
      <img
        src={pexelToldo}
        alt="background"
        className="object-cover absolute mix-blend-overlay h-full"
      />
      <div className="w-4/5 p-5 absolute top-1/4">
        <h1 className="text-slate-50 text-4xl font-extrabold mb-6">
          Toldos Barreiras Ideia
        </h1>
        <p className="text-slate-300 mb-6 tracking-wide">
          Toldos, Paineis, Adesivos, Banners, Locação de Tendas
        </p>
        <button className="text-slate-50 bg-[#F2C230] p-3 w-2/3">
          Contate-nos
        </button>
      </div>
      <a href="#page2">
        <img
          src={arrowImg}
          alt="arrow image"
          className="w-8 absolute top-[93%] left-2/4 translate-x-2/4 animate-bounce"
        />
      </a>
    </div>
  );
};

export default Home;
