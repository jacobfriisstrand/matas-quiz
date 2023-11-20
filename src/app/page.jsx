import Quiz from "./components/Quiz";
import React from "react";
import Card from "./components/Card";
import EndPage from "./components/EndPage";
import { promises as fs } from "fs";

// Udkommenterring skal fjernes, hvis database skal opdateres.
export const dynamic = "force-dynamic";

export default async function page() {
  // GET svarmuligheder fra Supabase
  const res = await fetch("https://largmqclsxkjplwlmtju.supabase.co/rest/v1/matas", {
    method: "GET",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhcmdtcWNsc3hranBsd2xtdGp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE3MTUxMTYsImV4cCI6MTk5NzI5MTExNn0.nJMcytnEAVfVxQa6ZbZ4OGAF076k-1FVgNDmH32XjVs",
    },
  });
  const data = await res.json();

  const file = await fs.readFile(process.cwd() + "/public/produkt.json", "utf8");
  const productData = JSON.parse(file);

  console.log(productData);

  return (
    <main className="bg-matasEarth-500">
      <section className="grid md:grid-cols-3 lg:grid-cols-4 gap-10">
        <div className="col-span-2 row-start-2">
          <Quiz data={data} />
        </div>
        {productData.map((product) => (
          <div key={product.id}>
            <Card src={product.image} brand={product.brand} title={product.name} price={product.price} />
          </div>
        ))}
      </section>
    </main>
  );
}
