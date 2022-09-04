import React from "react";
import { format } from "date-fns";
import styled from "@emotion/styled";
import { isSameDay } from "./utils";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Background from "../assets/not_working.png";
import Add from "../assets/add.png";

const Container = styled.div`
  width: 100%;
  top: 50px;
  height: 100%;
  opacity: 1;
  background-image: ${({ isAvailable }) =>
    isAvailable ? null : "url(" + Background + ")"};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  cursor: ${({ isAvailable }) => (isAvailable ? "pointer" : null)};
  &:hover {
    background-image: ${({ isAvailable }) =>
      isAvailable ? "url(" + Add + ")" : null};
  }
`;

const TableData = styled.td`
  border: 0.2px solid #5e5e5e;
  text-align: center;
  color: #c9c8cc;
  padding: 8px;
  position: relative;
`;

const DisplayDate = styled.div`
  color: ${({ isToday }) => isToday && "#F8F7FA"};
  background-color: ${({ isToday, isSelected, isAvailable }) =>
    isAvailable ? (isSelected ? "#f3c90d" : isToday ? "#313133" : "") : ""};
  display: flex;
  font-size: 20px;
  color: ${({ isSelected, isToday }) =>
    isSelected ? (isToday ? "white" : "black") : "white"};
  justify-content: center;
  border-radius: 50%;
  align-self: center;
  align-items: center;
  position: absolute;
  top: 2px;
  width: 35px;
  height: 35px;
`;

const CalendarDay = ({ date, work }) => {
  const { selectedDate, setSelectedDate, setSelectedDateList } =
    useContext(DataContext);
  const today = new Date();

  const handleDateSelect = (d, work) => {
    if (work === "yes") {
      setSelectedDate(new Date(selectedDate.setDate(d)));
      const stringDate = format(
        new Date(selectedDate.setDate(d)),
        "[ dd-MMMM-yyyy ]"
      );

      setSelectedDateList((prev) => [...prev, stringDate]);
    }
  };

  return (
    <TableData
      key={`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`}
      align="center"
    >
      <Container
        className="select_date"
        isAvailable={work === "yes" ? true : false}
        onClick={() => handleDateSelect(date.getDate(), work)}
      >
        <DisplayDate
          className="date"
          isAvailable={work === "yes" ? true : false}
          isSelected={isSameDay(selectedDate, date)}
          isToday={isSameDay(today, date)}
        >
          {date.getDate()}
        </DisplayDate>
      </Container>
    </TableData>
  );
};

export default CalendarDay;
