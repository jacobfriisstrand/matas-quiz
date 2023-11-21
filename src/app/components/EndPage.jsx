import Image from "next/image";
import styles from "@/app/components/endpage.module.css";

function EndPage() {
  return (
    <div className="grid grid-cols-2 bg-matasPink-700 rounded-lg overflow-hidden gap-4 h-full">
      <Image src="/model.webp" width={500} height={800} alt="Model picture" className="aspect-[9/13.6] h-full object-cover" />
      <div className={`${styles.textContainer}`}>
        <div>
          <h2 className="text-matasBlue-900 ">DAGCREME</h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-matasBlue-900 font-serif font-semibold">TIP</h1>
          <p className="max-w-[300px] mt-2	">Hvis du gerne vil gøre noget ekstra for din hud, så brug en serum under din dagcreme i din hudplejerutine</p>
          <button className={`${styles.button}`}>SE DIT RESULTAT</button>
        </div>
      </div>
    </div>
  );
}

export default EndPage;
