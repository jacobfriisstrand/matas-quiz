"use client";
import React, { useState, useEffect } from "react";
import StartPage from "./StartPage";
import EndPage from "./EndPage";
import styles from "./Quiz.module.css";
import { DM_Serif_Display } from "next/font/google";
import Image from "next/image";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

function Quiz(props) {
  const [step, setStep] = useState(0);
  const [checkboxesChecked, setCheckboxesChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    // Logic to track checkbox state
    const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    setCheckboxesChecked(checkedCheckboxes.length === 2);
  };

  useEffect(() => {
    if (step === 1) {
      // Reset checkbox state on step change
      setCheckboxesChecked(false);
    }
  }, [step]);
  // console.log(step);

  return (
    <article>
      {props.data
        .filter((item) => item.step === step)
        .map((item) => (
          <div key={item.id}>
            <h3 className={`${dmSerif.className} text-2xl`}>{item.questions}</h3>
            <p>{item.options}</p>
          </div>
        ))}

      {step === 0 && <StartPage />}
      {step === 5 && <EndPage />}

      <div className="flex gap-x-10 flex-wrap">
        {props.data
          .filter((item) => item.step === step && item.svarmulighed !== null)
          .map((item) => (
            <div key={item.id} className={styles.inputContainer}>
              {step === 1 ? (
                <input
                  onChange={handleCheckboxChange}
                  className={`${styles.inputChildren} checked:bg-matasBlue-900 peer hover:bg-matasBlue-900 appearance-none w-full focus-visible:border-4 border-matasBlue-900 border p-5 rounded-full`}
                  type="checkbox"
                  name="svarmulighed"
                  id={item.id}
                  value={item.svarmulighed}
                />
              ) : (
                <input
                  onChange={handleCheckboxChange}
                  className={`${styles.inputChildren} checked:bg-matasBlue-900 peer hover:bg-matasBlue-900 appearance-none w-full focus-visible:border-4 border-matasBlue-900 border p-5 rounded-full`}
                  type="radio"
                  name="svarmulighed"
                  id={item.id}
                  value={item.svarmulighed}
                />
              )}
              <label className={`${styles.inputChildren} p-5 peer-checked:text-white peer-hover:text-white`} htmlFor={item.id}>
                {item.svarmulighed}
              </label>
            </div>
          ))}
      </div>
      {step > 0 && step !== 5 && (
        <button
          onClick={() => {
            console.log(step);
            setStep((prevStep) => prevStep - 1);
          }}
        >
          Prev
        </button>
      )}
      {step < 5 && (
        <button
          onClick={() => {
            if (step === 1 && !checkboxesChecked) {
              setStep((prevStep) => prevStep + 0);
              return;
            }
            setStep((prevStep) => prevStep + 1);
          }}
        >
          Next
        </button>
      )}
    </article>
  );
}

export default Quiz;
