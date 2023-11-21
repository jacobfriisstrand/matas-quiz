import Image from "next/image";
import styles from "./Card.module.css";

function Card({ promotion, src, brand, title, price }) {
  return (
    <article className={styles.card}>
      <Image src={`${src}`} className="aspect-square object-contain mx-auto" width={300} height={300} alt="product image" />
        <p className="font-semibold">{brand}</p>
        <p>{title}</p>
      <h3 className="text-lg">{price}</h3>
      <div className="flex gap-2 flex-row w-full">
        <button className="bg-matasBlue-900 text-white p-2 w-full rounded-md">Læg i kurv</button>
        <button className="bg-matasEarth-500 p-2 rounded-md w-10 aspect-square">&#9825;</button>
      </div>
    </article>
  );
}

export default Card;
