import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [isExpired, setIsExpired] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) {
      setIsExpired(true);
    }

    return () => clearTimeout(timer);
  });

  const containerWidth = document.getElementById("container")?.clientWidth;
  const containerHeight = document.getElementById("container")?.clientHeight;
  return (
    <div>
      {isExpired && (
        <Confetti width={containerWidth} height={containerHeight} />
      )}
      <h2 className=" font-bold text-xl text-center my-4">Time Remaining:</h2>

      <section className="my-8">
        <div className="flex flex-row justify-center items-center text-center md:gap-14 gap-6">
          <div>
            <p className="md:text-7xl text-4xl">{timeLeft.days.toString()}</p>
            <p className="font-medium md:text-lg text-sm">Days</p>
          </div>
          <div>
            <p className="md:text-7xl text-4xl">{timeLeft.hours.toString()}</p>
            <p className="font-medium md:text-lg text-sm">Hours</p>
          </div>
          <div>
            <p className="md:text-7xl text-4xl">
              {timeLeft.minutes.toString()}
            </p>
            <p className="font-medium md:text-lg text-sm">Minutes</p>
          </div>
          <div>
            <p className="md:text-7xl text-4xl">
              {timeLeft.seconds.toString()}
            </p>
            <p className="font-medium md:text-lg text-sm">Seconds</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CountdownTimer;
