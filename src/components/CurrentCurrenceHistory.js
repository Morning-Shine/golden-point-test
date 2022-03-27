import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { ALL_CURRENCY } from "../constants/routs";
import { useDispatch, useSelector } from "react-redux";
import { currencies } from "../redux/currenciesSlice";
import styled from "@emotion/styled";
import HistoryRow from "./HistoryRow";
import { historyLength } from "../constants/historyLength";


export default function CurrentCurrenceHistory() {
  const allCurrensies = useSelector((state) => state.currencies.currencies);
  const dispatch = useDispatch();

  const currency = useParams();
  let currencyMatch;
  if (allCurrensies.length > 0) {
    const currencyList = Object.values(allCurrensies[0].Valute);
    currencyMatch = currencyList.find(
      (item) => item.CharCode === currency.currencyCode
    );
  }

  useEffect(() => {
    if (allCurrensies.length <= historyLength - 1 && allCurrensies.length > 0) {
      let previousUrl = allCurrensies[allCurrensies.length - 1].PreviousURL;
      (async () => {
        const res = await fetch(previousUrl);
        const result = await res.json();
        dispatch(currencies(result));
      })();
    }
  }, [allCurrensies, dispatch]);

  return currencyMatch ? (
    <Cont>
      <Title>
        {`${currencyMatch.Nominal} ${currencyMatch.Name} (${currencyMatch.CharCode}): стоимость в рублях за последние 10 дней `}
      </Title>
      {allCurrensies.map((item, index) => (
        <HistoryRow
          date={item.Date}
          key={item.Date}
          valute={Object.values(item.Valute).find((x) => x.CharCode === currency.currencyCode)}
        />
      ))}
    </Cont>
  ) : (
    <Navigate to={ALL_CURRENCY} />
  );
}

const Cont = styled.div`
  border-radius: 6px;
  width: 50vw;
  margin: 0 auto;
  background: #d0d0d0;
  padding: 1vh 0;
`;

const Title = styled.div`
  color: #0a1c7a;
  border-bottom: #0a1c7a 1px solid;

  padding: 1vh 0;
  font-weight: bolder;
  font-size: larger;
  text-align: center;
`;
