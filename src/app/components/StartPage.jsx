import React from "react";
import Image from "next/image";

export default function StartPage({ setStep }) {
  return (
    <div className="grid grid-cols-2 bg-matasPink-700">
      <Image src="/model.webp" width={600} height={600} alt="Model picture" />
      <div className="w-10/12 gap-3 flex flex-col justify-center align-center text-center md:w-9/12 mx-auto md:gap-5">
        <p className="text-matasBlue-900 text-xs sm:text-xl lg:text-xl">
          FIND DIN FAVORIT
        </p>
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-matasBlue-900 font-serif font-semibold">
          Hvilken dagcreme passer til dig?
        </h1>
        <button
          onClick={() => {
            setStep((prevStep) => prevStep + 1);
          }}
          className="p-2 sm:p-3 text-matasWhite-900 bg-matasBlue-900 rounded-md"
        >
          <p className="text-xs sm:text-xl lg:text-xl">TAG TESTEN</p>
        </button>
        <h4 className="text-matasBlue-900 text-xs sm:text-xl lg:text-xl">
          <b>Optjen 5 point</b> hos club Matas
        </h4>
      </div>
    </div>
  );
}
