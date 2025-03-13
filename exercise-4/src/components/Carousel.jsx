import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [currentImage, setCurrentImage] = React.useState(0);
  /* You will need to hanle the click on left and right button */
  const nextimage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const previmage = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  /* You will need to manage the cases when we are on the last image or first image*/

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={previmage} />

      {/* YOu will need to display the current image, not the first one.. */}
      <img
        src={images[currentImage].src || images[currentImage]}
        alt={images[currentImage].alt}
        className="slide"
      />

      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={nextimage}
      />
    </div>
  );
};
