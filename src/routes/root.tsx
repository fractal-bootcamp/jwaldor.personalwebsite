import { useState, useEffect, useRef } from "react";
import jacobPic from "../assets/jacob_pic.jpg";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { Fade } from "react-awesome-reveal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion, useAnimationControls, useAnimate } from "framer-motion";

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
  const [scope, animate] = useAnimate();
  const [derender, makeDeRender] = useState(false);

  useEffect(() => {
    console.log("derender effect");
    if (derender) {
      const exitAnimation = async () => {
        await animate(scope.current, { scale: 3 }, { duration: 1 });
        console.log("done");
        // await animate("li", { opacity: 1, x: 0 });
        navigate("/deeper");
      };
      exitAnimation();
    }
  }, [derender]);

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
    }, 100);
  }, []);

  // https://api.github.com/users/jwaldor/repos
  const controls = useAnimationControls();

  return (
    <>
      <div className="bg-blue-500 text-sm" ref={scope}>
        <AnimateText
          forceupdate={value}
          text={message}
          shown={lettersshown.current}
        />
        <button
          onClick={() => {
            makeDeRender(true);

            // controls
            //   .start({
            //     scale: 1.7,
            //     y: -70,
            //     transition: { ease: "linear", duration: 0 },
            //   })
            //   .then((res) => {
            //     console.log("navigating");
            //     navigate("/deeper");
            //   });
          }}
        >
          Dive in!
        </button>
      </div>
    </>
  );
}

export default Welcome;
