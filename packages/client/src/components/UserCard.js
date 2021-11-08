import { Avatar, Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";

export default function UserCard({ user }) {
  return (
    <Flex
      direction="column"
      align="center"
      p="8"
      rounded="md"
      shadow="base"
      bg="white"
      pos="relative"
    >
      <Box
        pos="absolute"
        inset="0px"
        h="20"
        bgGradient="linear(to-b, blue.600, cyan.600)"
        borderTopLeftRadius="inherit"
        borderTopRightRadius="inherit"
      />

      <Avatar
        size="xl"
        bg="white"
        color="blue.600"
        name={user.name}
        src={user.avatar}
      />

      <VStack mt="3" spacing="1" flex="1 1 0%">
        <Text fontWeight="bold">{user.name}</Text>
        <Text color="gray.600" fontSize="sm" align="center">
          {user.jobTitle}
        </Text>
      </VStack>

      <NextLink href={`/${user.id}`} passHref>
        <Button
          as="a"
          w="full"
          variant="outline"
          rounded="full"
          colorScheme="blue"
          fontWeight="semibold"
          size="sm"
          mt="8"
        >
          View Profile
        </Button>
      </NextLink>
    </Flex>
  );
}
