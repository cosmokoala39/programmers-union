"use client";
import EventSwiper from "./EventSlider"
import React, { useEffect, useState } from "react";


interface Event {
  title: string;
  date: string;
  time: string;
  venue: string;
  image: string;
  url: string;
}

export default function EventList() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch("/sports/events2.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (

    <div className="event-widget">
      
      <div className="event-scroll">
        <EventSwiper/>
        {events.slice(0, 10).map((event, index) => (
          <a
            key={index}
            href={event.url}
            target="_blank"
            className="event-card"
          >
            <div
              className="event-img"
              style={{ backgroundImage: `url(${event.image})` }}
            ></div>
            <div className="event-content">
              <div className="event-date">
                {event.date} {event.time && `@${event.time}`}
              </div>
              <div className="event-title story-title">{event.title}</div>
              <div className="event-venue">{event.venue}</div>
            </div>
          </a>
        ))}
      </div>

      <div className="event-buttons py-3 px-3 ">
        <button className="button">All Events</button>
        <button className="button">Add Event</button>
      </div>
    </div>
  );
}
