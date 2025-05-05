import React from "react";
import React, { useState } from "react";
import hero from "../images/hero.png";

const AnimatedImg = () => {
  const [isMovingUp, setIsMovingUp] = useState(true);

  // Toggle movement direction on interval
  useState(() => {
    const interval = setInterval(() => {
      setIsMovingUp((prev) => !prev);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="lg:w-1/2 lg:pl-20">
      <img
        src={hero}
        alt=""
        style={{ transform: isMovingUp ? "translateY(0)" : "translateY(20px)" }}
      />
    </div>
  );
};





export default AnimatedImg;

