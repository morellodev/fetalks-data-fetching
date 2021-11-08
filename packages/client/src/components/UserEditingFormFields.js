import { FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

export default function UserEditingFormFields() {
  const { formState, register } = useFormContext();

  return (
    <VStack spacing="4">
      <FormControl isInvalid={formState.errors.avatar}>
        <FormLabel htmlFor="avatar">Avatar</FormLabel>
        <Input
          id="avatar"
          type="url"
          {...register("avatar", { pattern: /^https?:\/\/\S+$/ })}
        />
      </FormControl>

      <FormControl isInvalid={formState.errors.name}>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input id="name" {...register("name", { required: true })} />
      </FormControl>

      <FormControl isInvalid={formState.errors.jobTitle}>
        <FormLabel htmlFor="jobTitle">Job Title</FormLabel>
        <Input id="jobTitle" {...register("jobTitle", { required: true })} />
      </FormControl>

      <FormControl isInvalid={formState.errors.email}>
        <FormLabel htmlFor="email">E-mail</FormLabel>
        <Input
          id="email"
          type="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/ })}
        />
      </FormControl>

      <FormControl isInvalid={formState.errors.website}>
        <FormLabel htmlFor="website">Website</FormLabel>
        <Input
          id="website"
          type="url"
          {...register("website", {
            required: true,
            pattern: /^https?:\/\/\S+$/,
          })}
        />
      </FormControl>
    </VStack>
  );
}
