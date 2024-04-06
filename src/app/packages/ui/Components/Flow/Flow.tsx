import { Box, Text, Title } from "@mantine/core"
import styles from "./Flow.module.css"
import Image from "next/image"

export function Flow() {
  return (
    <Box mb={30}>
      <Box c={"red.0"} mb={16} h={60}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8}}
      >
        <Title order={3}>
          - 札幌神宮 -
        </Title>
      </Box>
      <Box mb={16}>
        <Text fz={'md'}>
          開始予定時刻：12:00
          <br />
          1 参進：巫女の先導により、新郎新婦・仲人夫妻・両家家族・両家親族の順に控室より本殿へ入場します。
          <br />
          2 着席：本殿内に入り、着席します。
          <br />
          3 修祓：一同起立して頭を下げ、お祓いを受けます。
          <br />
          4 祝詞奏上：神職が祝詞を奏上し、お二人の結婚を大神さまに奉告し、その行く末永い幸福を祈願します。
          <br />
          5 神楽：「神楽」を奉奏します。
          <br />
          6 誓盃の儀：三三九度の盃を交わします。
          <br />
          7 指輪の交換：大神さまが見守る中で、結婚指輪の交換をします。
          <br />
          8 誓詞奏上：新郎新婦が御神前に進み、一礼した後に奏上いたします。
          <br />
          9 玉串拝礼：玉串の根もとを御神前に向けてお供えし、「二礼・二拍手・一拝」の作法にて、新郎新婦・仲人夫妻・両家親族代表の順に拝礼いたします。
          <br />
          10 親族盃の儀：親族固めの盃、仲人（もしくは巫女）の発声にて一同そろって乾盃します。
          <br />
          11 斎主挨拶：斎主よりお祝いの言葉を申し上げます。
          <br />
          12 退下：参進の時と同様に並んで本殿を退出いたします。
        </Text>
      </Box>

      <Box c={"red.0"}  mb={16} h={60}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8}}
      >
        <Title order={3}>
          - お食事会 -
        </Title>
      </Box>
      <Box ta={'center'}>
        <Image alt="料理" width={280} height={240} src={'/meal.jpeg'} />
        <Text fz={'md'} ta={'left'}>
        開始予定時刻：14:00
          <br />
          コース料理となっております。コース内容は、当日までお楽しみください。
          <br />
          子ども用のコースは事前に確認をしております。
          <br />
          万が一、子ども用やマッシュ食などの希望連絡がいってない場合は、お手数ですがLINE等で連絡いただけると幸いです。
        </Text>
      </Box>
    </Box>
  )
}
