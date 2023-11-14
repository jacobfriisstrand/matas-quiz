import Image from "next/image";

function Card({ promotion, src, brand, title, price }) {
  return (
    <section className="p-4 bg-white rounded-md flex gap-4 flex-col">
      <div className="bg-red-600 w-fit p-1 rounded-md">{promotion && <p className="uppercase text-xs text-white ">{promotion} </p>}</div>
      <div className="flex justify-center items-center h-40">
        <div className="w-32  ">
          <Image src={`src/app/assets/${src}`} className=" w-full" alt="product image" />
        </div>
      </div>
      <div>
        <p className="font-semibold">{brand}</p>
        <p>{title}</p>
      </div>
      <h3 className="text-lg">{price} kr.</h3>
      <div className="flex gap-2 flex-row w-full">
        <button className="bg-cyan-950 text-white p-2 w-full rounded-md">Læg i kurv</button>
        <button className="bg-neutral-400 p-2">&#9825;</button>
      </div>
    </section>
  );
}

export default Card;
