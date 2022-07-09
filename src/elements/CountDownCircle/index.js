import React, { useEffect, useRef } from "react";
import "./style.scss";

const CountDownCircle = ({ countDownTime }) => {
  const countDownCircleRef = useRef();

  useEffect(() => {
    let countdown = countDownTime;
    const countDownInterval = setInterval(countDownCallBack, 1000);

    function countDownCallBack() {
      if (countdown - 1 < 0) {
        clearInterval(countDownInterval);
        return;
      }
      countdown = countdown - 1;

      countDownCircleRef.current.textContent = countdown;
    }

    function clearCountDownInterval() {
      clearInterval(countDownInterval);
    }
  }, []);

  return (
    <div className="countdown mr-4">
      <div ref={countDownCircleRef} className="countdown-number"></div>
      <svg>
        <circle style={{animationDuration: `${countDownTime}s`}} r="18" cx="20" cy="20"></circle>
      </svg>
    </div>
  );
};

export default CountDownCircle;
