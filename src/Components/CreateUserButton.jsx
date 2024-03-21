import { Button } from "@mantine/core";
import { IoIosAddCircle } from "react-icons/io";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { CreateComponent } from "./FormComponent";

const CreateUserButton = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <Button
        onClick={open}
        leftSection={<IoIosAddCircle size={"18px"} />}
        mb={"20px"}
      >
        Create user
      </Button>
      <CreateComponent opened={opened} onClose={close} />

    </div>
  );
};

export default CreateUserButton;
