"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useLocale, useTranslations } from "next-intl";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
  {
    id: 1,
    title: "Alevel 数学考试",
    time: "10:00 PM - 12:00 PM",
    description: "Alevel 数学考试相关事宜.",
  },
  {
    id: 2,
    title: "雅思考试1",
    time: "12:00 PM - 2:00 PM",
    description: "雅思考试扬州考场相关事宜.",
  },
  {
    id: 3,
    title: "雅思考试2",
    time: "12:00 PM - 2:00 PM",
    description: "雅思考试苏州考场相关事宜.",
  },
  {
    id: 4,
    title: "雅思考试3",
    time: "12:00 PM - 2:00 PM",
    description: "雅思考试考场相关事宜.",
  },
  {
    id: 5,
    title: "雅思考试4",
    time: "12:00 PM - 2:00 PM",
    description: "雅思考试相关事宜.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  const t = useTranslations("EventCalendar");
  const currentLocale = useLocale();
  const calendarLocale = currentLocale === "cn" ? "zh-CN" : "en";
  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} locale={calendarLocale}/>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">{t("Events")}</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4 max-h-[300px] overflow-y-auto">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;