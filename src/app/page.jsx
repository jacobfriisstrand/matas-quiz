import Quiz from "./components/Quiz";
import React from "react";
import Card from "./components/Card";
import EndPage from "./components/EndPage";

// Udkommenterring skal fjernes, hvis database skal opdateres.
// export const dynamic = "force-dynamic";

export default async function page() {
  // GET svarmuligheder fra Supabase
  const res = await fetch("https://largmqclsxkjplwlmtju.supabase.co/rest/v1/matas", {
    method: "GET",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhcmdtcWNsc3hranBsd2xtdGp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE3MTUxMTYsImV4cCI6MTk5NzI5MTExNn0.nJMcytnEAVfVxQa6ZbZ4OGAF076k-1FVgNDmH32XjVs",
    },
  });
  const data = await res.json();
  console.log(data);

  return (
    <main>
      <h1>Matas</h1>
      <section className="lg:flex lg:flex-wrap -mx-2 grid grid-cols-2">
        <div className="lg:w-1/3 px-2 flex items-end">
          <Card promotion="Spar 50%" src="dagcreme.avif" brand="matas" title="Dagcreme" price="599" />
        </div>
        <div className=" lg:w-1/3 px-2 flex items-end">
          <Card src="dagcreme.avif" brand="matas" title="Dagcreme" price="599" />
        </div>
        <div className="lg:w-1/3 px-2 row-start-3 lg:row-start-1 flex items-end">
          <Card promotion="200kr for club matas" src="dagcreme.avif" brand="matas" title="Dagcreme" price="599" />
        </div>
        <div className=" lg:col-span-1 col-span-2 md:w-full lg:w-2/3  px-2">
          <Quiz data={data} />
        </div>
        <div className="lg:w-1/3 px-2 flex items-end">
          <Card src="dagcreme.avif" brand="matas" title="Dagcreme" price="599" />
        </div>
      </section>
    </main>
  );
}
