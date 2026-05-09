import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const images = Array.from({ length: 18 }, (_, i) => `/images/${i + 1}.jpeg`);

const firstRow = images.slice(0, Math.ceil(images.length / 2));
const secondRow = images.slice(Math.ceil(images.length / 2));

const ImageCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "relative h-fit w-fit cursor-pointer overflow-hidden rounded-xl border p-2",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center justify-center">
        <img className="rounded-xl w-64 md:w-80 h-auto object-cover" alt="Gallery Image" src={img} />
      </div>
    </figure>
  );
};

export default function GallerySection() {
  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden rounded-xl border bg-background">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((img, idx) => (
          <ImageCard key={idx} img={img} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((img, idx) => (
          <ImageCard key={idx} img={img} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background to-transparent"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
}
