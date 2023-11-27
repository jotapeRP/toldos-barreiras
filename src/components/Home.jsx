import React from "react";
import pexelToldo from "../assets/pexels-toldo.jpg";
import arrowImg from "../assets/arrow-img.png";
import toldoLogo from "../assets/toldo-logoPng.png";

const Home = () => {
  return (
    <div
      id="page1"
      className="h-screen relative bg-gradient-to-br from-gray-600 to-gray-700"
    >
      <img
        src={pexelToldo}
        alt="background"
        className="object-cover absolute mix-blend-overlay md:z-10 h-full md:right-0 md:mix-blend-normal"
      />
      <div className="w-4/5 p-5 absolute top-1/4 md:top-0 md:h-screen md:bg-[#402a01] md:flex md:flex-col md:justify-center">
        <div className="pt-10 hidden md:flex items-center mb-4">
          <hr className="w-64 h-[1px] bg-[#f2c230] border-0" />
          <img src={toldoLogo} alt="toldo logo" className="h-10 mx-2" />
        </div>
        <h1 className="text-slate-50 text-4xl font-extrabold mb-6">
          Toldos Barreiras Ideia
        </h1>
        <p className="text-slate-300 mb-6 tracking-wide">
          Toldos, Paineis, Adesivos, Banners, Locação de Tendas
        </p>
        <button className="text-slate-50 transition bg-[#F2C230] p-3 w-2/3 hover:bg-[#f2d06b] hover:text-[#0d0c09]">
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
