"use client";
import React, { useState, useEffect } from "react";
import StartPage from "./StartPage";
import EndPage from "./EndPage";

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
      {props.data
        .filter((item) => item.step === step && item.svarmulighed !== null)
        .map((item) => (
          <div key={item.id}>
            {step === 1 ? <input type="checkbox" name="svarmulighed" id={item.id} value={item.svarmulighed} onChange={handleCheckboxChange} /> : <input type="radio" name="svarmulighed" id={item.id} value={item.svarmulighed} />}
            <label htmlFor={item.id}>{item.svarmulighed}</label>
          </div>
        ))}
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
