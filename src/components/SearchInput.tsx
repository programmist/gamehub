import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../stores/gameQueryStore";

function SearchInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { search, onSearchSubmit } = useGameQueryStore((state) => ({
    search: state.gameQuery.search,
    onSearchSubmit: state.updateSearch,
  }));

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (inputRef.current && search !== inputRef.current.value) {
          onSearchSubmit(inputRef.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <BsSearch />
        </InputLeftElement>
        <Input
          id="search-input"
          ref={inputRef}
          placeholder="Search games..."
          borderRadius={20}
          variant="filled"
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
