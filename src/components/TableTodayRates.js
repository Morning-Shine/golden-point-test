import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currencies } from "../redux/currenciesSlice";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import { exchangeRatesToday } from "../constants/url";
import TableItemRow from "./TableItemRow";
import { formatDate } from "../utils/formatDate";

export default function TableTodayRates() {
  const [fetching, setFetching] = useState(true);
  const [data, setData] = useState(null);
  const allCurrensies = useSelector((state) => state.currencies.currencies);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let response = await fetch(exchangeRatesToday);
      if (response.ok) {
        let responseJson = await response.json();
        setFetching(false);
        setData(responseJson);
      } else {
        setFetching(false);
        setData(null);
      }
    })();
    return () => {
      setFetching(true);
      setData(null);
    };
  }, []);

  let currency;
  if (data) {
    currency = Object.values(data.Valute);
  }

  let matchStore;
  if (allCurrensies && data) {
    matchStore = allCurrensies.find(item => item.PreviousURL === data.PreviousURL)
  }
  if (!matchStore && data) {
    dispatch(currencies(data));
  }

  const renderTable = (
    <Table aria-label="simple table" stickyHeader>
      <TableHead>
        <TableRow>
          <StyledTableHeaderCell>Код валюты</StyledTableHeaderCell>
          <StyledTableHeaderValue>Значение</StyledTableHeaderValue>
          <StyledTableHeaderCell>
            Изменение в % от предыдущего дня
          </StyledTableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {currency
          ? currency.map((item) => <TableItemRow key={item.ID} item={item} currenciesArray={currency} />)
          : null}
      </TableBody>
    </Table>
  );

  const renderLoading = (
    <StyledTypographyInfo>
      Происходит загрузка данных. Пожалуйста, подождите.
    </StyledTypographyInfo>
  );

  const renderError = (
    <StyledTypographyInfo>
      Ошибка загрузки данных. Пожалуйста, повторите попытку позже.
    </StyledTypographyInfo>
  );

  return (
    <StyledTableContainer>
      <StyledTypography variant="h6">
        Курс валют в рублях на {formatDate(new Date())}
      </StyledTypography>
      {fetching === false ? (data ? renderTable : renderError) : renderLoading}
    </StyledTableContainer>
  );
}

const StyledTableContainer = styled(TableContainer)`
  border-radius: 6px;
  width: 70vw;
  height: 80vh;
  max-height: 80vh;
  margin: 0 auto;
  background: #d4d4d4;
`;

const StyledTableHeaderCell = styled(TableCell)`
  border-color: #0a1c7a;
  color: #0a1c7a;
  background-color: #d0d0d0;
  font-size: larger;
  padding-left: 5vw;
`;
const StyledTableHeaderValue = styled(TableCell)`
  border-color: #0a1c7a;
  color: #0a1c7a;
  background-color: #d0d0d0;
  font-size: larger;
  text-align: right;
  padding: 0 5vw;
`;

const StyledTypography = styled(Typography)`
  background-color: #d0d0d0;
  color: #0a1c7a;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  font-size: larger;
  padding: 25px 0 5px;
`;

const StyledTypographyInfo = styled(Typography)`
  background-color: #d0d0d0;
  color: #0a1c7a;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  font-size: larger;
`;
