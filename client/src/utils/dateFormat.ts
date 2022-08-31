/** value == '2021-11-17' || '2021-11-17 00:00:00' */
export const dateFormatToString = (value: string) => {
  const today = new Date();
  const timeValue = new Date(value);

  const betweenTime = Math.floor(
    (today.getTime() - timeValue.getTime()) / 1000 / 60
  );
  if (betweenTime < 60) {
    return `${betweenTime} mins ago`;
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

export const getSpecificDate = (pattn: '-' | '/', num: number) => {
  const current = new Date().toString();
  // 1000 : 밀리세컨드,  60 : 1분, 60 : 1시간, 24 : 24시간 = 86400000 밀리세컨드
  const temp = new Date(Date.parse(current) + num * 1000 * 60 * 60 * 24);
  const year = temp.getFullYear();
  let month: number | string = temp.getMonth() + 1;
  let day: number | string = temp.getDate();

  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;

  return year + pattn + month + pattn + day;
};
