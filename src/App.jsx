import React from "react";
import UserTable from "./Components/Table";
import { getData } from "./queries/queries";
import { useQuery } from "react-query";
import Loading from "./Components/Loader";
import Error from "./Components/Error";
import { Text } from "@mantine/core";
import CreateUserButton from "./Components/CreateUserButton";

function App() {
  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["users"],
    queryFn: () => getData(),
    refetchOnWindowFocus: false,
    retry: 1,
    retryDelay: 1000,
  });

  if (isLoading) return <Loading />;
  if (isError) return <Error error={error} />;
  // if (isFetching) return <Loading />;

  return (
    <div
      style={{
        width: "90%",
        margin: "0 auto",
        minHeight: "100vh",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: "10px",
          left: "0",
        }}
      >
        <CreateUserButton />
      </div>
      <Text
        fw={700}
        size="24px"
        py={"15px"}
        style={{ borderTop: "1px solid gray" }}
      >
        Dashboard
      </Text>
      <UserTable data={data} />
    </div>
  );
}

export default App;
