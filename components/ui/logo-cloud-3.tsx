/* eslint-disable */
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
  speed?: number;
  speedOnHover?: number;
  reverse?: boolean;
  gap?: number;
};

export function LogoCloud({
  className,
  logos,
  speed = 80,
  speedOnHover = 25,
  reverse = false,
  gap = 56,
  ...props
}: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className,
      )}
    >
      <InfiniteSlider gap={gap} reverse={reverse} speed={speed} speedOnHover={speedOnHover}>
        {logos.map((logo) => (
          <div
            key={`logo-${logo.alt}`}
            className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300"
          >
            <img
              alt={logo.alt}
              className="pointer-events-none h-[139px] w-auto max-w-[320px] select-none object-contain"
              height={139}
              loading="lazy"
              src={logo.src}
              width="auto"
            />
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}
