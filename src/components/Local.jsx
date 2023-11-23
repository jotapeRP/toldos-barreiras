import React from "react";

import toldoLogo from "../assets/toldo-logoPng.png";
import arrowUp from "../assets/arrow-up.png";

const Local = () => {
  return (
    <div id="page4" className="h-screen relative bg-[#0d0c09] text-[#f2f2f2]">
      <div className="pt-10 pb-5 flex items-center justify-center">
        <hr className="w-64 h-[1px] bg-[#f2c230] border-0" />
        <img src={toldoLogo} alt="toldo logo" className="h-10 mx-2" />
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.747424498095!2d-45.00243569999999!3d-12.129426299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x934ab576741a345f%3A0x6f61692f3206f56!2sToldos%20Barreiras%20Ideia!5e0!3m2!1spt-BR!2sbr!4v1700664099645!5m2!1spt-BR!2sbr"
        width="100%"
        height="300"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="p-10">
        <h2 className="uppercase tracking-[0.5rem] mb-4">Local</h2>
        <h1 className="text-2xl font-semibold mb-8">
          Endereço: R. Joaquim Antunes, 429 - Barreirinhas, Barreiras - BA,
          47811-009
        </h1>
        <p>
          Toldos que fazem a diferença! Destaque sua loja com elegância e
          praticidade. Consulte-nos:
        </p>
      </div>
      <div className="flex bg-[#f2c230] justify-between items-center p-6 text-xl font-bold">
        <a href="https://www.instagram.com/" target="_blank">
          Instagram
        </a>
        <button>Contate-nos</button>
        <a href="tel:(77)99905-1020" target="_blank">
          9999-9999
          <br />
          Ligar
        </a>
      </div>
      <a href="#page1">
        <img
          src={arrowUp}
          alt="arrow image"
          className="w-8 absolute top-[93%] left-2/4 translate-x-2/4 animate-bounce"
        />
      </a>
    </div>
  );
};

export default Local;
