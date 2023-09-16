import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/nav/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  const isRoutingError = isRouteErrorResponse(error);

  // TODO: use logging service like Sentry
  console.log(error);

  return (
    <>
      {/* TODO: Shouldn't need to manually insert Navbar here. */}
      <NavBar />
      <Box padding={5}>
        <Heading>Oops...</Heading>
        <Text>
          {isRoutingError
            ? "Invalid Page"
            : "Sorry, an unexpected error has occurred."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
