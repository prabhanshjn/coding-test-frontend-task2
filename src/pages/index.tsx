import { NextPage } from "next";
import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import CountdownTimer from "@/components/CountdownTimer";
import toast, { Toaster } from "react-hot-toast";

const Home: NextPage = () => {
  const [dateValue, setDateValue] = useState<Date | null>(new Date());
  const [timerStart, setTimerStart] = useState<boolean>(false);

  const handleStartTimer = () => {
    if (dateValue !== null) {
      setTimerStart(true);
    } else {
      toast.error("Please select a valid date and time");
    }
  };
  return (
    <div className="bg-cover  bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] min-h-screen">
      <Toaster />
      <div className="flex items-center justify-center w-full md:px-0 px-6">
        <div
          id="container"
          className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-3xl p-16 text-blue-950 max-w-3xl w-full mx-auto mt-32 shadow-xl "
        >
          {timerStart ? (
            <section className="text-center">
              <CountdownTimer targetDate={dateValue as Date} />
              <button
                onClick={() => {
                  setTimerStart(false);
                }}
                className=" border border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white p-1 rounded-2xl w-40 mt-6"
              >
                End Session
              </button>
            </section>
          ) : (
            <section className="mx-auto text-center my-8">
              <h1 className="md:text-3xl text-2xl font-bold text-blue-950">
                Start Your Countdown
              </h1>

              <div className="  p-2 text-blue-950   my-6">
                <DateTimePicker
                  calendarClassName={"text-black"}
                  tileClassName={"text-black"}
                  onChange={setDateValue}
                  value={dateValue}
                  minDate={new Date()}
                />
              </div>
              <div>
                <button
                  onClick={() => handleStartTimer()}
                  className=" border border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white p-1 rounded-2xl w-40 mt-6"
                >
                  Start
                </button>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
