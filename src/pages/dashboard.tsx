import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { theme } from '../styles/theme';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const options = {
  chart: {
    toolbar: { show: false },
    zoom: { enabled: false },
    foreColor: theme.colors.gray[500]
  },
  grid: { show: false },
  dataLabels: { enabled: false },
  tooltip: { enabled: false },
  xaxis: {
    type: 'datetime',
    axisBorder: { color: theme.colors.gray[600] },
    axisTicks: { color: theme.colors.gray[600] },
    categories: [
      '2021-04-24T00:00:00.000Z',
      '2021-04-25T00:00:00.000Z',
      '2021-04-26T00:00:00.000Z',
      '2021-04-27T00:00:00.000Z',
      '2021-04-28T00:00:00.000Z',
      '2021-04-29T00:00:00.000Z',
      '2021-04-30T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
}

const series = [
  { name: 'series1', data: [31, 110, 20, 30, 62, 22, 80]}
]

export default function DashBoard() {
  return (
    <Flex direction='column' h='100vh'>
      <Header />
      
      <Flex w='100%' my='6' mx='auto' maxWidth={1480} px='6'>
        <Sidebar />

        <SimpleGrid flex='1' gap='4' minChildWidth='320px' align='flex-start'>
          <Box
            p='8'
            bg='gray.800'
            borderRadius={8}
            pb='1'
          >
            <Text fontSize='lg' mb='4'>Inscritos da semana</Text>
            <Chart
              type='area'
              height={160}
              options={options}
              series={series}
            />
          </Box>

          <Box
            p='8'
            bg='gray.800'
            borderRadius={8}
          >
            <Text fontSize='lg' mb='4'>Taxa de abertura</Text>
            <Chart
              type='area'
              height={160}
              options={options}
              series={series}
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
