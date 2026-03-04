import { anim } from "@/data/data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const weddingDate: any = new Date("2026-06-17T12:00:00");

export function TimeBox() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    finished: false,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now: any = new Date();
      const diff = weddingDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
          finished: false,
        });
      } else {
        setTimeLeft((prev) => ({ ...prev, finished: true }));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <section className=" flex flex-col gap-5 text-center bg-white text-[#52422e]  px-6 py-10">
      <motion.h2 {...anim} className=" font-bold text-lg">
        Միջոցառմանը մնաց
      </motion.h2>
      <motion.div {...anim} className="">
        {timeLeft.finished ? (
          <div className="text-white text-2xl font-semibold px-4 bg-red-500 rounded-xl shadow">
            Հարսանիքն արդեն սկսվել է 🎉
          </div>
        ) : (
          <div className="flex justify-center text-base ">
            <TimeBoxItem label="Օր" value={timeLeft.days} /> :
            <TimeBoxItem label="Ժամ" value={timeLeft.hours} /> :
            <TimeBoxItem label="Րոպե" value={timeLeft.minutes} /> :
            <TimeBoxItem label="Վայրկյան" value={timeLeft.seconds} />
          </div>
        )}
      </motion.div>

      <motion.h2 {...anim} className=" font-bold text-lg">
        Սիրելի՛ ընկերներ և բարեկամներ
      </motion.h2>
      <motion.p {...anim} className=" text-base  opacity-90">
        Սիրով հրավիրում ենք Ձեզ մասնակցելու մեր կյանքի կարևոր և հիշարժան օրվան
      </motion.p>
    </section>
  );
}

const TimeBoxItem = ({ label, value }) => (
  <div className="px-2 text-center ">
    <h2>{value}</h2>
    <p>{label}</p>
  </div>
);
