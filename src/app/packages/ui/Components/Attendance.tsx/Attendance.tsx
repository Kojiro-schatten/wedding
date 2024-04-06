import { Box, Title } from "@mantine/core";

export function Attendance() {
  return (
    <Box mb={30}>
      <Title order={3}>参列者様につきまして</Title>
      <Box>
        <Title order={4}>お支度について</Title>
        <Title order={4}>当日のスケジュール</Title>
      </Box>
    </Box>
  )
}
