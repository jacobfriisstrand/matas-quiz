"use client";
import React, { useState, useEffect, useRef } from "react";
import StartPage from "./StartPage";
import EndPage from "./EndPage";
import styles from "./Quiz.module.css";
import Image from "next/image";

function Quiz(props) {
  const [step, setStep] = useState(0);
  const [checkboxesChecked, setCheckboxesChecked] = useState(false);

  const ref = useRef([]);

  const handleCheckboxChange = (e) => {
    const checkboxId = e.target.id;
    const isChecked = e.target.checked;

    if (isChecked) {
      ref.current.push(checkboxId);
    } else {
      ref.current = ref.current.filter((id) => id !== checkboxId);
    }

    setCheckboxesChecked(ref.current.length >= 2);
  };

  useEffect(() => {
    if (step === 1) {
      // Reset checkbox state on step change
      setCheckboxesChecked(false);
      ref.current.splice(ref);
    }
  }, [step]);
  // console.log(step);

  return (
    <article className="space-y-5">
      <h2>Quiz</h2>
      {props.data
        .filter((item) => item.step === step && item.questions !== null)
        .map((item) => (
          <div key={item.id}>
            <Image
              src={`/${item.hero}`}
              width={600}
              height={600}
              alt="Model picture"
            />
            <h3 className="font-serif font-semibold text-2xl">
              {item.questions}
            </h3>
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
                  className={`${styles.inputChildren} checked:bg-matasBlue-900 peer hover:bg-matasBlue-900 appearance-none w-full focus-visible:border-4 border-matasBlue-900 border p-5 rounded-full`}
                  type="radio"
                  name="svarmulighed"
                  id={item.id}
                  value={item.svarmulighed}
                />
              )}
              <label
                className={`${styles.inputChildren} p-5 cursor-pointer peer-checked:text-white peer-hover:text-white`}
                htmlFor={item.id}
              >
                {item.svarmulighed}
              </label>
            </div>
          ))}
      </div>
      <div className="flex justify-center w-full gap-20">
        {step > 0 && step !== 5 && (
          <button
            className="py-4 px-10 rounded-full hover:bg-transparent hover:ring-inset ring-2 ring-matasBlue-900 hover:text-matasBlue-900 hover:border-matasBlue-900 bg-matasBlue-900 text-matasWhite-900"
            onClick={() => {
              console.log(step);
              setStep((prevStep) => prevStep - 1);
            }}
          >
            Forrige
          </button>
        )}
        {step < 5 && (
          <button
            className="py-4 px-10 rounded-full hover:bg-transparent hover:ring-inset ring-2 ring-matasBlue-900 hover:text-matasBlue-900 hover:border-matasBlue-900 bg-matasBlue-900 text-matasWhite-900"
            onClick={() => {
              if (step === 1 && !checkboxesChecked) {
                setStep((prevStep) => prevStep + 0);
                return;
              }
              setStep((prevStep) => prevStep + 1);
            }}
          >
            Næste
          </button>
        )}
      </div>
    </article>
  );
}

export default Quiz;
