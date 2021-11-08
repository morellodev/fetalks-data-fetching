import { Avatar, Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { FiEdit } from "react-icons/fi";

import UserSocialLinks from "./UserSocialLinks";

export default function UserDetails({ user, onEditClicked }) {
  return (
    <Flex
      direction="column"
      pos="relative"
      maxW="xl"
      mx="auto"
      px={["6", null, "8"]}
      pb={["6", null, "8"]}
      align={[null, "center"]}
      shadow={[null, "base"]}
      bg="white"
      rounded={[null, "lg"]}
    >
      <Avatar
        size="2xl"
        mt="-10"
        showBorder
        borderWidth="6px"
        bg="blue.600"
        color="white"
        name={user.name}
        src={user.avatar}
      />
      <Box pos="absolute" top="4" right={["6", null, "8"]}>
        <Button leftIcon={<FiEdit />} size="sm" onClick={onEditClicked}>
          Edit
        </Button>
      </Box>

      <Box pt="2" textAlign={[null, "center"]}>
        <Heading
          fontSize={["2xl", null, "3xl"]}
          fontWeight="extrabold"
          lineHeight={[1.33, null, 1.2]}
          letterSpacing="tight"
        >
          {user.name}
        </Heading>
        <Text color="gray.500">{user.jobTitle}</Text>
      </Box>

      <UserSocialLinks
        email={user.email}
        website={user.website}
        direction={["column", "row"]}
        spacing={["1", "6"]}
        mt="4"
      />
    </Flex>
  );
}
