import Image from "next/image";
import styles from "./page.module.css";
import { Sakura } from "./packages/ui/Animation/Sakura";
import { Greeting } from "./packages/ui/Components/Greeting/Greeting";
import { Footer } from "./packages/ui/Components/Footer/Footer";
import { Profile } from "./packages/ui/Components/Profile/Profile";
import '@mantine/core/styles.css';
import { Map } from "./packages/ui/Components/Map/Map";
import { Attendance } from "./packages/ui/Components/Attendance/Attendance";
import Link from "next/link";
import { Button, PinInput } from "@mantine/core";
import { useEffect, useState } from "react";

export default function Home() {

  return (
    <main className={styles.main}>
      {/* <Sakura /> */}
      <div className={styles.heroContainer}>
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
      </div>

      <div className={styles.container}>
        <div className={styles.lowerHero}>
          <Greeting />
          <Profile />
          <Attendance />
          <Map />
        </div>
        <Footer />
      </div>
    </main>
  );
}
