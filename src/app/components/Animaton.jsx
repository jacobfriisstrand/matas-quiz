"use client";
import lottie from "lottie-web";
import { createRef, useEffect } from "react";

export default function Home({ setStep }) {
  let animationContainer = createRef();

  useEffect(() => {
    const ani = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      duration: 6,
      path: "/animation/data.json",
    });

    return () => ani.destroy();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setStep(6);
    }, 6000);
  }, []);

  return (
    <main>
      <div ref={animationContainer} />
    </main>
  );
}
