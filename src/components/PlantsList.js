import Image from "next/image";
//project imports
import Utils from "@/helpers/Utils";
import styles from "@/styles/plants-list.module.css";

export default async function PlantsList({ plants }) {
  return (
    <div className={styles.plantsList}>
      {plants.map((plant) => {
        console.log(plant);
        const imgSrc = Utils.imageSrcFormatter(plant.image_url);
        const name = plant.common_name || plant.scientific_name;
        return (
          <div className={styles.plantItem} key={plant.id}>
            <Image
              src={imgSrc}
              width={300}
              height={200}
              alt={`Image of ${name}`}
              className={styles.plantImg}
            />
            <div className={styles.plantContent}>
              <h3>{name}</h3>
              <p>Family: {plant.family_common_name || "No information"}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
