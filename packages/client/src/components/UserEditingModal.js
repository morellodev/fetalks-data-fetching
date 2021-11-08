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

import UserEditingForm from "./UserEditingForm";

export default function UserEditingModal({ user, onUserSave, ...modalProps }) {
  const formMethods = useForm({ defaultValues: user });
  const [isSaving, setIsSaving] = useState(false);

  async function handleFormSubmit(values) {
    setIsSaving(true);

    try {
      await onUserSave(values);
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
              <UserEditingForm />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={modalProps.onClose}>
                Close
              </Button>
              <Button variant="ghost" type="submit" isLoading={isSaving}>
                Save
              </Button>
            </ModalFooter>
          </form>
        </FormProvider>
      </ModalContent>
    </Modal>
  );
}
