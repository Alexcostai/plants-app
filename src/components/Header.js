import Link from "next/link";
import { TbPlant2 } from "react-icons/tb";
import { AiFillTag } from "react-icons/ai";
import { Playfair_Display } from "next/font/google";
//project imports
import styles from "@/styles/header.module.css";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <Link href={"/"} className={styles.navLink}>
          Home
        </Link>
        <Link
          href={"/"}
          className={`${styles.navLink} ${styles.navMainLink} ${playfair.className}`}
        >
          <TbPlant2 size={22} style={{ marginRight: 5 }} />
          plants-app
        </Link>
        <div>
          <AiFillTag size={22} />
        </div>
      </nav>
    </header>
  );
}
