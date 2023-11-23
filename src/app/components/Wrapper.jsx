"use client";
import { useState, useRef, useEffect } from "react";
import Quiz from "./Quiz";
import Card from "./Card";
import styles from "./Wrapper.module.css";
import Image from "next/image";
import { DM_Serif_Text } from "next/font/google";

const dmSerif = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function Wrapper({ productData, data }) {
  const [step, setStep] = useState(0);

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
    <section className="mx-6">
      {step === 7 ? (
        <>
          <section className=" bg-matasBeige-200 rounded-md grid grid-cols-1 md:grid-cols-3 overflow-hidden">
            <div className="col-span-2 p-4 md:p-8 space-y-4">
              <div>
                <p className="text-matasBlue-900 text-xs sm:text-sm lg:text-base">
                  DAGCREME 
                </p>
                <h3
                  className={`${dmSerif.className} text-2xl md:text-3xl text-matasBlue-900 font-semibold`}
                >
                  Dine svar
                </h3>{" "}
              </div>
              <div className=" flex flex-wrap gap-2">
                {ref.current.purpose.map((object, index) => (
                  <p
                    className="bg-matasBlue-900 text-matasWhite-900 py-2 px-4 rounded-full h-fit text-xs max-w-max mb-1"
                    key={index}
                  >
                    {object}
                  </p>
                ))}

                <p className="bg-matasBlue-900 text-matasWhite-900 py-2 px-4 rounded-full h-fit text-xs max-w-max mb-1">
                  {ref.current.important}
                </p>

                <p className="bg-matasBlue-900 text-matasWhite-900 py-2 px-4 rounded-full h-fit text-xs max-w-max mb-1">
                  {ref.current.age}
                </p>

                <p className="bg-matasBlue-900 text-matasWhite-900 py-2 px-4 rounded-full h-fit text-xs max-w-max mb-1">
                  {ref.current.skinType}
                </p>
              </div>{" "}
              <h4 className="text-matasBlue-900 text-xs sm:text-base lg:text-base pt-2 md:pt-4">
                <b>Optjen 5 point</b> hos club Matas
              </h4>
              <button className="py-2 px-20  text-matasBlue-900 ring-2 ring-matasBlue-900 rounded-md w-full md:w-fit">
                <p className="text-xs sm:text-base lg:text-base h-fit">
                  GEM SVAR
                </p>
              </button>
            </div>
            <Image
              className="aspect-video w-full min-h-full object-center object-cover row-start-1 md:col-start-3"
              src="/model.webp"
              width={600}
              height={300}
              alt="Model picture"
            />
          </section>

          <h2
            className={`${dmSerif.className} font-serif font-semibold mt-8 text-2xl sm:text-2xl md:text-3xl lg:text-3xl text-matasBlue-900 mb-4`}
          >
            Resultater{" "}
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
