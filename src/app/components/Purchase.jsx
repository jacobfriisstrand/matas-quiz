function Purchase(props) {
  return (
    <div>
      <h3 className="text-lg">{props.price} kr.</h3>
      <div className="flex gap-2 flex-row w-full">
        <button className="bg-cyan-950 text-white p-2 w-full rounded-md">Læg i kurv</button>
        <button className="bg-neutral-400 p-2">&#9825;</button>
      </div>
    </div>
  );
}

export default Purchase;
