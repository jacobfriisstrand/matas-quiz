"use client";
import lottie from "lottie-web";
import { createRef, useEffect } from "react";

export default function Home() {
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
  });

  return (
    <main>
      <div ref={animationContainer} />
    </main>
  );
}
