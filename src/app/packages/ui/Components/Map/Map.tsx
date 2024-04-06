import { Box } from "@mantine/core";
import { PrinceHotelAccessMap } from "../IFrame/PrinceHotelAccessMap";
import { JinguAccessMap } from "../IFrame/JinguAccessMap";

export function Map() {
  return (
    <Box display={'flex'}>
      <Box w={'50%'}>
        札幌プリンスホテル
        <PrinceHotelAccessMap />
      </Box>
      <Box w={'50%'}>
        北海道神宮
        <JinguAccessMap />
      </Box>
    </Box>
  )
}
