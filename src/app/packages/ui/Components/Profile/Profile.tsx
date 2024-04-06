import styles from "./Profile.module.css"

export function Profile() {
  return (
    <div style={{ marginBottom: 40 }}>
      <div className={styles.container}>
        <div className={styles.titleBox}>
          <div className={styles.title}>
            - プロフィール -
          </div>
        </div>
        <div className={styles.description}>
          影山 康次郎
          1997/03/20 O型

        </div>
      </div>
    </div>
  )
}
