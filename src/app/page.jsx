import React from "react";
import Card from "./components/Card";

function page() {
  return (
    <div className="grid grid-cols-4 px-24 bg-stone-200 min-h-screen">
      <section className=""></section>
      <Card promotion="Spar 20% | Abonnér" src="dagcreme.avif" brand="Beaté Pacifique" title="Paradoxe Anti-Age Dagcreme 50 ml" price="499" />
      <Card promotion="Spar 20% | Abonnér" src="dagcreme.avif" brand="Beaté Pacifique" title="Paradoxe Anti-Age Dagcreme 50 ml" price="499" />
      <Card promotion="Spar 20% | Abonnér" src="dagcreme.avif" brand="Beaté Pacifique" title="Paradoxe Anti-Age Dagcreme 50 ml" price="499" />
    </div>
  );
}

export default page;
