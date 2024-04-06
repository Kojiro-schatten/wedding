import Image from "next/image";
import styles from "./page.module.css";
import { Sakura } from "./packages/ui/Animation/Sakura";
import { JinguAccessMap } from "./packages/ui/Components/IFrame/JinguAccessMap";
import { Greeting } from "./packages/ui/Components/Greeting/Greeting";
import { Footer } from "./packages/ui/Components/Footer/Footer";
import { PrinceHotelAccessMap } from "./packages/ui/Components/IFrame/PrinceHotelAccessMap";
import { Profile } from "./packages/ui/Components/Profile/Profile";
import '@mantine/core/styles.css';
import { Text, Title } from "@mantine/core";
import { Map } from "./packages/ui/Components/Map/Map";

export default function Home() {

  return (
    <main className={styles.main}>
      <Sakura />
      <Text fz="sm" lh="sm">sm 12px</Text>
      <Text fz="md" lh="md">md 14px</Text>
      <Text fz="lg" lh="lg">lg 16px</Text>
      <Title order={1}>h1 title</Title>
      <Title order={2}>h2 title</Title>
      <Title order={3}>h3 title</Title>

      {/* ヒーロー背景画像 */}
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
        <Map />
        {/* // <JinguAccessMap />
        // <div style={{ marginBottom: 40 }}>
        //   <PrinceHotelAccessMap />
        // </div> */}

      </div>

      <Footer />
    </main>
  );
}
