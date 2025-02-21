import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";
interface Props {
  maxChars?: number;
  children: string;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [summarize, setSummarize] = useState(true);

  if (!children) return null;

  if (children.length < maxChars) return <Text>{children}</Text>;

  return (
    <Text>
      {summarize ? children.substring(0, maxChars) + "..." : children}
      <Button
        variant={"subtle"}
        size={"xs"}
        marginLeft={1}
        fontWeight={"bold"}
        onClick={() => setSummarize(!summarize)}
      >
        {summarize ? "More" : "Less"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
