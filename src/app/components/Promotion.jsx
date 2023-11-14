function Promotion(props) {
  return <div className="bg-red-600 w-fit p-1 rounded-md">{props.promotion && <p className="uppercase text-xs text-white ">{props.promotion} </p>}</div>;
}

export default Promotion;
