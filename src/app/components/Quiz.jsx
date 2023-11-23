"use client";
import React, { useState, useEffect, useRef } from "react";
import EndPage from "./EndPage";
import StartPage from "./StartPage";
import ProgressBar from "./ProgressBar";
import styles from "./Quiz.module.css";
import Image from "next/image";
import AnalyzingPage from "./AnalyzingPage";

function Quiz({ setStep, step, ...props }) {
  // const [step, setStep] = useState(0);
  const [checkboxesChecked, setCheckboxesChecked] = useState(false);
  const [radioChecked, setRadioChecked] = useState(false);

  const ref = useRef({
    purpose: [],
    important: "",
    age: "",
    skinType: "",
  });

  const handleCheckboxChange = (e) => {
    const checkboxValue = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      ref.current.purpose.push(checkboxValue);
    } else {
      ref.current.purpose = ref.current.purpose.filter((value) => value !== checkboxValue);
    }

    setCheckboxesChecked(ref.current.purpose.length >= 2);
  };

  const handleRadioChange = (e) => {
    const mapping = {
      2: "important",
      3: "age",
      4: "skinType",
    };

    ref.current[mapping[step]] = e.target.value;

    console.log(ref.current);
    setRadioChecked(true);
  };

  return (
    <article className="flex flex-col h-full bg-gray-500 rounded-md overflow-hidden">
      {props.data
        .filter((item) => item.step === step && item.questions !== null)
        .map((item) => (
          <div key={item.id}>
            <Image className="aspect-video w-full max-h-20 object-center object-cover" src={`/${item.hero}`} width={600} height={300} alt="Model picture" />
            <div className="px-4">
              <h3 className="font-serif font-semibold mt-5 text-2xl sm:text-2xl md:text-3xl lg:text-3xl ">{item.questions}</h3>
              <p className="text-xs sm:text-base lg:text-base mb-4">{item.options}</p>
            </div>
          </div>
        ))}
      {step === 0 && <StartPage setStep={setStep} />}
      {step === 5 && <AnalyzingPage setStep={setStep} />}
      {step === 6 && <EndPage setStep={setStep} />}
      <div className="flex gap-x-2 md:gap-x-5 lg:gap-x-10 flex-wrap px-4 mb-5">
        <ProgressBar />
        {props.data
          .filter((item) => item.step === step && item.svarmulighed !== null)
          .map((item) => (
            <div key={item.id} className={styles.inputContainer}>
              {step === 1 ? (
                <input
                  onChange={handleCheckboxChange}
                  className={`${styles.inputChildren} checked:bg-matasBlue-900 peer hover:bg-matasBlue-900 appearance-none w-full focus-visible:border-4 border-matasBlue-900 border p-4 rounded-full`}
                  type="checkbox"
                  name="svarmulighed"
                  id={item.id}
                  value={item.svarmulighed}
                />
              ) : (
                <input
                  onChange={handleRadioChange}
                  className={`${styles.inputChildren} checked:bg-matasBlue-900 peer hover:bg-matasBlue-900 appearance-none w-full focus-visible:border-4 border-matasBlue-900 border p-4 rounded-full`}
                  type="radio"
                  name={"svarmulighed_" + step}
                  id={item.id}
                  value={item.svarmulighed}
                />
              )}
              <label className={`${styles.inputChildren} p-4 text-xs md:text-base cursor-pointer peer-checked:text-white peer-hover:text-white`} htmlFor={item.id}>
                {item.svarmulighed}
              </label>
            </div>
          ))}
      </div>
      <div className="flex justify-center w-full gap-5 mt-auto pb-4">
        {step !== 0 && step !== 5 && step !== 6 && (
          <button
            className="flex  place-items-center  gap-2 py-1.5 px-5 lg:px-6 rounded-full hover:bg-transparent hover:ring-inset ring-1 ring-matasBlue-900 hover:text-matasBlue-900 hover:border-matasBlue-900 bg-matasBlue-900 text-matasWhite-900 text-sm"
            onClick={() => {
              console.log(step);
              setStep((prevStep) => prevStep - 1);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
              <path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
            </svg>{" "}
            Forrige
          </button>
        )}
        {step > 0 && step !== 5 && step !== 6 && (
          <button
            className="flex  place-items-center  gap-2 py-1.5 px-5 lg:px-6 rounded-full hover:bg-transparent hover:ring-inset ring-1 ring-matasBlue-900 hover:text-matasBlue-900 hover:border-matasBlue-900 bg-matasBlue-900 text-matasWhite-900 text-sm"
            onClick={() => {
              if (checkboxesChecked || radioChecked) {
                setStep((prevStep) => prevStep + 1);
              } else {
                setStep((prevStep) => prevStep + 0);
                return;
              }
              setRadioChecked(false);
              setCheckboxesChecked(false);
            }}
          >
            Næste{" "}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
              <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
          </button>
        )}
      </div>
    </article>
  );
}

export default Quiz;
