import { Flex } from '@chakra-ui/react'

import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

export default function DashBoard() {
  return (
    <Flex direction='column' h='100vh'>
      <Header />
      
      <Flex w='100%' my='6' mx='auto' maxWidth={1480} px='6'>
        <Sidebar />
      </Flex>
    </Flex>
  )
}