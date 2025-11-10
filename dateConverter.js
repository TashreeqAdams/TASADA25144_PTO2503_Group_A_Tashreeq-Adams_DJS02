import { podcasts } from "./data.js";

export function daysAgo(isoString) {
  // Create Date objects for the given date and the current date
  const pastDate = new Date(isoString);
  const now = new Date();

  // Calculate the difference in milliseconds and get the absolute value
  const timeDifference = Math.abs(now.getTime() - pastDate.getTime());

  // Convert the difference from milliseconds to days
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  // Return the result as a formatted string
  return `${daysDifference} days ago`;
}
