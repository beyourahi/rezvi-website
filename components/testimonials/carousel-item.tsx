import { ReactNode, useCallback, useContext } from "react";
import { CarouselContext } from "./carousel";
import styles from "@/styles/carousel.module.css";

interface CarouselItemProps {
  index: number;
  children: ReactNode;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({ children, index }) => {
  const { embla: emblaApi, selectedIndex } = useContext(CarouselContext);
  const isActive = selectedIndex === index;
  const handleClick = useCallback(() => {
    if (emblaApi === undefined) return;
    emblaApi.scrollTo(index);
  }, [emblaApi, index]);

  return (
    <div className={`${styles.slide} relative ${isActive ? "active" : ""}`} onClick={handleClick}>
      {children}
    </div>
  );
};

