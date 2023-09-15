import { Heading } from "@chakra-ui/react";

interface Props {
  platformName?: string;
  genreName?: string;
}

function GameHeading({ platformName = "", genreName = "" }: Props) {
  const heading = `${platformName} ${genreName} Games`;

  return (
    <Heading as="h1" marginBottom={6} fontSize="5xl">
      {heading}
    </Heading>
  );
}

export default GameHeading;
