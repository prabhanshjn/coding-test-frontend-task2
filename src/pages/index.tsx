import { NextPage } from "next";
import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import CountdownTimer from "@/components/CountdownTimer";

const Home: NextPage = () => {
  const [dateValue, setDateValue] = useState<Date | null>(new Date());
  const [timerStart, setTimerStart] = useState<boolean>(false);

  return (
    <div className="bg-cover  bg-[url('https://images.unsplash.com/photo-1707343843982-f8275f3994c5?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] min-h-screen">
      <div className="flex items-center justify-center w-full">
        <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-2xl p-16 text-white max-w-3xl w-full mx-auto mt-32 shadow-xl">
          <section>
            <h1 className="text-3xl font-bold text-center">Countdown Timer</h1>
            <p className="max-w-2xl mx-auto text-center my-2 text-gray-200 font-medium">
              Hi, I am Prabhansh Jain and I have designed this countdown timer
              as a small coding task. You can set the time below and start the
              timer ⏳
            </p>
          </section>
          {timerStart ? (
            <section className="text-center">
              <CountdownTimer targetDate={dateValue as Date} />
              <button
                onClick={() => {
                  setTimerStart(false);
                }}
                className="uppercase border text-white p-2 rounded-xl w-40 mt-6 "
              >
                Stop
              </button>
            </section>
          ) : (
            <section className="mx-auto text-center my-8">
              <p className="my-2">Select a date and time: </p>
              <div className="border rounded-xl border-gray-300 p-2 text-white w-72 mx-auto my-6">
                <DateTimePicker
                  className="border-0"
                  calendarClassName={"text-black"}
                  tileClassName={"text-black"}
                  onChange={setDateValue}
                  value={dateValue}
                  minDate={new Date()}
                />
              </div>
              <div>
                <button
                  onClick={() => {
                    setTimerStart(true);
                  }}
                  className=" border text-white p-1 rounded-2xl w-40 mt-6"
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
