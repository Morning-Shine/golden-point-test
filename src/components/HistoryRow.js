import React from "react";
import { formatDate } from "../utils/formatDate";
import styled from "@emotion/styled";

export default function HistoryRow({ date, valute }) {
  const datePrint = formatDate(new Date(date));
  return (
    <Cont>
      <DateColumn>{datePrint}</DateColumn>
      <ValueColumn>{(valute.Value).toFixed(2)}</ValueColumn>
    </Cont>
  );
}

const Cont = styled.div`
  background: #d4d4d4;
  height: 4vh;
  display: grid;
  grid-template-columns: auto auto;
  padding: 0 1vw;
  border-bottom: #7cbfde 1px solid;
  color: #0a1c7a;
  align-items: center;
`;

const DateColumn = styled.div`
  vertical-align: middle;
  text-align: center;
`;

const ValueColumn = styled.div`
text-align: right;
padding-right: 60%;
`;
