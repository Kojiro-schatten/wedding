import { Box, Tabs, TabsList, TabsPanel, TabsTab, Text, Title } from "@mantine/core";
import styles from "./Attendance.module.css"
import Link from "next/link";
import Image from "next/image";

export function Attendance() {
  return (
    <Box mb={30}>
      <Box c={"blue.0"}  mb={16} ml={-17} mr={-17} h={60}
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
        <Box mb={16}>
          <Box mt={16} ta={'center'}>
            <Image src={"/schedule.png"} alt="schedule" width={300} height={450} />
          </Box>
          {/* <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>時間</th>
                <th className={styles.th}>イベント</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td className={styles.td}>10:45</td>
                  <td className={styles.td}>プリンスホテル出発 (バス)</td>
              </tr>
              <tr>
                  <td className={styles.td}>12:00</td>
                  <td className={styles.td}>神前式 開始</td>
              </tr>
              <tr>
                  <td className={styles.td}>13:00</td>
                  <td className={styles.td}>神前式 終了</td>
              </tr>
              <tr>
                  <td className={styles.td}>14:00</td>
                  <td className={styles.td}>お食事会 開始</td>
              </tr>
              <tr>
                  <td className={styles.td}>16:30</td>
                  <td className={styles.td}>お食事会 終了</td>
              </tr>
            </tbody>
          </table> */}
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
        <TabsTab value="second" color="blue"><Text fz={'md'}>親族・友人</Text></TabsTab>
        {/* <TabsTab value="third" color="yellow"><Text fz={'md'}>レンタル</Text></TabsTab> */}
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
    </Tabs>
  )
}
