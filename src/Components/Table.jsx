import { Flex, Table } from "@mantine/core";
import DeleteUserButton from "./DeleteUserButton";
import UpdateUserButton from "./UpdateUserButton";

const UserTable = ({ data }) => {
  return (
    <Table striped withRowBorders={false}>
      <Table.Thead>
        {
          <Table.Tr>
            <Table.Th>#</Table.Th>
            <Table.Th>Name</Table.Th>
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
            <Table.Td>{item.email}</Table.Td>
            <Table.Td style={{ display: "flex", justifyContent: "flex-end" }}>
              <Flex gap={"xs"}>
                <UpdateUserButton item={item} />
                <DeleteUserButton item={item} />
              </Flex>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

export default UserTable;
