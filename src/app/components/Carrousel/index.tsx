"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function Carrousel({ imageArr }: { imageArr: Array<string> }) {
  const [currentImageIndex, setCurrentImage] = useState(0);
  const [indexClicked, setIndexclicked] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(0)

  useEffect(() => {
    if (!indexClicked) {
      setTimeout(() => {
        if (currentImageIndex < imageArr.length - 1) {
          setCurrentImage(currentImageIndex + 1);
        } else {
          setCurrentImage(0);
        }
      }, 3000);
    } else {
        setCurrentImage(clickedIndex)
        setIndexclicked(false)
    }
  }, [currentImageIndex, indexClicked]);

  return (
    <div className={styles.carrouselDiv}>
      <img src={imageArr[currentImageIndex]} alt="carrousel image"></img>
      <div className={styles.sphereList}>
        <div
          onClick={() => {
            setClickedIndex(0);
            setIndexclicked(true)
          }}
          className={
            currentImageIndex == 0 ? styles.sphereSelected : styles.sphere
          }
        ></div>
        <div
          onClick={() => {
            setClickedIndex(1);
            setIndexclicked(true)
          }}
          className={
            currentImageIndex == 1 ? styles.sphereSelected : styles.sphere
          }
        ></div>
        <div
          onClick={() => {
            setClickedIndex(2);
            setIndexclicked(true)
          }}
          className={
            currentImageIndex == 2 ? styles.sphereSelected : styles.sphere
          }
        ></div>
      </div>
    </div>
  );
}
