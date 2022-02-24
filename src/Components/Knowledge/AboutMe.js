import React from "react";
import MyPic from "../../assets/jm.png";
import "./AboutMe.css";

function AboutMe({ name }) {
  return (
    <>
      <img src={MyPic} />
      <p>{name}</p>
      <p><i>"As a student who doesn't know anything, I am glad that I have found and experienced using these tools to help me start my journey in programming."</i></p>
    </>
  );
}

export default AboutMe;
