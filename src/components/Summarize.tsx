import { Button } from "@chakra-ui/react";
import { useState } from "react";
interface Props {
  children: string;
  maxChars?: number;
}

const Summarize = ({ children, maxChars = 300 }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!children) return null;

  const text = expanded ? children : children.slice(0, maxChars) + "...";

  return (
    <>
      {text}
      <Button
        onClick={() => setExpanded(!expanded)}
        colorScheme="yellow"
        fontWeight="bold"
        size="xs"
        marginLeft={1}
        borderRadius={6}
        display={expanded ? "block" : "inline"}
      >
        Show {expanded ? "Less" : "More"}
      </Button>
    </>
  );
};

export default Summarize;
