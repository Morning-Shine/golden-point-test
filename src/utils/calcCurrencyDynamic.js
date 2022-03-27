export function calcCurrencyDynamic(todayValue, yesterdayValue) {
  let diffPercent = (
    Math.round(((yesterdayValue * 100) / todayValue - 100) * 10000) / 10000
  ).toFixed(4);
  return diffPercent;
}
