import { Box, Text, Title } from "@mantine/core"
import styles from "./Fee.module.css"

export function Fee() {
  return (
    <Box mb={30}>
      <Box c={"blue.0"}  mb={16} ml={-17} mr={-17} h={60}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8}}
      >
        <Title order={3}>
          - 会費 -
        </Title>
      </Box>

      <div className={styles.description}>
        北海道の結婚式は会費制が主流ではありますが、ご祝儀でも問題ございません。
        <br />
        ご理解賜りますようお願い申し上げます。
        <br />
        会費：２万円
        <br />
        <Text fz={'sx'}>
          ※お子様は会費がかかりませんので、ご了承くださいませ。
        </Text>
      </div>
    </Box>
  )
}
