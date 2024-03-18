import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <Image
                src="/background.png"
                alt="Sakura"
                width={768}
                height={1344}
              /> */}
            </a>
          </div>
      </div>
      <div className={styles.lowerHero}>
        <div className={styles.description}>
          謹啓 清明の候皆様にはますますご清祥のこととお慶び申し上げます。<br />このたび 私たちは結婚式を挙げることになりました<br />つきましては 日ごろお世話になっている皆様に お集まりいただき<br />ささやかな披露宴を催したいと存じます<br />ご多用中 誠に恐縮ではございますが<br />ご来臨の栄を賜りたく 謹んでご案内申し上げます。
        </div>

        <div style={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            paddingTop: "56.25%",
        }}>

          {/* https://web-camp.io/magazine/archives/85020 */}
          <iframe
            loading='lazy'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.3867437549493!2d141.30521787671623!3d43.05433297113688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b29dcc4f0a893%3A0xec8de2355b66d708!2z5YyX5rW36YGT56We5a6u!5e0!3m2!1sja!2sjp!4v1710775231922!5m2!1sja!2sjp'
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>

      </div>
      <footer className={styles.footer}>
        <p className={styles.copyright}>© 2024 Tanabata Wedding. All Rights Reserved.</p>
      </footer>

    </main>
  );
}
