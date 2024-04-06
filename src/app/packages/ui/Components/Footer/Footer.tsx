import { Text } from "@mantine/core"
import styles from "./Footer.module.css"

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Text fz={'md'} className={styles.copyright}>
        ©2024 Tanabata Wedding. All Rights Reserved.
        <br />
        <span style={{ display: 'block', textAlign: 'right' }}>
          Creator: Kojiro Kageyama,
        </span>
        <span style={{ display: 'block', textAlign: 'right' }}>
          Illustrator: Natsuki Sakadome
        </span>
      </Text>
    </footer>
  )
}
