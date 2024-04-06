import styles from "./flow.module.css";
import { Footer } from "../packages/ui/Components/Footer/Footer";
import '@mantine/core/styles.css';
import { Flow } from "../packages/ui/Components/Flow/Flow";

export default function flow() {
  return (
    <main className={styles.main}>
      <div className={styles.heroContainer}>
        <div className={styles.hero}>
        </div>
        <div className={styles.title}>
          挙式当日・式次第
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.lowerHero}>
          <Flow />
        </div>

        <Footer />
      </div>
    </main>
  )
}
