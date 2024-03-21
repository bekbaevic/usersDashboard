import { Button, Flex, Table } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { BiSolidEdit } from "react-icons/bi";
import { UpdateComponent } from "./FormComponent";
import DeleteUserButton from "./DeleteUserButton";
import { useState } from "react";

const UserTable = ({ data }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <Table striped withRowBorders={false}>
      <Table.Thead>
        {
          <Table.Tr>
            <Table.Th>#</Table.Th>
            <Table.Th>Name</Table.Th>
            <Table.Th>Role</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th></Table.Th>
          </Table.Tr>
        }
      </Table.Thead>
      <Table.Tbody>
        {data.map((item) => (
          <Table.Tr key={item.id}>
            <Table.Td>{data.indexOf(item) + 1}</Table.Td>
            <Table.Td>{item.name}</Table.Td>
            <Table.Td>{item.role}</Table.Td>
            <Table.Td>{item.email}</Table.Td>
            <Table.Td style={{ display: "flex", justifyContent: "flex-end" }}>
              <Flex gap={"xs"}>
                {item.id !== 1 && item.id !== 2 && item.id !== 3 ? (
                  <Button onClick={() => (open(), setSelectedItem(item))}>
                    <BiSolidEdit size={"18px"} />
                  </Button>
                ) : (
                  <Button disabled>
                    <BiSolidEdit size={"18px"} />
                  </Button>
                )}
                <DeleteUserButton item={item} />
              </Flex>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
      <UpdateComponent
        opened={opened}
        onClose={close}
        selectedItem={selectedItem}
      />
    </Table>
  );
};

export default UserTable;
