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
        <div>
          <Image alt={'わたしたち'} width={700} height={500}
            src={'/we.jpg'}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className={styles.box}>
          <Box className={styles.profile}>

            {/* <Image alt={'pikachu'} width={240} height={240}
              src={'/Eevee.png'}
            /> */}
            <Text fz={'lg'}>
              影山 康次郎
              <Text fz={'md'}>
                1997/03/20 O型
              </Text>
              職業：Webエンジニア
              <br />
              僕のライフプランより、相当早いタイミングでの結婚式となりました。
              <br />
              結果的に主催して良かったと思えるよう努めます！
            </Text>
          </Box>

          <Box className={styles.profile}>
            {/* <Image alt={'pikachu'} width={240} height={240}
              src={'/pikachu.png'}
            /> */}
            <Text fz={'lg'}>
              影山 未来
              <Text fz={'md'}>
                1997/01/18 O型
              </Text>
              職業：美容師
              <br />
              晴れ舞台に向けて、日々準備中です。
              <br />
              当日、皆様にお会いできることを心より楽しみにしています。
            </Text>
          </Box>

        </div>
      </div>
    </Box>
  )
}
