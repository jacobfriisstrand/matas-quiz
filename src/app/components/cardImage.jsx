function PImage(props) {
  return (
    <div className="flex justify-center items-center h-40">
      <div className="w-32  ">
        <img src={`src/app/assets/${props.src}`} className=" w-full" alt="product image" />
      </div>
    </div>
  );
}

export default PImage;
