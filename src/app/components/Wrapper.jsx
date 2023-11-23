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
          <section className="flex justify-between px-4 py-12 bg-matasPink-700">
            <div className="flex flex-col ">
              <h3 className="">Formål</h3>
              {ref.current.purpose.map((object, index) => (
                <p key={index}>{object}</p>
              ))}
            </div>
            <div>
              <h3>Præferencer</h3>
              <p>{ref.current.important}</p>
            </div>
            <div>
              <h3>Alder</h3>
              <p>{ref.current.age}</p>
            </div>
            <div>
              <h3>Hudtype</h3>
              <p>{ref.current.skinType}</p>
            </div>
            <button className="p-2 sm:p-3 text-matasWhite-900 bg-matasBlue-900 rounded-md mt-10 w-full">
              <p className="text-xs sm:text-base lg:text-base">GEM DINE SVAR</p>
            </button>
          </section>
          <h2>Dine Resultater: </h2>
          <section className={styles.grid}>
            {productData.slice(0, 3).map((product) => (
              <Card
                key={product.id}
                src={product.image}
                brand={product.brand}
                title={product.name}
                price={product.price}
              />
            ))}
          </section>
        </>
      ) : (
        <section className={styles.grid}>
          <div className="col-span-2 row-start-2">
            <Quiz
              myRef={ref}
              step={step}
              setStep={setStep}
              data={data}
              className={styles.quiz}
            />
          </div>
          {productData.map((product) => (
            <Card
              key={product.id}
              src={product.image}
              brand={product.brand}
              title={product.name}
              price={product.price}
            />
          ))}
        </section>
      )}
    </section>
  );
}

export default Wrapper;
