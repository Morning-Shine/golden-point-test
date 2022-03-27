export function formatValue(value) {
  const formattedValue = ((value * 10000) / 10000).toFixed(4);
  return formattedValue;
}
