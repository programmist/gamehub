import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import useGenres, { useMockGenres } from "../hooks/useGenres";
import { Genre } from "../services/genre-service";
import getCroppedImgUrl from "../services/image-url";

function GenreList() {
  const { data: genres, error, isLoading } = useMockGenres();

  if (isLoading) return <Spinner />;

  return (
    <List>
      {genres.map(({ id, name, image_background }) => (
        <ListItem key={id} paddingY="5px">
          <HStack>
            <Image
              borderRadius={8}
              boxSize="32px"
              src={getCroppedImgUrl(image_background)}
            />
            <Text fontSize="lg">{name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
