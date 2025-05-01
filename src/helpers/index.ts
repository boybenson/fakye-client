import moment from "moment";

/**
 * Handles API errors consistently across the application
 * @param {Error} err - The error object
 * @param {string} [customMessage] - Optional custom message to display
 * @returns {void}
 * @throws {Error} - Re-throws the error after handling
 */
export function handleApiError(err: any, customMessage?: any) {
  let errorMessage = customMessage || "Something went wrong";

  if (err?.response) {
    console.log("Error response:", err.response.data);
    console.log("Error status:", err.response.status);
    errorMessage = err.response.data.message || errorMessage;
  } else if (err?.request) {
    console.log("No response received:", err.request);
    errorMessage = "No response from server. Please try again.";
  } else {
    console.log("Error message:", err.message);
  }

  alert(`Error: ${errorMessage}`);

  throw err;
}

export const calculateTimeAgo = (date: Date | undefined | null) => {
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
