import React from "react";
import Animation from "./Animaton";

function AnalyzingPage({ setStep }) {
  return (
    <div className="bg-matasBrown-200 rounded-lg m-3 grid place-items-center ">
      <Animation setStep={setStep} />
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-matasPrimaryText-900 font-serif font-semibold">
        Beregner dine svar
      </h1>
      <h2 className="text-matasBlue-900 text-xs sm:text-base lg:text-xl ">
        FINDER DIN FAVORIT
      </h2>
    </div>
  );
}

export default AnalyzingPage;
