import { useState, useEffect, useRef } from "react";
import jacobPic from "../assets/jacob_pic.jpg";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { Fade } from "react-awesome-reveal";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// import "./App.css";
function AnimateText({ text, shown }: { text: string; shown: number }) {
  console.log(shown);
  return text
    .split("")
    .slice(0, shown)
    .map((c) => <span>{c}</span>);
}

function Welcome() {
  const navigate = useNavigate();
  const lettersshown = useRef(0);
  const [value, setValue] = useState("");
  const message = "You've arrived at Jacob's website.";
  //   const useSetInterval = (cb: Function, time: number) => {
  //     const cbRef = useRef<Function>(() => {});
  //     useEffect(() => {
  //       cbRef.current = cb;
  //     });
  //     useEffect(() => {
  //       const interval = setInterval(() => cbRef.current(), time);
  //       return () => clearInterval(interval);
  //     }, [time]);
  //   };

  useEffect(() => {
    setInterval(() => {
      if (lettersshown.current < message.length) {
        lettersshown.current = lettersshown.current + 1;
        setValue(Date.now());
      }
    }, 200);
  }, []);

  // https://api.github.com/users/jwaldor/repos
  return (
    <>
      <div className="bg-blue-500">
        <AnimateText
          forceupdate={value}
          text={message}
          shown={lettersshown.current}
        />
        <button onClick={() => navigate("/deeper")}>Dive in!</button>
        <a href={`/deeper`}>Your Name</a>
      </div>
    </>
  );
}

export default Welcome;
