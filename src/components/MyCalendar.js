import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios"; // axios import

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchHolidayData();
  }, []);

  const fetchHolidayData = async () => {
    try {
      const apiKey =
        "9GPu5e9rfCEPcDjNcOv81mqWRcmz15cEogxDynUqnxDDEQLBtvw4w5izyS4lQ9A6R8R5VjcF5twWNuSk9Md0VQ%3D%3D"; // 발급받은 API 키
      const apiUrl = `http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo?solYear=2024&ServiceKey=${apiKey}&_type=json`;

      const response = await axios.get(apiUrl);
      const holidays = response.data.response.body.items.item;

      console.log(holidays);

      const holidayEvents = holidays.map((holiday) => {
        console.log(holiday.locdate);

        let formattedDate = String(holiday.locdate).replace(
          /(\d{4})(\d{2})(\d{2})/,
          "$1-$2-$3"
        );

        return {
          title: holiday.dateName,
          start: new Date(formattedDate),
          end: new Date(formattedDate),
          allDay: true,
          color: "#FF0000",
        };
      });

      setEvents(holidayEvents);
    } catch (error) {
      console.error("Error fetching holiday data:", error);
    }
  };

  return (
    <div style={{ height: "500px" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: "50px" }}
      />
    </div>
  );
};

export default MyCalendar;
