import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Tooltip from "@mui/material/Tooltip";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { calcCurrencyDynamic } from "../utils/calcCurrencyDynamic";
import { formatValue } from "../utils/formatValue";


export default function TableItemRow({ item }) {
  const different = calcCurrencyDynamic(item.Value, item.Previous);
  const formattedValue = formatValue(item.Value);
  return (
    <Tooltip title={`${item.Nominal} ${item.Name}`}>
      <StyledTableRow>
        <StyledTableCell>
          <StyledLink to={`/currencies/${item.CharCode}`}>
            {`${item.CharCode}`}
          </StyledLink>
          {` (${item.NumCode})`}
        </StyledTableCell>
        <StyledTableCellValue>{formattedValue}</StyledTableCellValue>
        {different[0] === "-" ? (
          <StyledTableMinor>{different}</StyledTableMinor>
        ) : (
          <StyledTableMajor>{different}</StyledTableMajor>
        )}
      </StyledTableRow>
    </Tooltip>
  );
}

const StyledTableRow = styled(TableRow)`
  &:hover {
    background-color: #7cbfde;
  }
`;

const StyledTableCell = styled(TableCell)`
  border-color: #7cbfde;
  color: #0a1c7a;
  font-size: medium;
  padding-left: 5vw;
`;

const StyledTableCellValue = styled(TableCell)`
  border-color: #7cbfde;
  color: #0a1c7a;
  font-size: medium;
  padding: 0 5vw;
  text-align: right;
`;

const StyledTableMajor = styled(TableCell)`
  border-color: #7cbfde;
  color: orangered;
  font-size: medium;
  padding-left: 5vw;
`;
const StyledTableMinor = styled(TableCell)`
  border-color: #7cbfde;
  color: green;
  font-size: medium;
  padding-left: 5vw;
`;
const StyledLink = styled(Link)`
  color: inherit;
`;
