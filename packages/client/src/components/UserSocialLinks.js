import { HStack, Link, Stack } from "@chakra-ui/react";
import { FiLink, FiMail } from "react-icons/fi";

export default function UserSocialLinks({ email, website, ...stackProps }) {
  return (
    <Stack fontSize="sm" fontWeight="medium" color="blue.600" {...stackProps}>
      <HStack direction="row" align="center">
        <FiMail />
        <Link href={`mailto:${email}`}>{email}</Link>
      </HStack>
      <HStack direction="row" align="center">
        <FiLink />
        <Link href={website} isExternal>
          {website}
        </Link>
      </HStack>
    </Stack>
  );
}
