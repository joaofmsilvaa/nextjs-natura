"use client";

import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import styles from "./styles.module.css";

export default function Carrousel({ imageArr }: { imageArr: Array<string> }) {
  const [currentImageIndex, setCurrentImage] = useState(0);
  const [indexClicked, setIndexclicked] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!indexClicked) {
      const timer = setTimeout(() => {
        if (currentImageIndex < imageArr.length - 1) {
          setCurrentImage(currentImageIndex + 1);
        } else {
          setCurrentImage(0);
        }
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setCurrentImage(clickedIndex);
      setIndexclicked(false);
    }
  }, [currentImageIndex, indexClicked, clickedIndex, imageArr.length]);

  const handleClick = (index: number) => {
    setClickedIndex(index);
    setIndexclicked(true);
  };

  return (
    <div className={styles.carrouselDiv}>
      <img
        ref={imgRef}
        src={imageArr[currentImageIndex]}
        alt="carrousel image"
      />
      <div className={styles.sphereList}>
        {imageArr.map((_, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={
              currentImageIndex === index
                ? styles.sphereSelected
                : styles.sphere
            }
          ></div>
        ))}
      </div>
    </div>
  );
}
