"use client";
import { useState } from "react";
import Quiz from "./Quiz";
import Card from "./Card";
import styles from "./Wrapper.module.css";

function Wrapper({ productData, data }) {
  const [step, setStep] = useState(0);

  return (
    <section className={styles.grid}>
      {step === 7 ? (
        <p>Hej</p>
      ) : (
        <>
          <div className="col-span-2 row-start-2">
            <Quiz step={step} setStep={setStep} data={data} className={styles.quiz} />
          </div>
          {productData.map((product) => (
            <Card key={product.id} src={product.image} brand={product.brand} title={product.name} price={product.price} />
          ))}
        </>
      )}
    </section>
  );
}

export default Wrapper;
