import { useState } from "react";

type SliderProps = {
  sources: string[];
};

export const Slider: React.FC<SliderProps> = (x) => {
  // const [images, setImages] = useState();

  return (
    <div className="slider__container">
      <div className="slider__image-container">
        {x.sources.map((i, index) => {
          return (
            <div className="">
              <img src={i} alt={i} key={index} />
            </div>
          );
        })}
      </div>
      <div className="slider__dots"></div>
    </div>
  );
};
