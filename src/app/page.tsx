import Image from "next/image";
import styles from "./page.module.css";
import { Sakura } from "./packages/ui/Animation/Sakura";
import { JinguAccessMap } from "./packages/ui/Components/IFrame/JinguAccessMap";
import { Greeting } from "./packages/ui/Components/Greeting/Greeting";
import { Footer } from "./packages/ui/Components/Footer/Footer";
import { PrinceHotelAccessMap } from "./packages/ui/Components/IFrame/PrinceHotelAccessMap";
import { Profile } from "./packages/ui/Components/Profile/Profile";
import '@mantine/core/styles.css';

export default function Home() {

  return (
    <main className={styles.main}>
      <Sakura />
      <div className={styles.hero}>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </div>
      </div>

      <div className={styles.lowerHero}>
        <Greeting />
        <Profile />
        <JinguAccessMap />
        <div style={{ marginBottom: 40 }}>
          <PrinceHotelAccessMap />
        </div>

      </div>

      <Footer />
    </main>
  );
}
