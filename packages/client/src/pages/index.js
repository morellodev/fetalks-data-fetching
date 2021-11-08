import { Box } from "@chakra-ui/react";
import { useQuery } from "react-query";

import UsersList from "../components/UsersList";
import { jsonServerApi } from "../libs/jsonServerApi";

export default function HomePage() {
  const { data: users } = useQuery("users", () =>
    jsonServerApi.url("/users").get().json()
  );

  return (
    <Box as="main" px={["6", null, "8"]} py="12" bg="gray.100" minH="100vh">
      <Box as="section" maxW={["xs", null, "3xl"]} mx="auto">
        {users && <UsersList users={users} gap="6" columns={[1, null, 3]} />}
      </Box>
    </Box>
  );
}
