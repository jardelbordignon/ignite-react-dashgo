import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return(
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Jardel Bordignon</Text>
        <Text color='gray.300' fontSize='small'>jardel1101@gmail.com</Text>
      </Box>

      <Avatar size='md' name='Jardel Bordignon' src='https://github.com/jardelbordignon.png' />
    </Flex>
  )
}
