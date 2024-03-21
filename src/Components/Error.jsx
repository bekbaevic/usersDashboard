import { BiError } from "react-icons/bi";
import { Text } from "@mantine/core";

const Error = ({ error }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <BiError style={{ fontSize: "100px", color: "red" }} />
      <Text fw={700} size="24px">
        {error.message}
      </Text>
    </div>
  );
};

export default Error;
