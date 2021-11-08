import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";

import UserDetails from "../components/UserDetails";
import UserEditingModal from "../components/UserEditingModal";
import { useQuery } from "../hooks/useQuery";
import { jsonServerApi } from "../libs/jsonServerApi";

export default function UserPage() {
  const router = useRouter();
  const [showEditingModal, setShowEditingModal] = useState(false);

  const fetchUser = useCallback(
    async () => jsonServerApi.url(`/users/${router.query.userId}`).get().json(),
    [router.query.userId]
  );

  const { data: user } = useQuery(fetchUser, {
    enabled: !!router.query.userId,
  });

  async function handleUserSave(user) {
    try {
      await jsonServerApi
        .url(`/users/${router.query.userId}`)
        .put(user)
        .json()
        .then(setUser);
    } finally {
      setShowEditingModal(false);
    }
  }

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
          onUserSaveAsync={handleUserSave}
        />
      )}
    </Box>
  );
}
