import { podcasts } from "../data.js";

export function daysAgo(isoString) {
  // Create Date objects for the given date and the current date
  const pastDate = new Date(isoString);
  const now = new Date();

  // Return the result as a formatted string
  return now;
}
