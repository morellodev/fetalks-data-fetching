import { Box } from "@chakra-ui/react";

import UsersList from "../components/UsersList";
import { useQuery } from "../hooks/useQuery";
import { jsonServerApi } from "../libs/jsonServerApi";

const fetchUsers = () => jsonServerApi.url("/users").get().json();

export default function HomePage() {
  const { data: users } = useQuery(fetchUsers);

  return (
    <Box as="main" px={["6", null, "8"]} py="12" bg="gray.100" minH="100vh">
      <Box as="section" maxW={["xs", null, "3xl"]} mx="auto">
        {users && <UsersList users={users} gap="6" columns={[1, null, 3]} />}
      </Box>
    </Box>
  );
}
