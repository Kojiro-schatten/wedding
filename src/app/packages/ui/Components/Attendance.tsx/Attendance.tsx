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
          <Closing />
        </Box>
        <Title order={5}>
          当日のスケジュール
        </Title>
        <Box>
          <Text fz={'md'}>
            7/7
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

function Closing () {
  return (
    <Tabs color="teal" defaultValue="first">
      <TabsList>
        <TabsTab value="first">レンタル</TabsTab>
        <TabsTab value="second" color="blue">親族</TabsTab>
        <TabsTab value="third" color="yellow">友人</TabsTab>
      </TabsList>

      <TabsPanel value="first" pt="md" className={styles.tabsPanel}>
        <Text fz={'md'}>
          神宮での着付・貸衣裳では、うやまビューティサロン本店と近いです。
        </Text>
        <Link href={'https://uyama.co.jp/'}>https://uyama.co.jp/</Link>
      </TabsPanel>

      <TabsPanel value="second" pt="md" className={styles.tabsPanelSecond}>
        <Text fz={'md'}>
          ・女性の場合、喪服、ワンピース、ドレスなどが推奨されます。
          <br />
          ・男性の場合、喪服、燕尾服などが推奨されます。
        </Text>
      </TabsPanel>

      <TabsPanel value="third" pt="md" className={styles.tabsPanelThird}>
        <Text fz={'md'}>
          ・女性の場合、喪服、ワンピース、ドレスなどが推奨されます。
          <br />
          ・男性の場合、喪服、燕尾服などが推奨されます。
        </Text>
      </TabsPanel>
    </Tabs>
  )
}
