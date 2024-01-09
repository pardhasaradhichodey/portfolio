// OverviewBox.js

import React from "react";
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";
import "./OverViewBox.css";

const items = [
  {
    src: "https://github-readme-stats.vercel.app/api?username=pardhasaradhichodey&show_icons=true",
    altText: "GitHub Stats",
    caption: "",
    href: "https://github.com/pardhasaradhichodey",
  },
  {
    src: "https://leetcard.jacoblin.cool/PardhuChodey?theme=light&font=Lexend",
    altText: "LeetCode Stats",
    caption: "",
    href: "https://leetcode.com/PardhuChodey/",
  },
  {
    src: process.env.PUBLIC_URL + "/micheal.png",
    altText: "Recommendations",
    href: "https://www.linkedin.com/in/pardhasaradhichodey/details/recommendations/?detailScreenTabIndex=0",
  },
];

const OverviewBox = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        style={{ height: "80%", alignItems: "center" }}
      >
        <a href={item.href} target="_blank" rel="noreferrer">
          <img
            src={item.src}
            alt={item.altText}
            style={{ paddingLeft: "10%", width: "90%", height: "150px" }}
          />
        </a>
      </CarouselItem>
    );
  });

  return (
    <div className="overview-box">
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        style={{ width: "100%" }}
      >
        <CarouselIndicators
          className="carousel-caption"
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

export default OverviewBox;
