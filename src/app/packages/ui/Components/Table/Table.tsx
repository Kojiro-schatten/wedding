import { Box, Text, Title } from "@mantine/core"
import styles from "./Fee.module.css"
import Image from "next/image"

export function Table() {
  return (
    <Box mb={30}>
      <Box c={"blue.0"}  mb={16} ml={-17} mr={-17} h={60}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8}}
      >
        <Title order={3}>
          - お食事会 席次 -
        </Title>
      </Box>

      <Box maw={700}>
        <Image src={"/sekizi.png"} alt="sekizi" width={700} height={350} />

      </Box>
    </Box>
  )
}
