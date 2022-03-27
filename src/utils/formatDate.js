export function formatDate(date) {
  const day = date.getDate();
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  const year = date.getFullYear()
  const formattedDate = `${day}.${month}.${year}`;
  return formattedDate;
}
