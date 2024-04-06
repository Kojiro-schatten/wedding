import { Box, Title } from "@mantine/core"
import styles from "./Profile.module.css"

export function Profile() {
  return (
    <Box mb={30}>
      <div className={styles.container}>
        <Box c={"red.0"}  mb={16} ml={-17} mr={-17} h={60}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8}}
        >
          <Title order={3}>
            - プロフィール -
          </Title>
        </Box>
        <div className={styles.description}>
          影山 康次郎
          1997/03/20 O型

        </div>
      </div>
    </Box>
  )
}
