"use client";
import React, { useState, useEffect, useRef } from "react";
import StartPage from "./StartPage";
import EndPage from "./EndPage";
import CheckBoxes from "./CheckBoxes";

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
            <CheckBoxes key={item.id} svarmulighed={item.svarmulighed} id={item.id} step={step} handleCheckboxChange={handleCheckboxChange} />
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
