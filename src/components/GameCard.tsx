import React from "react";
import { Game } from "../services/game-service";
import { Card, CardBody, Center, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="xl">
          <Center>{game.name}</Center>
        </Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
