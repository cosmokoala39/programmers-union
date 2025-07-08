'use client';

import { FaCalendarAlt } from 'react-icons/fa'; // Font Awesome calendar icon
import Link from 'next/link';

type DayItem = {
  label: string; // "Mon", "Tue", etc.
  date: number; // just the day number, like 7, 8, 9
  link: string; // full link to the calendar entry
};

type Props = {
  days: DayItem[];
};

const InteractionBar = ({ days }: Props) => {
  return (
    <div className="w-full calender">
      <div
        className="footer-dates d-flex flex-wrap align-items-center"
        style={{ maxHeight: '50px', overflow: 'hidden' }}
      >
        <Link
          href="https://www.staradvertiser.com/calendar/"
          className="cal text-black me-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaCalendarAlt />
        </Link>

        {days.map((day, index) => (
          <Link
            key={index}
            href={day.link}
            className="date text-center text-black ml-5 me-2 date-padding text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="footer-day small">{day.label}</div>
            <div className="footer-date ">{day.date}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InteractionBar;
