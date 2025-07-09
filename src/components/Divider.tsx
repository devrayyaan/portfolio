import { cn } from "@/utils/cn";

const Divider = ({ className }: { className?: string }) => {
  return <div className={cn("w-full h-[1px] bg-[#e0e0e0]", className)}></div>;
};

export default Divider;
