import {
  Box,
  Button,
  Drawer,
  Group,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { createUser, updateUser } from "../queries/queries";

export const CreateComponent = ({ opened, onClose }) => {
  const QueryClient = useQueryClient();

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      avatar: "",
    },
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 4 ? "Name must have at least 4 letters" : null,
    },
  });

  const { mutate } = useMutation({
    mutationFn: () => createUser(form.values),
    onSettled: async () => {
      await QueryClient.invalidateQueries(["users"]);
    },
  });

  function createUserFunc() {
    console.log(form.values);
    mutate();
    form.setValues({
      name: "",
      email: "",
      password: "",
      avatar: "",
    });
    onClose();
  }

  return (
    <Drawer opened={opened} onClose={onClose}>
      <Box>
        <Box>
          <form onSubmit={form.onSubmit(() => createUserFunc())}>
            <Text fw={700} size="24px" mb={"20px"} ta={"center"}>
              Create new user
            </Text>
            <TextInput required label="Name" {...form.getInputProps("name")} />
            <TextInput
              required
              label="Email"
              {...form.getInputProps("email")}
            />
            <PasswordInput
              required
              minLength={4}
              label="Password"
              {...form.getInputProps("password")}
              placeholder="min length 4"
            />
            <TextInput
              required
              label="Avatar"
              {...form.getInputProps("avatar")}
            />
            <Group mt={"10px"} display={"flex"} justify="end">
              <Button type="submit">Create</Button>
              <Button bg={"red"} onClick={onClose}>
                Cancel
              </Button>
            </Group>
          </form>
        </Box>
      </Box>
    </Drawer>
  );
};

export const UpdateComponent = ({ opened, onClose, selectedItem }) => {
  const { mutate } = useMutation({
    mutationFn: (newDate) => updateUser(selectedItem.id, newDate),
  });
  return (
    <Drawer opened={opened} onClose={onClose}>
      <Box>
        <Box>
          <Text fw={700} size="24px" mb={"20px"} ta={"center"}>
            Update data
          </Text>
          <TextInput label="Name" />
          <TextInput label="Email" />
          <TextInput label="Avatar" />
          <Group mt={"10px"} display={"flex"} justify="end">
            <Button>Update</Button>
            <Button bg={"red"} onClick={onClose}>
              Cancel
            </Button>
          </Group>
        </Box>
      </Box>
    </Drawer>
  );
};
