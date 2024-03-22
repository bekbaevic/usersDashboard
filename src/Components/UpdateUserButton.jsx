import {
  Box,
  Button,
  Drawer,
  Group,
  Loader,
  Text,
  TextInput,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { useForm } from "@mantine/form";
import { useMutation, useQueryClient } from "react-query";
import { updateUser } from "../queries/queries";
const UpdateUserButton = ({ item }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const QueryClient = useQueryClient();
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
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

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: () => updateUser(item.id, form.values),
    onSuccess: async () => {
      await QueryClient.invalidateQueries(["users"]),
        close(),
        form.setValues({
          name: "",
          email: "",
          avatar: "",
        });
    },
  });

  function setData(e, item) {
    e.preventDefault();
    open();
    form.setValues({
      name: item.name,
      email: item.email,
      avatar: item.avatar,
    });
  }

  return (
    <div>
      {item.id !== 1 && item.id !== 2 && item.id !== 3 ? (
        <Button size="xs" onClick={(e) => setData(e, item)}>
          <BiSolidEdit size={"18px"} />
        </Button>
      ) : (
        <Button size="xs" disabled>
          <BiSolidEdit size={"18px"} />
        </Button>
      )}
      <Drawer opened={opened} onClose={close}>
        <Box>
          <Box>
            <Text fw={700} size="24px" mb={"20px"} ta={"center"}>
              Update data
            </Text>
            <TextInput
              onChange={(e) => form.setValues({ name: e.target.value })}
              value={form.values.name}
              label="Name"
            />
            <TextInput
              onChange={(e) => form.setValues({ email: e.target.value })}
              value={form.values.email}
              label="Email"
            />
            <TextInput
              onChange={(e) => form.setValues({ avatar: e.target.value })}
              value={form.values.avatar}
              label="Avatar"
            />
            <Group mt={"10px"} display={"flex"} justify="end">
              <Button onClick={() => mutate(item.id, form.values)}>
                {isLoading ? (
                  <Loader color="white" size="sm" type="dots" />
                ) : (
                  "Update"
                )}
              </Button>
              <Button bg={"red"} onClick={close}>
                Cancel
              </Button>
            </Group>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
};

export default UpdateUserButton;
