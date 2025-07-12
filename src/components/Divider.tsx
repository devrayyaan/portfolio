import { cn } from "@/utils/cn";

const Divider = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn("w-full h-[1px] transition-colors duration-200", className)}
      style={{ backgroundColor: "var(--color-divider)" }}
    ></div>
  );
};

export default Divider;
