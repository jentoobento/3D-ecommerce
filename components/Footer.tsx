import { Center, Flex, Text } from '@chakra-ui/layout';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Center as="footer" mt="auto" py={4}>
      <Flex flexDirection="column" alignItems="center">
        <Text>Footer</Text>
      </Flex>
    </Center>
  );
}
