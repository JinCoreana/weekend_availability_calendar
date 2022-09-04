import styled from "@emotion/styled";
import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import Logo from "../assets/logo_white.png";

const Base = styled.div`
  margin-left: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Draft = styled.textarea`
  text-align: left;
  font-size: 20px;
  color: black;
  line-height: 25px;
  width: 500px;
  height: 300px;
  opacity: 0.9;
  border-radius: 50px;
`;

const Copy = styled.button`
  font-size: 25px;
  width: 500px;
  height: 50px;
  border-radius: 20px;
  background-color: white;
`;
const Email = () => {
  const { selectedDateList } = useContext(DataContext);
  const [copied, setCopied] = useState(false);
  const listNum = selectedDateList.length;
  const clipboard =
    "Hi Jin,\n\n Please can you book your time on \n\n" +
    selectedDateList.map((date) => date + "\n") +
    "\n Please find the attached information.";

  return (
    <Base>
      <img src={Logo} style={{ marginBottom: "50px" }} />

      <p>
        Please book your time via sending email at <u>viznari@gmail.com</u>
      </p>
      <p style={{ marginBottom: "20px" }}>
        Send your markups by Friday and get the result on the following Monday.
      </p>
      <h3 style={{ marginBottom: "20px" }}>Quick Email Generator</h3>
      <Draft
        readOnly
        type="text"
        placeholder={
          listNum === 0
            ? "Select all dates that you wish to book.\nThis will generate a draft email."
            : "Hi Jin,\n\n Please can you book your time on \n\n" +
              selectedDateList.map((date) => date + "\n") +
              "\n Please find the attached information."
        }
      />
      <CopyToClipboard text={clipboard}>
        <Copy
          className="btns"
          onClick={() => {
            setCopied(true);
          }}
        >
          {copied ? "Done, Ctrl+V in your email" : "Copy to my clipboard"}
        </Copy>
      </CopyToClipboard>
      <p
        className="last_font"
        style={({ marginBottom: "20px" }, { fontSize: "18px" })}
      >
        The selected time slots will be closed after the receipt of your email.
      </p>
    </Base>
  );
};

export default Email;
