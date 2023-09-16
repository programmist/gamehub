import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const isRoutingError = isRouteErrorResponse(error);

  // TODO: use logging service like Sentry
  console.log(error);

  return (
    <>
      <h1>Oops...</h1>
      <p>
        {isRoutingError
          ? "Invalid Page"
          : "Sorry, an unexpected error has occurred."}
      </p>
    </>
  );
};

export default ErrorPage;
