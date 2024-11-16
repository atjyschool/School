"use client";
import { Calendar, momentLocalizer, Views,View,stringOrDate,} from "react-big-calendar";
import moment from "moment";
import "moment/locale/zh-cn"; 
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState, useEffect,useCallback,useMemo} from "react";
import { useLocale,useTranslations } from "next-intl";
import withDragAndDrop, {
  EventInteractionArgs,
} from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Appointment, EventItem } from "@/lib/types";

const localeMappings: { [key: string]: string } = {
  cn: "zh-cn", 
  us: "en-us", 
};
const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop<EventItem>(Calendar);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WEEK);
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState<EventItem[]>(calendarEvents);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const t = useTranslations('Calendar');
  const rawLocale = useLocale();
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
  const handleEventClick = (event: EventItem) => {
    if (event.data?.appointment) {
      setSelectedAppointment(event.data.appointment);
    }
  };
  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  useEffect(() => {
    const momentLocale = localeMappings[rawLocale] || "en";
    moment.locale(momentLocale);
    moment.updateLocale(momentLocale, {
      week: {
        dow: 1, 
      },
    });
  }, [rawLocale]);

  const onChangeEventTime = useCallback(
    ({ event, start, end, resourceId }: EventInteractionArgs<EventItem>) => {
      setEvents((prevEvents) =>
        prevEvents.map((prevEvent) =>
          prevEvent?.data?.appointment?.id === event?.data?.appointment?.id
            ? {
                ...event,
                start: new Date(start),
                end: new Date(end),
                resourceId:
                  typeof resourceId === "string"
                    ? parseInt(resourceId)
                    : resourceId,
              }
            : prevEvent
        )
      );
    },
    []
  );

  return (
    <>
      {/* Display selected appointment details */}
      {selectedAppointment && (
        <div className="appointment-details">
          <p><strong>{t('Location')}:</strong> {selectedAppointment.location}</p>
          <p><strong>{t('Resource')}:</strong> {selectedAppointment.resource}</p>
          <p><strong>{t('Address')}:</strong> {selectedAppointment.address}</p>
          <p><strong>{t('Status')}:</strong> {selectedAppointment.status}</p>
        </div>
      )}
    <DnDCalendar
      localizer={localizer}
      events={events}
      date={date}
      views={["month", "week", "day", "agenda"]}
      view={view}
      onView={(view) => setView(view)}
      onNavigate={(date) => {
        setDate(new Date(date));
      }}
      min={new Date(2024, 1, 0, 8, 0, 0)}
      max={new Date(2026, 1, 0, 23, 0, 0)}
      culture={localeMappings[rawLocale] || "en"}
      messages={messages}
      popup
      draggableAccessor={(event) => true}
      onEventDrop={onChangeEventTime}
      onEventResize={onChangeEventTime}
      onSelectEvent={handleEventClick}
    />
    </>
  );
};

export default BigCalendar;