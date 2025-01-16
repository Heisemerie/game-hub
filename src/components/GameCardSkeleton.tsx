import { Card } from "@chakra-ui/react";
import {
  Skeleton,
  SkeletonText,
} from "@/components/ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <Card.Root borderRadius={10} width={280} overflow={"hidden"}>
      <Skeleton height={"200px"} />
      <Card.Body>
        <SkeletonText/>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
