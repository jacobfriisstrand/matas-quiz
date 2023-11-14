import Promotion from "./Promotion";
import PImage from "./cardImage";
import PText from "./cardText";
import Purchase from "./Purchase";

function Card({ promotion, src, brand, title, price }) {
  return (
    <div className="p-4 bg-white rounded-md flex gap-4 flex-col">
      <Promotion promotion={promotion} />
      <PImage src={src} />
      <PText brand={brand} title={title} />
      <Purchase price={price}></Purchase>
    </div>
  );
}

export default Card;
