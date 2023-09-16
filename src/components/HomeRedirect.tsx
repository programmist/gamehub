import { Center, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";

const HomeRedirect = () => {
  const nav = useNavigate();

  useEffect(() => {
    nav("/games");
  });

  return (
    <Center>
      <Spinner />
    </Center>
  );
};

export default HomeRedirect;
