import moment from "moment";

export const calculateTimeAgo = (date: Date) => {
  const now = moment();
  const past = moment(date);
  const diffInSeconds = now.diff(past, "seconds");
  const diffInMinutes = now.diff(past, "minutes");
  const diffInHours = now.diff(past, "hours");
  const diffInDays = now.diff(past, "days");
  const diffInWeeks = now.diff(past, "weeks");
  const diffInMonths = now.diff(past, "months");

  if (diffInSeconds < 60) {
    return `${diffInSeconds}sec`;
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes}min`;
  } else if (diffInHours < 24) {
    return `${diffInHours}hrs`;
  } else if (diffInDays < 7) {
    return `${diffInDays}days`;
  } else if (diffInWeeks < 4) {
    return `${diffInWeeks}wks`;
  } else {
    return `${diffInMonths}months`;
  }
};
