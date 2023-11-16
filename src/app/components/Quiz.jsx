"use client";
import React, { useState } from "react";

function Quiz(props) {
  const [step, setStep] = useState(0);
  // console.log(step);

  return (
    <article>
      <h1>Quiz</h1>
      {step === 0 && <p>Hej</p>}
      {step === 5 && <p>Farvel</p>}
      {props.data
        .filter((item) => item.step === step)
        .map((item) => (
          <div key={item.id}>
            <input type="checkbox" name="svarmulighed" id={item.id} value={item.svarmulighed} />
            <label htmlFor={item.id}>{item.svarmulighed}</label>
          </div>
        ))}
      <button
        onClick={() => {
          console.log(step);
          setStep((prevStep) => prevStep - 1);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          console.log(step);
          setStep((prevStep) => prevStep + 1);
        }}
      >
        Next
      </button>
    </article>
  );
}

export default Quiz;
