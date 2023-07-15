import { motion, useTransform } from "framer-motion";
import { motionValue} from "framer-motion/dom";
import { useEffect, useState } from "react";

function App() {
  const maxValues = { x: window.innerWidth, y: window.innerHeight };
  const [mouseLocation, setMouseLocation] = useState({ x: 0, y: 0 });
  const [cursorIsLeft, setCursorIsLeft] = useState(true);
  useEffect(() => {
    function setLocation(e: MouseEvent) {
      setMouseLocation({ x: e.clientX, y: e.clientY });
      setCursorIsLeft(e.clientX < maxValues.x / 2);
    }
    window.addEventListener("mousemove", setLocation);
    return () => {
      window.removeEventListener("mousemove", setLocation);
    };
  }, []);

  const leftMotionMouseX = useTransform(
    (motionValue(mouseLocation.x) as unknown) as import("c:/Users/User/Documents/GitHub/emoji/node_modules/framer-motion/dist/index").MotionValue<number>,
    //! should be: motionValue(mouseLocation.x) as MotionValue<number>,
    [0, maxValues.x / 2 - 150],
    [0, 1]
  );
  const rightMotionMouseX = useTransform(
    (motionValue(mouseLocation.x) as unknown) as import("c:/Users/User/Documents/GitHub/emoji/node_modules/framer-motion/dist/index").MotionValue<number>,
    //! should be: motionValue(mouseLocation.x) as MotionValue<number>,
    [maxValues.x / 2 + 150, maxValues.x],
    [1, 0]
    );
    
    const leftEyeX = useTransform(
      (motionValue(mouseLocation.x) as unknown) as import("c:/Users/User/Documents/GitHub/emoji/node_modules/framer-motion/dist/index").MotionValue<number>,
      //! should be: motionValue(mouseLocation.x) as MotionValue<number>,
    [0, maxValues.x],
    ["-0.8rem", "2rem"]
  );
  const leftEyeY = useTransform(
    (motionValue(mouseLocation.y) as unknown) as import("c:/Users/User/Documents/GitHub/emoji/node_modules/framer-motion/dist/index").MotionValue<number>,
    //! should be: motionValue(mouseLocation.y) as MotionValue<number>,
    [0, maxValues.y],
    ["-0.8rem", "2rem"]
  );

  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <motion.div
        drag
        className="rounded-full face group overflow-hidden h-[300px] w-[300px] bg-yellow-500 relative"
      >
        <motion.div
          style={{
            opacity: cursorIsLeft ? leftMotionMouseX : rightMotionMouseX
          }}
          className="absolute h-full w-full anger-cover bg-red-600"
        />
        <div className="relative h-full w-full">
          <div className="absolute top-[80px] w-full flex justify-around items-center">
            <div className="eye group h-16 w-16 relative bg-white rounded-full overflow-hidden hover:h-0 overflow-hidden">
              <motion.div
                style={{ left: leftEyeX, top: leftEyeY }}
                className="absolute pupil h-10 w-10 flex items-center justify-center rounded-full bg-black"
              >
                <div className="rounded-full bg-white absolute top-0 right-0 h-3 w-3" />
                <div className="rounded-full bg-radial-gradient top-0 right-0 h-3 w-3" />
              </motion.div>
              <motion.div className="rounded-full absolute top-0 right-0 h-full w-full overflow-hidden group-hover:rotate-[10deg]">
                <div className=" top-lid group-hover:animate-none top-[-100px] group-hover:top-[-5px] w-full h-8 relative overflow-hidden bg-yellow-500">
                  <motion.div
                    style={{
                      opacity: cursorIsLeft
                        ? leftMotionMouseX
                        : rightMotionMouseX
                    }}
                    className="absolute w-full h-full bg-red-600"
                  />
                </div>
                <div className="bottom-lid top-lid group-hover:animate-none top-[100px] group-hover:top-[5px] w-full h-8 relative overflow-hidden bg-yellow-500">
                  <motion.div
                    style={{
                      opacity: cursorIsLeft
                        ? leftMotionMouseX
                        : rightMotionMouseX
                    }}
                    className="absolute w-full h-full bg-red-600"
                  />
                </div>
              </motion.div>
            </div>
            <div className="eye group h-16 w-16 relative bg-white rounded-full overflow-hidden">
              <motion.div
                style={{ left: leftEyeX, top: leftEyeY }}
                className="absolute pupil h-10 w-10 flex items-center justify-center rounded-full bg-black"
              >
                <div className="rounded-full bg-white absolute top-0 right-0 h-3 w-3" />
                <div className="rounded-full bg-radial-gradient top-0 right-0 h-3 w-3" />
              </motion.div>
              <motion.div className="rounded-full absolute top-0 right-0 h-full w-full overflow-hidden group-hover:rotate-[-10deg]">
                <div className=" top-lid group-hover:animate-none top-[-100px] group-hover:top-[-5px] w-full h-8 relative overflow-hidden bg-yellow-500">
                  <motion.div
                    style={{
                      opacity: cursorIsLeft
                        ? leftMotionMouseX
                        : rightMotionMouseX
                    }}
                    className="absolute w-full h-full bg-red-600"
                  />
                </div>
                <div className="bottom-lid top-lid group-hover:animate-none top-[100px] group-hover:top-[5px] w-full h-8 relative overflow-hidden bg-yellow-500">
                  <motion.div
                    style={{
                      opacity: cursorIsLeft
                        ? leftMotionMouseX
                        : rightMotionMouseX
                    }}
                    className="absolute w-full h-full bg-red-600"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-[20px] w-full flex justify-around items-center">
            <motion.svg
              style={{ rotate: 42, translateY: 100, translateX: -12 }}
              rotate={30}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              stroke-width="2"
            >
              <motion.path d="M8 14 c4.418 0 8-3.582 8-8" />
            </motion.svg>
          </div>
        </div>
      </motion.div>
    </main>
  );
}

export default App;
