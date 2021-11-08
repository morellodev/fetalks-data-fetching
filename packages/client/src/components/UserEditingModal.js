import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import UserEditingFormFields from "./UserEditingFormFields";

export default function UserEditingModal({
  user,
  onUserSaveAsync,
  ...modalProps
}) {
  const formMethods = useForm({ defaultValues: user });
  const [isSaving, setIsSaving] = useState(false);

  async function handleFormSubmit(values) {
    setIsSaving(true);

    try {
      await onUserSaveAsync(values);
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <Modal {...modalProps}>
      <ModalOverlay />
      <ModalContent top="5">
        <FormProvider {...formMethods}>
          <form onSubmit={formMethods.handleSubmit(handleFormSubmit)}>
            <ModalHeader>Edit User</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <UserEditingFormFields />
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={modalProps.onClose}>
                Close
              </Button>
              <Button colorScheme="blue" type="submit" isLoading={isSaving}>
                Save
              </Button>
            </ModalFooter>
          </form>
        </FormProvider>
      </ModalContent>
    </Modal>
  );
}
