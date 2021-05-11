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
import { useQuery } from 'react-query'

import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/Sidebar'

export default function UserList() {
  const { data, isLoading, error } = useQuery('users', async () => {
    const response = await fetch('http://localhost:3000/api/users')
    return response.json()
  })

  console.log(data)

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
            <Heading size='lg' fontWeight='normal'>Usuários</Heading>
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
                    <Tr w={340}>
                      <Td px={['3', '4', '6']}>
                        <Checkbox colorScheme='pink' />
                      </Td>
                      <Td>
                        <Box>
                          <Text fontWeight='bold'>Jardel Bordignon</Text>
                          <Text fontSize='sm' color='gray.300'>jardel1101@gmail.com</Text>
                        </Box>
                      </Td>
                      { isWideVersion && <Td>01 de Maio, 2021</Td> }
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
                  </Tbody>
                </Table>

                <Pagination />
              </>
            )
          }
          
        </Box>
      </Flex>
    </Box>
  )
}
