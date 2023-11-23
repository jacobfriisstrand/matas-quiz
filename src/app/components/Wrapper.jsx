"use client";
import { useState, useRef } from "react";
import Quiz from "./Quiz";
import Card from "./Card";
import styles from "./Wrapper.module.css";

function Wrapper({ productData, data }) {
  const [step, setStep] = useState(0);

  const ref = useRef({
    purpose: [],
    important: "",
    age: "",
    skinType: "",
  });

  return (
    <section>
      {step === 7 ? (
        <>
          <section>
            <p>{ref.current.purpose}</p>
            <p>{ref.current.important}</p>
            <p>{ref.current.age}</p>
            <p>{ref.current.skinType}</p>
          </section>
          <section>
            <h2>Dine Resultater: </h2>
            {productData.slice(0, 3).map((product) => (
              <Card key={product.id} src={product.image} brand={product.brand} title={product.name} price={product.price} />
            ))}
          </section>
        </>
      ) : (
        <section className={styles.grid}>
          <div className="col-span-2 row-start-2">
            <Quiz myRef={ref} step={step} setStep={setStep} data={data} className={styles.quiz} />
          </div>
          {productData.map((product) => (
            <Card key={product.id} src={product.image} brand={product.brand} title={product.name} price={product.price} />
          ))}
        </section>
      )}
    </section>
  );
}

export default Wrapper;
