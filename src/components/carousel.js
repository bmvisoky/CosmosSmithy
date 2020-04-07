import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://w.wallhaven.cc/full/49/wallhaven-49968d.jpg',
    altText: 'Create',
    caption: 'Create all of your campaign in one place.'
  },
  {
    src: 'https://w.wallhaven.cc/full/4x/wallhaven-4x3m2o.jpg',
    altText: 'Generate',
    caption: 'Writers block? We can generate it for you too.'
  },
  {
    src: 'https://w.wallhaven.cc/full/p2/wallhaven-p2w599.jpg',
    altText: 'Run',
    caption: 'Put all your hard work to good use, run everything from the same client.'
  }
];

const MainCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
      <div id="carouselCtr">
        <img class="img-fluid" src={item.src} alt={item.altText}  />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default MainCarousel;
