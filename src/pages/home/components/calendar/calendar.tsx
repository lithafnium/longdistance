import React, { useEffect, useState } from "react";
import {
  Container,
  DaySquareContainer,
  Label,
  Arrow,
  CalendarHeader,
  Arrows,
  DayHeader,
  CalendarHeaderLeft,
  CalendearHeaderRight,
} from "./styles";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Button } from "@app/shared/components/index";

import { addMonths, addDays } from "date-fns/fp";
import { getMonth, getYear } from "date-fns";

interface CalendarSquare {
  month: number;
  date: number;
  showMonth: boolean;
}

const colors = ["#513252", "#7A4069", "#CA4E79", "#FFC18E"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

type Mode = "M" | "W" | "D";

interface DaySquareProps {
  dayNumber: number;
  showMonth: boolean;
  month: number;
}

const DaySquare = ({ dayNumber, showMonth, month }: DaySquareProps) => {
  if (showMonth) {
    return (
      <DaySquareContainer>
        <Label>
          {months[month].substring(0, 3)} {dayNumber}
        </Label>
      </DaySquareContainer>
    );
  } else {
    return (
      <DaySquareContainer>
        <Label>{dayNumber}</Label>
      </DaySquareContainer>
    );
  }
};

const Calendar = () => {
  const [curDate, setCurDate] = useState(new Date());
  const [weeks, setWeeks] = useState<CalendarSquare[][]>([]);
  const [mode, setMode] = useState<Mode>("M");

  // sets weeks
  useEffect(() => {
    let newWeeks = [];
    let cur = curDate;
    let curYear = cur.getFullYear();
    let curMonth = cur.getMonth();

    let firstDay = new Date(curYear, curMonth, 1);

    let d = addDays(-1 * firstDay.getDay(), firstDay);
    for (let i = 0; i < 5; i++) {
      let days = [];
      for (let j = 0; j < 7; j++) {
        let showMonth = false;

        if (d.getMonth() !== curMonth || (i == 0 && j == 0)) {
          showMonth = true;
          curMonth = d.getMonth();
        }
        days.push({ month: d.getMonth(), date: d.getDate(), showMonth });
        d = addDays(1, d);
      }

      newWeeks.push(days);
    }

    setWeeks(newWeeks);
    console.log(newWeeks);
  }, [curDate]);

  const setMonth = (change: number) => {
    setCurDate(addMonths(change, curDate));
  };

  const setCalendarMode = (newMode: Mode) => {
    setMode(newMode);
  };

  if (weeks.length !== 0) {
    return (
      <div>
        <CalendarHeader>
          <CalendarHeaderLeft>
            <Button
              style={{ width: "100px" }}
              backgroundColor={colors[2]}
              color="white"
              borderRadius="50px"
              padding="10px 10px"
            >
              New Date
            </Button>
            <Arrows>
              <Arrow onClick={() => setMonth(-1)}>
                <BiChevronLeft />
              </Arrow>
              <Arrow onClick={() => setMonth(1)}>
                <BiChevronRight />
              </Arrow>
            </Arrows>
            <h3>
              {months[getMonth(curDate)]} {getYear(curDate)}
            </h3>
          </CalendarHeaderLeft>
          <CalendearHeaderRight>
            <Button
              style={{ width: "100px" }}
              backgroundColor={colors[1]}
              color="white"
              borderRadius="50px"
              padding="10px 10px"
              onClick={() => setCalendarMode("M")}
            >
              Month
            </Button>
            <Button
              style={{ width: "100px" }}
              backgroundColor={"white"}
              color="black"
              borderRadius="50px"
              padding="10px 10px"
              onClick={() => setCalendarMode("W")}
            >
              Week
            </Button>
            <Button
              style={{ width: "100px" }}
              backgroundColor={"white"}
              color="black"
              borderRadius="50px"
              padding="10px 10px"
              onClick={() => setCalendarMode("D")}
            >
              Day
            </Button>
          </CalendearHeaderRight>
        </CalendarHeader>
        <DayHeader>
          {days.map((e, i) => {
            return <p>{e}</p>;
          })}
        </DayHeader>
        <Container>
          {weeks.map((row, j) =>
            row.map(({ date, month, showMonth }, i) => {
              return (
                <DaySquare
                  dayNumber={date}
                  month={month}
                  showMonth={showMonth}
                  key={i}
                />
              );
            })
          )}
        </Container>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Calendar;
