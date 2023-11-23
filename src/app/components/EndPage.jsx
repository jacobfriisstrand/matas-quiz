import Image from "next/image";
import styles from "@/app/components/endpage.module.css";

function EndPage({ setStep }) {
  return (
    <div className="grid grid-cols-2 bg-matasPink-700 rounded-md overflow-hidden min-h-full ">
      <Image src="/model.webp" width={500} height={100} alt="Model picture" className="h-full object-cover" />
      <div className={`${styles.textContainer}`}>
        <div>
          <h2 className="text-matasBlue-900 text-xs sm:text-xl lg:text-base">DAGCREME</h2>
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-matasBlue-900 font-serif font-semibold mt-2 ">TIP</h1>
          <p className="max-w-[300px] mt-2 text-xs sm:text-base lg:text-base	">Hvis du gerne vil gøre noget ekstra for din hud, så brug en serum under din dagcreme i din hudplejerutine</p>
          <button
            onClick={() => {
              setStep((prevStep) => prevStep + 1);
              return;
            }}
            className="p-2 sm:p-3 text-matasWhite-900 bg-matasBlue-900 rounded-md mt-10 w-full"
          >
            <p className="text-xs sm:text-base lg:text-base">SE DIT RESULTAT</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EndPage;
