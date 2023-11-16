"use client";
import React, { useState } from "react";
import StartPage from "./StartPage";
import EndPage from "./EndPage";
import styles from "./Quiz.module.css";

function Quiz(props) {
  const [step, setStep] = useState(0);
  // console.log(step);

  return (
    <article>
      <h2>Quiz</h2>
      {props.data
        .filter((item) => item.step === step)
        .map((item) => (
          <div key={item.id}>
            <h3>{item.questions}</h3>
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
              <input className={`${styles.inputChildren} checked:bg-black peer hover:bg-black appearance-none w-full focus-visible:border-4 border-black border p-5 rounded-full`} type="checkbox" name="svarmulighed" id={item.id} value={item.svarmulighed} />
              <label className={`${styles.inputChildren} p-5 cursor-pointer peer-checked:text-white peer-hover:text-white`} htmlFor={item.id}>
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
            console.log(step);
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
