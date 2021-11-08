import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

import UserDetails from "../components/UserDetails";
import UserEditingModal from "../components/UserEditingModal";
import { jsonServerApi } from "../libs/jsonServerApi";

export default function UserPage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [showEditingModal, setShowEditingModal] = useState(false);

  const { data: user } = useQuery(
    ["users", router.query.userId],
    () => jsonServerApi.url(`/users/${router.query.userId}`).get().json(),
    { enabled: !!router.query.userId }
  );

  const userMutation = useMutation(
    ({ user }) => jsonServerApi.url(`/users/${user.id}`).put(user).json(),
    {
      onSuccess: (data, { user }) => {
        queryClient.setQueryData(["users", user.id], data);
        setShowEditingModal(false);
      },
    }
  );

  return (
    <Box as="section" pt="20" pb="12" pos="relative" bg="gray.100" minH="100vh">
      <Box
        pos="absolute"
        inset="0px"
        h="32"
        bgGradient="linear(to-b, blue.600, cyan.600)"
      />

      {user && (
        <UserDetails
          user={user}
          onEditClicked={() => setShowEditingModal(true)}
        />
      )}

      {user && (
        <UserEditingModal
          user={user}
          isOpen={showEditingModal}
          size="xl"
          onClose={() => setShowEditingModal(false)}
          onUserSaveAsync={(user) => userMutation.mutateAsync({ user })}
        />
      )}
    </Box>
  );
}
