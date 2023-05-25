import Image from "next/image";
//project imports
import styles from "@/styles/plants-list.module.css";

export default function PlantsList({ plants }) {
  return (
    <div className={styles.plantsList}>
      {plants.map((plant) =>
        plant.image_url.includes("bs.plantnet.org") ? (
          <div className={styles.plantItem} key={plant.id}>
            <Image
              src={plant.image_url}
              width={300}
              height={200}
              alt={`Image of ${plant.common_name}`}
              className={styles.plantImg}
            />
            <div className={styles.plantContent}>
              <h3>{plant.common_name}</h3>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}
