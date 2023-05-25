import Image from "next/image";
import { Sofia } from "next/font/google";
import { BsSearch } from "react-icons/bs";
//project imports
import styles from "./page.module.css";
import PlantsList from "@/components/PlantsList";
import PlantsService from "@/services/PlantsService";
import MainBg from "../../public/images/main-bg.jpeg";

const sofia = Sofia({ subsets: ["latin"], weight: ["400"] });

const EXAMPLE_MOST_SEARCHED_DATA = ["monstera", "cactus", "ROSE", "Potus"];

export default async function Home() {
  let plants;
  try {
    const { data } = await PlantsService.getPlants(1);
    plants = data.data;
  } catch (error) {
    console.log(error);
  }
  return (
    <main className={styles.main}>
      <div className={styles.headerContainer}>
        <Image
          src={MainBg}
          className={styles.headerImage}
          alt="Header Background Image"
        />
        <div className={`${styles.mainTitle} ${sofia.className}`}>
          <h2>Welcome to plants-app</h2>
          <h4>Here you can learn everything about plants!</h4>
        </div>
        <div className={styles.searchContainer}>
          <div className={styles.searchInputContainer}>
            <BsSearch size={20} className={styles.searchIcon} />
            <input
              placeholder="Find the plant you want..."
              className={styles.searchInput}
            />
          </div>
          <div className={styles.mostSearched}>
            {EXAMPLE_MOST_SEARCHED_DATA.map((plant) => (
              <p className={styles.searchedTag}>{plant.toLowerCase()}</p>
            ))}
          </div>
        </div>
      </div>
      <PlantsList plants={plants} />
    </main>
  );
}
