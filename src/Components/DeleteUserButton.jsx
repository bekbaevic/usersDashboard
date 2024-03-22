import { Button, Group, Loader, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MdDeleteOutline } from "react-icons/md";
import { useMutation, useQueryClient } from "react-query";
import { deleteUser } from "../queries/queries";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const DeleteUserButton = ({ item }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const QueryClient = useQueryClient();
  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: () => deleteUser(selectedItem.id),
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      {item.id !== 1 && item.id !== 2 && item.id !== 3 ? (
        <Button
          size="xs"
          onClick={() => (open(), setSelectedItem(item))}
          bg={"red"}
        >
          <MdDeleteOutline size={"18px"} />
        </Button>
      ) : (
        <Button size="xs" disabled>
          <MdDeleteOutline size={"18px"} />
        </Button>
      )}
      <Modal opened={opened} onClose={close} centered>
        <Text ta={"center"} mb={"30px"} size="24px">
          Are you sure to delete this?
        </Text>
        <Group display={"flex"} justify="center">
          <Button onClick={() => mutate()} bg={"red"}>
            {isLoading ? (
              <Loader color={"white"} size={"xs"} />
            ) : isSuccess ? (
              <FaCheck />
            ) : (
              "Delete"
            )}
          </Button>
          <Button onClick={close}>Cancel</Button>
        </Group>
      </Modal>
    </div>
  );
};

export default DeleteUserButton;
