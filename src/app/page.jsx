import Quiz from "./components/Quiz";
import React from "react";
import Card from "./components/Card";
import EndPage from "./components/EndPage";
import { promises as fs } from "fs";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import AnalyzingPage from "./components/AnalyzingPage";
import Wrapper from "./components/Wrapper";

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

  const file = await fs.readFile(process.cwd() + "/app/produkt.json", "utf8");

  const productData = JSON.parse(file);

  console.log(productData);

  return (
    <div>
      <NavBar />
      <main className="bg-matasEarth-500 row-start-2">
        <Wrapper data={data} productData={productData} />
      </main>
    </div>
  );
}
