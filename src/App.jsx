import { useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import ProductCard from "./components/ProductCard";

function App() {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products",
  );

  if (loading)
    return (
      <div className="bg-white p-5 border border-zinc-300 rounded-2xl text-center max-w-sm mx-auto my-20">
        <p className="text-xl text-green-500 font-bold">Loading data...</p>
      </div>
    );

  if (error || !data.length)
    return (
      <div className="bg-white p-5 border border-zinc-300 rounded-2xl text-center max-w-sm mx-auto my-20">
        <p className="text-xl text-red-500 font-bold">Error: {error || "Something went wrong!"}</p>
      </div>
    );
  return (
    <>
      <div className="">
        <h1 className="text-3xl text-white text-center font-bold p-10 md:sticky top-0 bg-zinc-800">
          Products Fetched Using Custom Hook `useFetch`
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-10 container mx-auto">
          {data.map((prod) => (
            <ProductCard key={prod.id} prod={prod} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
