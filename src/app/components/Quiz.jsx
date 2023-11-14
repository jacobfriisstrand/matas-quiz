"use client";
import React, { useState } from "react";

function Quiz(props) {
  // GET svarmuligheder fra Supabase
  const [visible, setVisible] = useState(0);

  // Filter the data based on props.step === 1
  const filteredDataStepOne = props.data.filter((quest) => quest.step === 1);
  const filteredDataStepTwo = props.data.filter((quest) => quest.step === 2);
  const filteredDataStepThree = props.data.filter((quest) => quest.step === 3);
  const filteredDataStepFour = props.data.filter((quest) => quest.step === 4);

  const views = [
    <section>
      <p>test</p>
      {filteredDataStepOne.map((quest) => (
        <p>{quest.svarmulighed}</p>
      ))}
    </section>,
    <section>
      {filteredDataStepTwo.map((quest) => (
        <p>{quest.svarmulighed}</p>
      ))}
    </section>,
    <section>
      {filteredDataStepThree.map((quest) => (
        <p>{quest.svarmulighed}</p>
      ))}
    </section>,
    <section>
      {filteredDataStepFour.map((quest) => (
        <p>{quest.svarmulighed}</p>
      ))}
    </section>,
  ];

  function setNextView() {
    setVisible((oldValue) => {
      if (oldValue === views.length - 1) {
        return 0;
      }
      return oldValue + 1;
    });
  }

  return (
    <div>
      {views[visible]}
      <button onClick={setNextView}>Next view</button>
    </div>
  );
}

export default Quiz;
