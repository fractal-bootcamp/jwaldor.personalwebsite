import { useState, useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";
import { motion, useAnimate } from "framer-motion";

// import "./App.css";
function AnimateText({
  text,
  shown,
}: {
  forceupdate: number | undefined;
  text: string;
  shown: number;
}) {
  console.log(shown);
  return text
    .split("")
    .slice(0, shown)
    .map((c) => <span>{c}</span>);
}

function Welcome() {
  const navigate = useNavigate();
  const lettersshown = useRef(0);
  const [value, setValue] = useState<number>();
  const message = "You've arrived at Jacob's website.";
  const [scope, animate] = useAnimate();
  const [derender, makeDeRender] = useState(false);

  useEffect(() => {
    console.log("derender effect");
    if (derender) {
      const exitAnimation = async () => {
        await animate(scope.current, { scale: 6 }, { duration: 0.6 });
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

  return (
    <>
      <motion.div
        className="flex flex-col text-sm place-items-center gap-2"
        ref={scope}
      >
        <div className="text-center w-fit text-slate-900">
          <AnimateText
            forceupdate={value}
            text={message}
            shown={lettersshown.current}
          />
        </div>
        {/* <div > */}
        <button
          className="bg-black text-yellow-800 text-center w-fit p-6 text-slate"
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
        {/* </div> */}
      </motion.div>
    </>
  );
}
//border-2 border-b-0 border-emerald-700 rounded-t-lg

export default Welcome;
