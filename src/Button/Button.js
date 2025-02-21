import React from 'react';
import styles from "./Button.module.css"

const Button = () => {
  
/*   const handleClick = (e) => {
    const sunmiPic = document.getElementById("sunmi-pic");
    sunmiPic.style.display !== "inline-block" ? sunmiPic.style.display = "inline-block" : sunmiPic.style.display = "none";
    e.target.textContent === "Show Pic" ? e.target.textContent = "Hide Pic" : e.target.textContent = "Show Pic";
  } */

  const handleClick = (e) => {
    const cardImg = document.querySelector(".img-container");
    cardImg.classList.toggle("show");
    e.target.textContent === "Show Pic" ? e.target.textContent = "Hide Pic" : e.target.textContent = "Show Pic";
  }

  return (
    <button className= {styles.button} onClick ={(e) => handleClick(e)}>Show Pic</button>
  )
}

export default Button