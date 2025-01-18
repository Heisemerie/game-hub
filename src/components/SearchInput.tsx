import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup flex="1" startElement={<BsSearch />}>
      <Input
        variant={"subtle"}
        borderRadius={20}
        placeholder={"Search games..."}
      />
    </InputGroup>
  );
};

export default SearchInput;
