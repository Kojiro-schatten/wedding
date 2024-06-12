import { Badge, Box, Button, Card, CardSection, Group, Image, Text, Title } from "@mantine/core";
import { PrinceHotelAccessMap } from "../IFrame/PrinceHotelAccessMap";
import { JinguAccessMap } from "../IFrame/JinguAccessMap";
import Link from "next/link";

const PRINCE_HOTEL_LINK = "https://www.google.com/maps?ll=43.056033,141.340831&z=16&t=m&hl=ja&gl=JP&mapclient=embed&cid=1714590544399136141"
const JINGU_LINK = "https://www.google.com/maps?ll=43.054333,141.307793&z=17&t=m&hl=ja&gl=JP&mapclient=embed&cid=17045528883461805832"
export function Map() {
  return (
    <Box>
      <Box c={"blue.0"}  mb={16} ml={-17} mr={-17} h={60}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8}}
      >
        <Title order={3}>
          - アクセス -
        </Title>
      </Box>
      <Box w={70} ml={'auto'} mt={-70}>
        <Image src="/pikachuGif.gif" alt="Loading"></Image>
      </Box>

      <Box w={'100%'} mb={16}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <CardSection>
            <PrinceHotelAccessMap />
          </CardSection>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>札幌プリンスホテル</Text>
          </Group>

          <Text size="md" c="dimmed">
            地下鉄: 東西線 西11丁目駅 2番出口より
            <br />
            シャトルバス: 札幌駅北口バス乗り場から
          </Text>

          <Button href={PRINCE_HOTEL_LINK} target="_blank" component={Link} color="blue" fullWidth fz={'md'} mt="md" radius="md">
            Google マップを見る
          </Button>
        </Card>
      </Box>
      <Box w={'100%'}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <CardSection>
            <JinguAccessMap />
          </CardSection>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>北海道神宮</Text>
          </Group>

          <Text size="md" c="dimmed">
            ※ 7/7は、札幌プリンスホテルよりシャトルバスが出ます
          </Text>

          <Button href={JINGU_LINK} target="_blank" component={Link} color="blue" fullWidth fz={'md'} mt="md" radius="md">
            Google マップを見る
          </Button>
        </Card>
      </Box>
    </Box>
  )
}
