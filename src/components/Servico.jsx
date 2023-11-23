import React from "react";

//imagens
import toldoServico from "../assets/toldo-servico.jpg";
import banners from "../assets/baners.jpg";
import tendas from "../assets/tendas.jpg";
import arrowImg from "../assets/arrow-img.png";
import toldoLogo from "../assets/toldo-logoPNG.png";

const Servico = () => {
  return (
    <div
      id="page3"
      className="h-screen relative bg-[#0d0c09] text-[#f2f2f2] text-center"
    >
      <div className="pt-10 flex items-center justify-center">
        <hr className="w-64 h-[1px] bg-[#f2c230] border-0" />
        <img src={toldoLogo} alt="toldo logo" className="h-10 mx-2" />
      </div>
      <div className="text-center py-12">
        <h2 className="text-sm tracking-[0.15rem] mb-2 uppercase">serviços</h2>
        <h1 className="text-3xl font-black">Nossos Serviços</h1>
      </div>
      <div className="flex items-center justify-center text-[#402a01] mb-10">
        <img
          src={toldoServico}
          alt="Serviço de toldo"
          className="object-cover h-36 w-44"
        />
        <div className="bg-[#f2c230] h-28 w-44 flex justify-center flex-col items-center">
          <p>Serviço:</p>
          <h3 className="uppercase font-bold text-sm">Toldos</h3>
        </div>
      </div>
      <div className="flex items-center justify-center text-[#402a01] mb-10">
        <div className="bg-[#f2c230] h-28 w-44 flex justify-center flex-col items-center">
          <p>Serviço:</p>
          <h3 className="uppercase font-bold text-sm">
            Paineis, Adesivos e Banners
          </h3>
        </div>
        <img
          src={banners}
          alt="Serviço de toldo"
          className="object-cover h-36 w-44"
        />
      </div>
      <div className="flex items-center justify-center text-[#402a01] mb-10">
        <img
          src={tendas}
          alt="Serviço de toldo"
          className="object-cover h-36 w-44"
        />
        <div className="bg-[#f2c230] h-28 w-44 flex justify-center flex-col items-center">
          <p>Serviço:</p>
          <h3 className="uppercase font-bold text-sm">Locação de Tendas</h3>
        </div>
      </div>
      <a href="#page4">
        <img
          src={arrowImg}
          alt="arrow image"
          className="w-8 absolute top-[93%] left-2/4 translate-x-2/4 animate-bounce"
        />
      </a>
    </div>
  );
};

export default Servico;
