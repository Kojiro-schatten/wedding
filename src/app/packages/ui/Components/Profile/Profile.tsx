import { Box, Text, Title } from "@mantine/core"
import styles from "./Profile.module.css"
import Image from "next/image"

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
        <div className={styles.box}>
          <Box style={{ borderRadius: 8 }}>
            <Image alt={'pikachu'} width={200} height={200}
              src={'/Eevee.png'}
            />
            <Text fz={'lg'}>
              影山 康次郎
              <br />
              1997/03/20 O型
            </Text>
          </Box>

          <Box style={{ borderRadius: 8 }}>
            <Image alt={'pikachu'} width={200} height={200}
              src={'/pikachu.png'}
            />
            <Text fz={'lg'}>
              影山 未来
              <br />
              1997/01/18 O型
            </Text>
          </Box>

        </div>
      </div>
    </Box>
  )
}
