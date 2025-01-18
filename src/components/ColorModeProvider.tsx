import { ColorModeProvider } from "@/components/ui/color-mode";

interface Prop {
  children: React.ReactNode;
}

const ColorMode = ({ children }: Prop) => {
  return <ColorModeProvider>{children}</ColorModeProvider>;
};

export default ColorMode;
