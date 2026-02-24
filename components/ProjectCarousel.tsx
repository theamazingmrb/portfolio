'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProjectCarouselProps {
  children: React.ReactNode;
  className?: string;
}

export function ProjectCarousel({ children, className }: ProjectCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    skipSnaps: false,
    dragFree: true,
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('reInit', onInit);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <div className={cn('relative', className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 sm:gap-6 lg:gap-8">{children}</div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background hidden sm:flex"
        onClick={scrollPrev}
        disabled={selectedIndex === 0}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background hidden sm:flex"
        onClick={scrollNext}
        disabled={selectedIndex === scrollSnaps.length - 1}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dot Navigation */}
      {scrollSnaps.length > 1 && (
        <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={cn(
                'h-2 rounded-full transition-all duration-300',
                index === selectedIndex
                  ? 'bg-primary w-6 sm:w-8'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2'
              )}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
