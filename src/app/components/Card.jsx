import Image from "next/image";

function Card({ promotion, src, brand, title, price }) {
  return (
    <article className="space-y-5 bg-white rounded-lg p-4 grid items-stretch">
      {promotion && <p className=" bg-red-600 w-fit p-1 rounded-md uppercase text-xs text-white ">{promotion} </p>}
      <div className="">
        <div className="">
          <Image src={`${src}`} className="aspect-square object-contain mx-auto" width={300} height={300} alt="product image" />
        </div>
      </div>
      <div>
        <p className="font-semibold">{brand}</p>
        <p>{title}</p>
      </div>
      <h3 className="text-lg">{price}</h3>
      <div className="flex gap-2 flex-row w-full">
        <button className="bg-cyan-950 text-white p-2 w-full rounded-md">Læg i kurv</button>
        <button className="bg-neutral-400 p-2">&#9825;</button>
      </div>
    </article>
  );
}

export default Card;
