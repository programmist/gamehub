import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../../stores/gameQueryStore";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const searchText = useGameQueryStore((s) => s.gameQuery.searchText);
  const setSearch = useGameQueryStore((s) => s.setSearch);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const input = inputRef.current;
        if (input && searchText !== input.value) {
          setSearch(inputRef.current.value);
          navigate("/");
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
