import { anim, program } from "@/data/data";
import { motion } from "framer-motion";
import { FaMapMarkedAlt } from "react-icons/fa";

export function Program() {
  return (
    <section className="bg-[#ffffff] text-[#52422e] px-6 py-12">
      <motion.h2 {...anim} className="text-center text-2xl mb-10 ">
        Ժամանակացույց
      </motion.h2>

      {program.map((item, i) => (
        <ProgramItem key={i} {...item} />
      ))}
    </section>
  );
}

const getImage = (title) => {
  if (title === "Պսակադրություն") return "/ekexeci.jpg";
  if (title === "Հարսանյաց հանդիսություն") return "/restoran.jpg";
  return null;
};

const ProgramItem = ({ icon, time, title, address }) => {
  const img = getImage(title);

  return (
    <div className={`my-8 flex flex-col items-center text-xl ${title=='Փեսայի տուն'? '-ml-40':''} ${title=='Հարսնացուի տուն'? 'ml-40 -mt-20':''}`}>
      <motion.p {...anim} className="text-4xl">{icon}</motion.p>
      <motion.p {...anim} className="opacity-80">{time}</motion.p>
      <motion.h3 {...anim}>{title}</motion.h3>
      <motion.p {...anim} className="text-sm opacity-80">{address}</motion.p>

      {img && <img src={img} className="my-2 max-w-full rounded" />}

      <motion.a
        {...anim}
        href={`https://www.google.com/maps/search/${address}`}
        target="_blank"
        className="inline-flex items-center gap-2 px-4 py-1.5 text-sm"
      >
        <FaMapMarkedAlt />
        Ինչպես հասնել
      </motion.a>

      {title !== "Հարսանյաց հանդիսություն" && (
        <img
          src="https://static.thenounproject.com/png/arrow-icon-5953741-512.png"
          className={` w-20 h-20 opacity-60 my-10 ${title=='Փեսայի տուն'? 'rotate-530':''} ${title=='Հարսնացուի տուն'? 'rotate-240':''} rotate-215`}
        />
      )}
    </div>
  );
};