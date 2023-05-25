import Link from "next/link";
import { Sofia } from "next/font/google";
import { TbPlant2 } from "react-icons/tb";
import { AiFillTag } from "react-icons/ai";
//project imports
import styles from "@/styles/header.module.css";

const sofia = Sofia({ subsets: ["latin"], weight: ["400"] });

export default function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <Link href={"/"} className={styles.navLink}>
          Home
        </Link>
        <Link
          href={"/"}
          className={`${styles.navLink} ${styles.navMainLink} ${sofia.className}`}
        >
          <TbPlant2 size={22} style={{ marginRight: 5 }} />
          plants-app
        </Link>
        <AiFillTag size={22} />
      </nav>
    </header>
  );
}
