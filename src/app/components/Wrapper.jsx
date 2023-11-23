"use client";
import { useState, useRef, useEffect } from "react";
import Quiz from "./Quiz";
import Card from "./Card";
import styles from "./Wrapper.module.css";
import { DM_Serif_Text } from "next/font/google";

const dmSerif = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function Wrapper({ productData, data }) {
  const [step, setStep] = useState(7);

  useEffect(() => {
    if (step === 7) {
      window.scrollTo(0, 0);
    }
  }, [step]);
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
          <section className=" bg-matasBeige-200 rounded-md mx-2">
            <div className="flex justify-between px-4 py-10">
              <div>
                <h3 className={`${dmSerif.className} font-semibold text-xl md:text-2xl text-matasBlue-900`}>
                  Formål
                </h3>{" "}
                <div className="flex flex-wrap gap-2">
                  {ref.current.purpose.map((object, index) => (
                    <p
                      className="bg-matasBlue-900 text-matasWhite-900 p-2 rounded-full h-fit text-xs max-w-max mb-1"
                      key={index}
                    >
                      {object}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <h3 className={`${dmSerif.className} font-semibold text-xl md:text-2xl text-matasBlue-900`}>
                  Præferencer
                </h3>
                <p className="bg-matasBlue-900 text-matasWhite-900 p-2 rounded-full h-fit text-xs max-w-max mb-1">
                  {ref.current.important}
                </p>
              </div>
              <div>
                <h3 className={`${dmSerif.className} font-semibold text-xl md:text-2xl text-matasBlue-900`}>
                  Alder
                </h3>
                <p className="bg-matasBlue-900 text-matasWhite-900 p-2 rounded-full h-fit text-xs max-w-max mb-1">
                  {ref.current.age}
                </p>
              </div>
              <div>
                <h3 className={`${dmSerif.className} font-semibold text-xl md:text-2xl text-matasBlue-900`}>
                  Hudtype
                </h3>
                <p className="bg-matasBlue-900 text-matasWhite-900 p-2 rounded-full h-fit text-xs max-w-max mb-1">
                  {ref.current.skinType}
                </p>
              </div>
            </div>{" "}
            <div className="flex flex-col items-end">
              <h4 className="text-matasBlue-900 text-xs sm:text-base lg:text-base mr-4 ">
                <b>Optjen 5 point</b> hos club Matas
              </h4>
              <button className="py-2 px-8  text-matasBlue-900 ring-2 ring-matasBlue-900 rounded-md m-4 ">
                <p className="text-xs sm:text-base lg:text-base h-fit">
                  GEM DINE SVAR
                </p>
              </button>
            </div>
          </section>

          <h2 className={`${dmSerif.className} font-serif font-semibold mt-5 text-2xl sm:text-2xl md:text-3xl lg:text-3xl text-matasBlue-900`}>
            Dine Resultater{" "}
          </h2>
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
