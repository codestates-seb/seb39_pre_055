/* eslint-disable consistent-return */
/** getDateToString('2021-11-17') or getDateToString('2021-11-17 00:00:00') */
export const getDateToString = (value: string) => {
  const today = new Date();
  const timeValue = new Date(`${value}Z`);

  const betweenTime = Math.floor(
    (today.getTime() - timeValue.getTime()) / 1000 / 60
  );
  if (betweenTime < 60) {
    return `${betweenTime + 1} mins ago`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour} hours ago`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    return `${betweenTimeDay} days ago`;
  }

  return `${Math.floor(betweenTimeDay / 365)} years ago`;
};

/** getSpecificDate('-', -7) => 7일 전 timeStamp (1692305000) */
export const getSpecificDate = (pattn: '-' | '/', num: number) => {
  const current = new Date().toString();
  const temp = new Date(Date.parse(current) + num * 1000 * 60 * 60 * 24);
  const year = temp.getFullYear();
  let month: number | string = temp.getMonth() + 1;
  let day: number | string = temp.getDate();

  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;

  return year + pattn + month + pattn + day;
};

/** formatNumber(12000) => 1.2m */
export const formatNumber = (n: number) => {
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return `${+(n / 1e3).toFixed(1)}k`;
  if (n >= 1e6 && n < 1e9) return `${+(n / 1e6).toFixed(1)}m`;
  if (n >= 1e9 && n < 1e12) return `${+(n / 1e9).toFixed(1)}b`;
  if (n >= 1e12) return `${+(n / 1e12).toFixed(1)}t`;
};
