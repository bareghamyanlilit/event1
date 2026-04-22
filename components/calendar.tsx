"use client";

import { FaRegHeart } from "react-icons/fa";

export function Calendar({ year = 2025, month = 9, highlightDay = 8 }) {
  const monthNames = [
    "Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս",
    "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր"
  ];
  const weekDays = ["Կիր","Երկ", "Երք", "Չրք", "Հնգ", "Ուրք", "Շբթ"];

  const firstDay = new Date(year, month - 1, 1).getDay(); // 0=Կիրակի, 1=Երկ
  const daysInMonth = new Date(year, month, 0).getDate();

  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) calendarDays.push(null);
  for (let i = 1; i <= daysInMonth; i++) calendarDays.push(i);

  return (
    <div className="mt-15 bg-[#ffffff] p-6 text-center">
      <h2 className="text-2xl text-[#52422e] mb-1">{monthNames[month - 1]}</h2>
      <p className="text-xl font-bold text-[#52422e] mb-4">{year}</p>

      <div className="grid grid-cols-7 mb-2 text-xs font-medium text-gray-500">
        {weekDays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 text-sm">
        {calendarDays.map((day, idx) =>
          day ? (
            <div
              key={idx}
              className={`py-2 rounded-full ${
                day === highlightDay
                  ? " text-[#52422e] text-xl font-semibold flex items-center justify-center"
                  : "text-gray-600"
              }`}
            >
              {day === highlightDay ? <FaRegHeart /> : day}
            </div>
          ) : (
            <div key={idx}></div>
          )
        )}
      </div>
    </div>
  );
}
