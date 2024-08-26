import { cn } from "@/lib/utils";

const OverlayGradient = ({ displayIndex }: { displayIndex: number }) => {
  return (
    <div
      className={cn(
        "overflow-hidden absolute -z-10 w-full h-full",
        displayIndex === 2 &&
          "lg:gradient-overlay [@media(max-width:1024px)]:mobile-gradient-overlay",
        displayIndex === 1 &&
          "[@media(max-width:1024px)]:mobile-gradient-overlay-light"
      )}
    />
  );
};

export default OverlayGradient;
