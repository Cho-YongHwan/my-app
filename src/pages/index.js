// pages/index.js

import React from "react";
import MyCalendar from "../components/MyCalendar";

const events = [
  {
    title: "Meeting",
    start: new Date(2024, 4, 10, 10, 0),
    end: new Date(2024, 4, 10, 12, 0),
  },
  {
    title: "Lunch",
    start: new Date(2024, 4, 11, 12, 0),
    end: new Date(2024, 4, 14, 13, 0),
  },
];

const HomePage = () => (
  <div>
    <h1>My Calendar</h1>
    <MyCalendar events={events} />
  </div>
);

export default HomePage;
