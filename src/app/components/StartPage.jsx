import Image from "next/image";

function StartPage() {
  return (
    <div className="grid grid-cols-2 bg-matasPink-700">
      <Image src="/model.webp" width={500} height={500} alt="Model picture" />
      <div>
        <p>FIND DIN FAVORIT</p>
        <h1>Hvilken dagcreme passer til dig?</h1>
        <button>Tag testen</button>
        <h4>
          <b>Optjen 5 point</b> hos club Matas
        </h4>
      </div>
    </div>
  );
}

export default StartPage;
