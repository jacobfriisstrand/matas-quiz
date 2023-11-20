import Image from "next/image";
import styles from "@/app/components/endpage.module.css"

function EndPage() {
  return (
    <div className="grid grid-cols-2 bg-matasPink-700 rounded-lg m-3">
      <Image src="/model.webp" width={500} height={500} alt="Model picture" />
      <div className={`${styles.textContainer}`}>
        <div>
          <h2 className="text-matasBlue-900 text-xs sm:text-base lg:text-xl">
            DAGCREME
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-matasBlue-900 font-serif font-semibold">
            TIP
          </h1>
          <p className="max-w-[300px] mt-2 text-xs sm:text-base lg:text-xl">
            Hvis du gerne vil gøre noget ekstra for din hud, så brug en serum
            under din dagcreme i din hudplejerutine
          </p>
          <button className={`${styles.button}`}>
            <p className="text-xs sm:text-base lg:text-xl">SE DIT RESULTAT</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EndPage;
