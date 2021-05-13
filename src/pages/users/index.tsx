import { 
  Box, 
  Button, 
  Checkbox, 
  Flex, 
  Heading, 
  Icon, 
  Spinner, 
  Table, 
  Tbody, 
  Td, 
  Text, 
  Th, 
  Thead, 
  Tr, 
  useBreakpointValue} from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import Link from 'next/link'

import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/Sidebar'
import { useUsers } from '../../services/hooks/useUsers'

export default function UserList() {
  const { data, isLoading, error, isFetching } = useUsers()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />

      <Flex my='6' mx='auto' maxWidth={1480} px={['4', '6', '8']}>
        <Sidebar />

        <Box borderRadius={8} bg='gray.800' p={['4', '6', '8']} w='100%'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>
              Usuários
              { !isLoading && isFetching && 
                <Spinner size='sm' color='gray.500' ml='4' />
              } 
            </Heading>
            <Link href='/users/create' passHref>
              <Button
                as='a'
                size='sm' 
                fontSize='sm'
                colorScheme='pink'
                leftIcon={<Icon as={RiAddLine} fontSize='20' />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>
        
          { isLoading ? (
              <Flex justify='center'>
                <Spinner />
              </Flex>
            ) : error ? (
              <Flex justify='center'>
                <Text>Falha ao obter dados dos usuários.</Text>
              </Flex>
            ) : (
              <>
                <Table colorScheme='whiteAlpha' maxWidth='90vw'>
                  <Thead>
                    <Tr>
                      <Th px={['3', '4', '6']} color='gray.300' width='8'>
                        <Checkbox colorScheme='pink' />
                      </Th>
                      <Th>Usuários</Th>
                      { isWideVersion && <Th>Data de cadastro</Th> }
                      <Th px={['1', '4', '6']}>Opções</Th>
                    </Tr>
                  </Thead>

                  <Tbody>
                    {
                      data.map(user => (
                        <Tr w={340} key={user.id}>
                          <Td px={['3', '4', '6']}>
                            <Checkbox colorScheme='pink' />
                          </Td>
                          <Td>
                            <Box>
                              <Text fontWeight='bold'>{ user.name }</Text>
                              <Text fontSize='sm' color='gray.300'>{ user.email }</Text>
                            </Box>
                          </Td>
                          { isWideVersion && <Td>{ user.createdAt }</Td> }
                          <Td px={['1', '4', '6']}>
                            <Button
                              as='a'
                              size='sm' 
                              fontSize='sm'
                              colorScheme='purple'
                              leftIcon={isWideVersion ? <Icon as={RiPencilLine} fontSize='20' /> : null}
                            >
                              { isWideVersion ? 'Editar' : <Icon as={RiPencilLine} fontSize='20' /> }
                            </Button>
                          </Td>
                        </Tr>
                      ))
                    }
                  </Tbody>
                </Table>

                <Pagination
                  totalCountOfRegisters={50}
                  registersPerPage={5}
                  currentPage={5}
                  delta={1}
                  onPageChange={() => {}}
                />
              </>
            )
          }
          
        </Box>
      </Flex>
    </Box>
  )
}
