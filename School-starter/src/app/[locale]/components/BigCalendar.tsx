"use client";
import { Calendar, momentLocalizer, Views,View } from "react-big-calendar";
import moment from "moment";
import "moment/locale/zh-cn"; 
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState, useEffect,useCallback,useMemo} from "react";
import { useLocale,useTranslations } from "next-intl";

const localeMappings: { [key: string]: string } = {
  cn: "zh-cn", 
  us: "en-us", 
};

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);
  const [date, setDate] = useState(new Date());
  const t = useTranslations('Calendar');
  const rawLocale = useLocale();

  useEffect(() => {
    const momentLocale = localeMappings[rawLocale] || "en";
    moment.locale(momentLocale);
    moment.updateLocale(momentLocale, {
      week: {
        dow: 1, 
      },
    });
  }, [rawLocale]);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };


  const messages = {
    allDay: t('allDay'),
    previous: t('previous'),
    next: t('next'),
    today: t('today'),
    month: t('month'),
    week: t('week'),
    day: t('day'),
    agenda: t('agenda'),
    date: t('date'),
    time: t('time'),
    event: t('event'),
  };

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      date={date}
      startAccessor="start"
      endAccessor="end"
      views={["month", "week", "day", "agenda"]}
      view={view}
      style={{ height: "98%" }}
      onView={(view) => setView(view)}
      onNavigate={(date) => {
        setDate(new Date(date));
      }}
      min={new Date(2024, 1, 0, 8, 0, 0)}
      max={new Date(2026, 1, 0, 23, 0, 0)}
      culture={localeMappings[rawLocale] || "en"}
      allDayMaxRows={1}
      popup
      messages={messages}
    />
  );
};

export default BigCalendar;
