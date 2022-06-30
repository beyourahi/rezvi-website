import React, { ReactNode, useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import Autoplay from "embla-carousel-autoplay";
import styles from "@/styles/carousel.module.css";

interface CarouselProps {
  children: ReactNode;
  className?: string;
}

interface CarouselContextValues {
  embla: EmblaCarouselType | undefined;
  selectedIndex: number;
}

export const CarouselContext = React.createContext<CarouselContextValues>({
  embla: undefined,
  selectedIndex: -1,
});

export const Carousel: React.FC<CarouselProps> = ({ children, className }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [viewportRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [ClassNames(), Autoplay()]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <CarouselContext.Provider value={{ embla: emblaApi, selectedIndex }}>
      <div ref={viewportRef} className={`h-1/2 w-full overflow-hidden ${className} ${styles.viewport}`}>
        <div className={`flex ${styles.container}`}>{children}</div>
      </div>
    </CarouselContext.Provider>
  );
};

