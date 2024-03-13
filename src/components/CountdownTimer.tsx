import React, { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      <h2 className=" font-bold text-xl mt-12 text-center">Time Remaining:</h2>
      <section className="my-8">
        <div className="flex flex-row justify-center items-center gap-14">
          <div>
            <p className="text-7xl">{timeLeft.days.toString()}</p>
            <p className="font-medium text-lg">Days</p>
          </div>
          <div>
            <p className="text-7xl">{timeLeft.hours.toString()}</p>
            <p className="font-medium text-lg">Hours</p>
          </div>
          <div>
            <p className="text-7xl">{timeLeft.minutes.toString()}</p>
            <p className="font-medium text-lg">Minutes</p>
          </div>
          <div>
            <p className="text-7xl">{timeLeft.seconds.toString()}</p>
            <p className="font-medium text-lg">Seconds</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CountdownTimer;
