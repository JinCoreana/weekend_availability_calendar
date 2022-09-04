import React, { useMemo } from "react";
import styled from "@emotion/styled/macro";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import CalendarDay from "./CalendarDay";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Email from "./Email";
import dates from "../data/db";

const MainPage = styled.div`
  display: flex;
  flex-direction: row;
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;
  width: 300px;
  padding: 8px 24px;
  font-size: 30px;
  font-weight: normal;
  text-align: center;
  color: #f8f7fa;
`;

const ArrowButton = styled.button`
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  background-color: transparent;
  font-size: 40px;
  cursor: pointer;
  color: #f8f7fa;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  height: 90%;
  border-spacing: 0;
`;

const TableHeader = styled.thead`
  padding-block: 12px;
  > tr {
    > th {
      padding-block: 12px;
      font-weight: normal;
      color: #f8f7fa;
      font-size: 20px;
    }
  }
`;

const TableBody = styled.tbody`
  > tr {
    > td {
      width: 100px;
      height: 100px;
      box-sizing: border-box;
    }
  }
`;

const TableData = styled.td`
  border: 0.2px solid #5e5e5e;
  text-align: center;
  color: #c9c8cc;
  padding: 8px;
  position: relative;
`;

const Base = styled.div`
  min-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  padding: 24px;
  height: 120%;
  box-sizing: border-box;
  background-color: #28272a;
  opacity: 0.8;
  ${Header} + ${Table} {
    margin-top: 10px;

    /* width: 100%;
  height: 100vh;
  padding: 24px 12px;
  display: flex;
  flex-direction: column ;
  align-items: center;
  box-sizing: border-box;
  background-color: #28272A;
  ${Header} + ${Table} {
    margin-top: 40px; */
  } ;
`;

const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const MONTHS = [
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

const Calendar = () => {
  const { selectedDate, setSelectedDate } = useContext(DataContext);

  const { year, month, firstDay, lastDay } = useMemo(() => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();

    return {
      year,
      month,
      firstDay: new Date(year, month, 0),
      lastDay: new Date(year, month + 1, 0),
    };
  }, [selectedDate]);

  const selectDate = (date) => {
    setSelectedDate(date);
  };

  const pad = () =>
    [...Array(firstDay.getDay()).keys()].map((p) => (
      <TableData key={`pad_${p}`} />
    ));

  const range = () =>
    [...Array(lastDay.getDate()).keys()].map((d) => {
      const thisDay = new Date(year, month, d + 1);

      return (
        <CalendarDay
          key={d}
          date={thisDay}
          work={dates[MONTHS[month]][d].work || false}
        />
      );
    });

  const render = () => {
    const items = [...pad(), ...range()];

    const weeks = Math.ceil(items.length / 7);

    return [...Array(weeks).keys()].map((week) => (
      <tr key={`week_${week}`}>{items.slice(week * 7, week * 7 + 7)}</tr>
    ));
  };

  return (
    <MainPage className="main_page">
      <Base className="base">
        <Header className="header">
          <ButtonContainer>
            {year === 2022 && MONTHS[month] !== "September" ? (
              <ArrowButton
                pos="left"
                onClick={() =>
                  selectDate(
                    new Date(selectedDate.setMonth(selectedDate.getMonth() - 1))
                  )
                }
              >
                <BiChevronLeft />
              </ArrowButton>
            ) : null}
            <Title className="title">{`${MONTHS[month]} ${year}`}</Title>
            {year === 2022 && MONTHS[month] !== "December" ? (
              <ArrowButton
                pos="right"
                onClick={() =>
                  selectDate(
                    new Date(selectedDate.setMonth(selectedDate.getMonth() + 1))
                  )
                }
              >
                <BiChevronRight />
              </ArrowButton>
            ) : null}
          </ButtonContainer>
        </Header>
        <Table>
          <TableHeader className="table_header">
            <tr>
              {DAYS.map((day, index) => (
                <th key={day} align="center">
                  {day}
                </th>
              ))}
            </tr>
          </TableHeader>
          <TableBody className="table_body">{render()}</TableBody>
        </Table>
      </Base>
      <Email />
    </MainPage>
  );
};

export default Calendar;
