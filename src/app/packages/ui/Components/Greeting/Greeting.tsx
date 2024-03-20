import styles from "./Greeting.module.css"

export function Greeting() {
  return (
    <div className={styles.container}>
      <div className={styles.titleBox}>
        <div className={styles.title}>
          - ご挨拶 -
        </div>
      </div>

      <div className={styles.description}>
        謹啓 清明の候皆様にはますますご清祥のこととお慶び申し上げます。<br />このたび 私たちは結婚式を挙げることになりました<br />つきましては 日ごろお世話になっている皆様に お集まりいただき<br />ささやかな披露宴を催したいと存じます<br />ご多用中 誠に恐縮ではございますが<br />ご来臨の栄を賜りたく 謹んでご案内申し上げます。
      </div>
    </div>
  )
}
