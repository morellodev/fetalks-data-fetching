import { SimpleGrid } from "@chakra-ui/react";

import UserCard from "./UserCard";

export default function UsersList({ users, ...gridProps }) {
  return (
    <SimpleGrid {...gridProps}>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </SimpleGrid>
  );
}
