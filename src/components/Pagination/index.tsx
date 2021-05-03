import { Stack, Box } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

export function Pagination() {
  return (
    <Stack
      mt='8'
      spacing='6'
      justify='space-between'
      align='center'
      direction={['column', 'row']}
    >
      
      <Box>
        <strong>1</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <Stack spacing='2' direction='row'>
        <PaginationItem number={1} />
        <PaginationItem number={2} isCurrent />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
        <PaginationItem number={5} />
        <PaginationItem number={6} />
      </Stack>
    </Stack>
  )
}
