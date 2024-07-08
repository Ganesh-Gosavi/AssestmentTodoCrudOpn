import React from "react";
import styles from "./CoverImage.module.css";
import doodleImg from "../../assets/images/doodleImg.png";
function CoverImage() {
  return (
    <div className={styles.coverSection}>
      <div className={styles.imageSec}>
        <div className={styles.bgCircle}></div>
        <img src={doodleImg} alt="Image loading.." />
      </div>
      <p className={styles.text}>
        Welcome to My To-Do List Website
        <br />
        <span>
          Create and Track Your To-Do Lists - Make Your Day Productive and
          Efficient!
        </span>
      </p>
    </div>
  );
}

export default CoverImage;
