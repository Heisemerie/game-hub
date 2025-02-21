import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import useGameQueryStore from "@/gameQueryStore";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const navigate = useNavigate();
  const setSearchText = useGameQueryStore((store) => store.setSearchText);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          setSearchText(ref.current?.value);
          navigate("/");
        }
      }}
    >
      <InputGroup w={"full"} startElement={<BsSearch />}>
        <Input
          variant={"subtle"}
          borderRadius={20}
          placeholder={"Search games..."}
          ref={ref}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
