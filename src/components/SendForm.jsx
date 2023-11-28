import React from "react";

const SendForm = (props) => {
  return (
    <div
      className={
        props.isActive
          ? "hidden"
          : "fixed h-screen w-screen z-20 text-[#f2f2f2]"
      }
    >
      <div
        className="h-screen w-screen bg-slate-950 opacity-70"
        onClick={props.handleClass}
      ></div>
      <div className="z-30 p-10 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] h-1/2 w-2/3 md:h-2/3 md:w-1/2 bg-[#402a01]">
        <p
          onClick={props.handleClass}
          className="text-xl font-bold absolute right-4 top-4 text-slate-300 cursor-pointer"
        >
          X
        </p>
        <form className="flex flex-col">
          <input
            type="text"
            placeholder="Nome"
            className="bg-transparent p-2 border-b-2 border-b-[#0d0c09] mb-2"
          />
          <input
            type="text"
            placeholder="Email"
            className="bg-transparent p-2 border-b-2 border-b-[#0d0c09] mb-2"
          />
          <input
            type="text"
            placeholder="Telefone"
            className="bg-transparent p-2 border-b-2 border-b-[#0d0c09] mb-2"
          />
          <textarea
            value="Estou entrando em contato com vocês para contratar os seus seviços!"
            id=""
            cols="10"
            rows="10"
            className="bg-transparent p-2 h-14 border-b-2 border-b-[#0d0c09] mb-14"
          ></textarea>
          <button className="text-slate-50 transition bg-[#F2C230] p-3 hover:bg-[#f2d06b] hover:text-[#0d0c09]">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendForm;
