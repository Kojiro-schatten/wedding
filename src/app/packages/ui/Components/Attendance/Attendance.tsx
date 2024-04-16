import { Box, Tabs, TabsList, TabsPanel, TabsTab, Text, Title } from "@mantine/core";
import styles from "./Attendance.module.css"
import Link from "next/link";

export function Attendance() {
  return (
    <Box mb={30}>
      <Box c={"red.0"}  mb={16} ml={-17} mr={-17} h={60}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8}}
      >
        <Title order={3}>
          - 参列者様につきまして -
        </Title>
      </Box>
      <Box>
        <Title order={5}>お支度について</Title>
        <Box mb={16}>
          <Text fz={'md'}>
            基本的には、和装・洋装どちらでも問題ございません。
            <br />
            札幌の7月平均気温は日中で25°前後となります。
          </Text>
          <Box mt={4} pb={16}>
            <Closing />
          </Box>
        </Box>
        <Title order={5}>
          当日のスケジュール
        </Title>
        <Box mb={16}>
          <Text fz={'md'}>
            7/7
          </Text>
        </Box>
        <Title order={5}>
          結婚式次第・お食事会の詳細について
        </Title>
        <Box>
          <Link href={'/flow'} style={{ color: '#228be6', textDecoration: 'none' }}>
            <span style={{ borderBottom: '1px solid #228be6'}}>
              こちらより、ご確認ください
            </span>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

function Closing () {
  return (
    <Tabs color="teal" defaultValue="first">
      <TabsList>
        <TabsTab value="first"><Text fz={'md'}>両親</Text></TabsTab>
        <TabsTab value="second" color="blue"><Text fz={'md'}>友人</Text></TabsTab>
        <TabsTab value="third" color="yellow"><Text fz={'md'}>レンタル</Text></TabsTab>
      </TabsList>

      <TabsPanel value="first" pt="md" className={styles.tabsPanel}>
        <Text fz={'md'}>
          ・女性の場合、色留袖、アフタヌーンドレスなどが推奨されます。
          <br />
          ・男性の場合、着物、モーニングコートなどが推奨されます。
        </Text>
      </TabsPanel>

      <TabsPanel value="second" pt="md" className={styles.tabsPanelSecond}>
        <Text fz={'md'}>
          ・女性の場合、訪問着、ワンピース、ドレスなどが推奨されます。
          <br />
          ・男性の場合、着物、スーツなどが推奨されます。
        </Text>
      </TabsPanel>

      <TabsPanel value="third" pt="md" className={styles.tabsPanelThird}>
        <Text fz={'md'}>
          神宮での着付・貸衣裳は、うやまビューティサロン本店が近いためそちらをご利用ください。
        </Text>
        <Link href={'https://uyama.co.jp/'} style={{ color: '#228be6', textDecoration: 'none' }}>
          <span style={{ borderBottom: '1px solid #228be6' }}>
            https://uyama.co.jp/
          </span>
        </Link>
      </TabsPanel>
    </Tabs>
  )
}
