import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import UsersList from "../components/UsersList";
import { jsonServerApi } from "../libs/jsonServerApi";

export default function HomePage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    jsonServerApi.url("/users").get().json().then(setUsers);
  }, []);

  return (
    <Box as="main" px={["6", null, "8"]} py="12" bg="gray.100" minH="100vh">
      <Box as="section" maxW={["xs", null, "3xl"]} mx="auto">
        <UsersList users={users} gap="6" columns={[1, null, 3]} />
      </Box>
    </Box>
  );
}
