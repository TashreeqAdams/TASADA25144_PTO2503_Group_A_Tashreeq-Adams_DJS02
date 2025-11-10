import { podcasts, genres, seasons } from "./data.js";
import { daysAgo } from "./dateConverter.js";

/**
 * Reads through the array and adds the thumbnails with its information into the DOM.
 *
 * Finds the podcast image, title, season count, genres and last updated time in the 'podcast' array,
 * creates the thumbnail elements and appends each thumbnail to the #thumbnail-container.
 *
 * @param {Array<Object>} podcasts - Array of podcast objects.
 * @param {Array<Object>} genres - Array of genre objects used to match genre IDs and titles.
 */

podcasts.forEach((podcast) => {
  /**
   * Renders a string for the genres of the current thumbnail.
   *
   * For each 'podcast.genre' an id is collected and matched with
   * a corresponding id from the genre objects in the genres array.
   * If no match the default genre is "unknown".
   *
   * @type {string}
   */
  const genreTitles = podcast.genres
    .map((genreId) => {
      const genre = genres.find((g) => g.id === genreId);
      return genre ? genre.title : "Unknown";
    })
    .join(", ");

  /**
   * Splits the joined comma-separated genres into an array.
   */
  const splitTitles = genreTitles.split(",");

  const thumbnail = document.getElementById("thumbnail-container");

  const podcastThumbnail = document.createElement("div");
  podcastThumbnail.classList.add("thumbnail");

  // Sets the data in the thumbnail to be displayed
  podcastThumbnail.innerHTML = `
      <img class="podcast-img" src="${podcast.image}" alt="${podcast.title}" />
      <h1 class="podcast-title">${podcast.title}</h1>
      <div class="seasonDetails">
        <i class="fa fa-calendar"></i>
        <p>${podcast.seasons} seasons</p>
      </div>
        <div class="podcast-genres">${splitTitles
          .map((title) => `<p>${title.trim()}</p>`)
          .join("")}</div>
        <p class="podcast-update">Updated ${daysAgo(podcast.updated)}</p>
    `;

  // Appends the thumbnail to the #thumbnail-container.
  thumbnail.appendChild(podcastThumbnail);
});
