import { podcasts } from "../data.js";

export function daysAgo(isoString) {
  const pastDate = new Date(isoString);

  return `Updated ${pastDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })}`;
}
