import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  const color = score >= 90 ? "green" : score >= 80 ? "yellow" : "gray";
  return (
    <Badge
      colorScheme={color}
      fontSize="14px"
      paddingX={2}
      borderRadius="4px"
      color={`${color}.300`}
    >
      {score}
    </Badge>
  );
}

export default CriticScore;
