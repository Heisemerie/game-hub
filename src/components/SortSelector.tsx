import { BsChevronDown } from "react-icons/bs";
import { Button } from "./ui/button";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";

interface Prop {
  onSelelectSortOrder: (sortOrder: string) => void;
  sortOrderValue: string;
}

const SortSelector = ({ onSelelectSortOrder, sortOrderValue }: Prop) => {
  const sortOrders: { value: string; label: string }[] = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find((order) => order.value === sortOrderValue);

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="subtle" size="md" fontSize={"md"}>
            Order by: {currentSortOrder?.label || "Relevance"}
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {sortOrders.map((order) => (
          <MenuItem value={order.value} key={order.value} onClick={() => onSelelectSortOrder(order.value)}>
            {order.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
