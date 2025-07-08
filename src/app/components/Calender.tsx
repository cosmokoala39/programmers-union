import InteractionBar from "./InteractionBar";
const days = [
  { label: 'Fri',date: 4, link: 'https://www.staradvertiser.com/calendar/#!/show/?start=2025-07-04'},
  { label: 'Sat', date: 5, link: 'https://www.staradvertiser.com/calendar/#!/show/?start=2025-07-05' },
  { label: 'Sun', date: 6, link: 'https://www.staradvertiser.com/calendar/#!/show/?start=2025-07-06' },
  { label: 'Mon', date: 7, link: 'https://www.staradvertiser.com/calendar/#!/show/?start=2025-07-07' },
  { label: 'Tue',date: 8, link: 'https://www.staradvertiser.com/calendar/#!/show/?start=2025-07-08'},
  { label: 'Wed',date: 9, link: 'https://www.staradvertiser.com/calendar/#!/show/?start=2025-07-09'},
  { label: 'Thu',date:10 , link: 'https://www.staradvertiser.com/calendar/#!/show/?start=2025-07-10'},
  { label: 'Fri',date:11 , link: 'https://www.staradvertiser.com/calendar/#!/show/?start=2025-07-11'},
  { label: 'Sat',date: 12, link: 'https://www.staradvertiser.com/calendar/#!/show/?start=2025-07-12'},
  { label: 'Sun',date: 13, link: 'https://www.staradvertiser.com/calendar/#!/show/?start=2025-07-13'},
  { label: 'Mon',date: 14, link: 'https://www.staradvertiser.com/calendar/#!/show/?start=2025-07-14'},
  { label: 'Tue',date: 15, link: 'https://www.staradvertiser.com/calendar/#!/show/?start=2025-07-15'},
  { label: 'Wed',date: 16, link: 'https://www.staradvertiser.com/calendar/#!/show/?start=2025-07-16'},
  { label: 'Thu',date: 17, link: 'https://www.staradvertiser.com/calendar/#!/show/?start=2025-07-17'},
  { label: 'Fri',date: 18, link: 'https://www.staradvertiser.com/calendar/#!/show/?start=2025-07-18'},
];
export default function Calender(){
    return(
        <div>
            <InteractionBar days={days}/>
        </div>
    )
}