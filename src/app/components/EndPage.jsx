import Image from "next/image";
import styles from "@/app/components/endpage.module.css"

function EndPage() {
  return (
    <div className="grid grid-cols-2 bg-matasPink-700">
      <Image src="/model.webp" width={500} height={500} alt="Model picture" />
      <div className={`${styles.textContainer}`}>
        <h2>DAGCREME</h2>
        <h1>TIP</h1>
        <p>
          Hvis du gerne vil gøre noget ekstra for din hud, så brug en serum
          under din dagcreme i din hudplejerutine
        </p>
        <button className={`${styles.button}`}>SE DIT RESULTAT</button>
      </div>
    </div>
  );
}

export default EndPage;
