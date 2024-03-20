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

      </div>
    </div>
  )
}
