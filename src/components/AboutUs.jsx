import React from "react";
import locTenda from "../assets/loc-tenda.jpg";
import toldoSelled from "../assets/toldo-selled.jpg";
import arrowImg from "../assets/arrow-img.png";

const AboutUs = () => {
  return (
    <div id="page2" className="h-screen bg-[#0D0C09] text-slate-100 relative">
      <div
        className="flex items-center justify-between mb-12
      "
      >
        <div className="w-28 m-auto">
          <h2 className="text-sm tracking-[0.15rem] mb-4 uppercase">
            Sobre Nós
          </h2>
          <h1 className="text-lg font-black">
            Mudando Visões para Realidade, Evento por Evento.
          </h1>
        </div>
        <img
          src={locTenda}
          alt="Locação de tenda"
          className="w-52 h-64 object-cover"
        />
      </div>
      <div>
        <p className="w-4/5 m-auto mb-4">
          Explore o melhor em soluções visuais na "Toldos Barreiras Ideia".
          Toldos, painéis, adesivos, banners e tendas.
        </p>
        <p className="w-4/5 m-auto mb-12">
          {" "}
          Oferecemos personalização e qualidade para destacar sua presença de
          forma única. Transforme seu evento ou negócio conosco, combinando
          funcionalidade e estilo.
        </p>
        <img
          src={toldoSelled}
          alt="Toldo de Toldos Barreiras"
          className="w-full h-60 object-cover"
        />
      </div>
      <a href="#page3">
        <img
          src={arrowImg}
          alt="arrow image"
          className="w-8 absolute top-[93%] left-2/4 translate-x-2/4 animate-bounce"
        />
      </a>
    </div>
  );
};

export default AboutUs;
