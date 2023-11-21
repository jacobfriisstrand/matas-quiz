"use client";
import lottie from "lottie-web";
import { createRef, useEffect } from "react";

export default function Home({ setStep }) {
  let animationContainer = createRef();

  useEffect(() => {
    const ani = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/animation/data.json",
    });

    return () => ani.destroy();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setStep(6);
    }, 4500);
  }, []);

  return (
    <main>
      <div ref={animationContainer} />
    </main>
  );
}
