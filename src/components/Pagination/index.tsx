import { Stack, Box, Text } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

interface PaginationProps {
  totalCountOfRegisters: number
  registersPerPage?: number
  currentPage?: number
  delta?: number
  onPageChange: (page: number) => void
}

// generatePagesArray(2, 5) => [3, 4, 5]
function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => (from + index + 1))
    .filter(page => page > 0)
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 5,
  currentPage = 1,
  delta = 1,
  onPageChange,
}: PaginationProps) {

  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage)
  
  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - delta, currentPage - 1)
    : []

  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + delta, lastPage))
    : []

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

      { lastPage >= 2 && (
        <Stack spacing='2' direction='row'>

          { currentPage > delta + 1 && (
            <>
              <PaginationItem number={1} />
              { currentPage > delta + 2 && (
                delta > 0 && currentPage === delta + 3
                ? <PaginationItem number={2} />
                : <Text color='gray.300'>...</Text>
              )}
            </>
          )}

          { !!previousPages.length && previousPages.map(page => (
            <PaginationItem number={page} key={page} />
          ))}

          <PaginationItem number={currentPage} isCurrent />

          { !!nextPages.length && nextPages.map(page => (
            <PaginationItem number={page} key={page} />
          ))}

          { currentPage + delta < lastPage && (
            <>
              { currentPage + delta + 1 < lastPage && (
                delta > 0 && currentPage + delta + 2 === lastPage
                ? <PaginationItem number={lastPage - 1} />
                : <Text color='gray.300'>...</Text>
              )} 
              <PaginationItem number={lastPage} />
            </>
          )}

        </Stack>
      )}
    </Stack>
  )
}
