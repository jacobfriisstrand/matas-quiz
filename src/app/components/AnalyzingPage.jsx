import React from "react";
import Animation from "./Animation";

import { DM_Serif_Text } from "next/font/google";

const dmSerif = DM_Serif_Text({ subsets: ["latin"], weight: "400", display: "swap" });

function AnalyzingPage({ setStep }) {
  return (
    <div className="bg-matasBrown-200 rounded-md flex flex-col items-center justify-center min-h-full ">
      <Animation setStep={setStep} />
      <h1 className={`${dmSerif.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-matasPrimaryText-900 font-semibold`}>Beregner dine svar</h1>
      <h2 className="text-matasBlue-900 text-xs sm:text-base lg:text-xl mt-2 ">FINDER DIN FAVORIT</h2>
    </div>
  );
}

export default AnalyzingPage;
