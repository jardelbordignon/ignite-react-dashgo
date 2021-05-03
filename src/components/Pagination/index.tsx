import { HStack, Button, Box } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

export function Pagination() {
  return (
    <HStack
      mt='8'
      spacing='6'
      justify='space-between'
      align='center'
    >
      
      <Box>
        <strong>1</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <HStack spacing='2'>
        <PaginationItem number={1} />
        <PaginationItem number={2} isCurrent />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
        <PaginationItem number={5} />
        <PaginationItem number={6} />
      </HStack>
    </HStack>
  )
}