import { Loader } from "@mantine/core";

const Loading = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loader color="indigo" size="xl" type="dots" />
    </div>
  );
};

export default Loading;
