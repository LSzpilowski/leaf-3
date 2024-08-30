import { Button } from "@/components/ui/button";

interface CustomButtomProps {
  name: string;
  onClick: () => void;
}

function CustomButton({ name, onClick }: CustomButtomProps) {
  return (
    <>
      <Button onClick={onClick}>{name}</Button>
    </>
  );
}

export default CustomButton;
