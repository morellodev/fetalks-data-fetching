import { Container } from "@chakra-ui/react";

export default function ContainerLayout({ children }) {
  return (
    <Container as="main" maxW="container.md">
      {children}
    </Container>
  );
}
