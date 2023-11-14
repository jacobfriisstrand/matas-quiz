"use client";
import { useState } from "react";
import React from "react";
import { data } from "autoprefixer";
// import Card from "./components/Card";

function Quiz(props) {
  const [visible, setVisible] = useState(0);

  const views = [
    <section>
      if (props.step === 1)
      {
        <div>
          {data.map((question) => (
            <p key={props.id}>{question.svarmulighed}</p>
          ))}
        </div>
      }
    </section>,
    <section>2</section>,
    <section>3</section>,
    <section>4</section>,
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
