"use client";
import { useRef, useState } from "react";
import classes from "./ImagePicker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, ...props }) {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  function pickImageHandler() {
    imageRef.current.click();
  }
  function handleImageChange() {
    const file = imageRef.current.files[0];
    if (!file) {
      setImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setImage(fileReader.result);
    };
    fileReader.readAsDataURL(file)
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={props.name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!image && <p>No image picked yet.</p>}
          {image && <Image src={image} alt="the image form the user" fill />}
        </div>
        <input
          className={classes.input}
          type="file"
          {...props}
          accept="image/png, image/jpeg"
          ref={imageRef}
          onChange={handleImageChange}
          
        />
        <button
          className={classes.button}
          type="button"
          onClick={pickImageHandler}
        >
          Pick An Image
        </button>
      </div>
    </div>
  );
}
