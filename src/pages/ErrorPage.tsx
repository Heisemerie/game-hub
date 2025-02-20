import NavBar from "@/components/NavBar";
import { Center, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <NavBar />
      <Center flexDirection={"column"}>
        <Heading>Oops!</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist..."
            : "Sorry, an unexpected error occurred..."}
        </Text>
      </Center>
    </>
  );
};

export default ErrorPage;
