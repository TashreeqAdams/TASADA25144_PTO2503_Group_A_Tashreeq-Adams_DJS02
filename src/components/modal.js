import { podcasts, genres, seasons } from "../data.js";
import { daysAgo } from "../utilities/dateConverter.js";

const modal = document.getElementById("modal");
const preview = document.querySelector("podcast-preview");
const shadow = preview.shadowRoot;
const openModal = shadow.querySelectorAll(".thumbnail");
const closeModal = document.getElementsByClassName("close");

/**
 * Loop through all elements with class "thumbnail"
 * Adds a click listener to each thumbnail that tracks which item was clicked
 * and displays that data in the inner modal
 */
for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener("click", () => {
    const currentPodcast = podcasts[i];
    const podcastSeasons = seasons[i];

    const genreTitles = currentPodcast.genres
      .map((genreId) => {
        const genre = genres.find((g) => g.id === genreId);
        return genre ? genre.title : "Unknown";
      })
      .join(", ");

    // If currentPodcast exists and it has an id populate the inner modal with this data

    if (currentPodcast && currentPodcast.id) {
      const podTitle = document.getElementById("pod-title");
      const descEl = document.getElementById("modal-desc");
      const imgEl = document.getElementById("modal-img");
      const genreEl = document.getElementById("modal-genres");
      const updatedEl = document.getElementById("modal-last-updated");
      const seasonsEl = document.getElementById("podcast-seasons");

      if (podTitle) {
        podTitle.innerText = currentPodcast.title;
      } else {
        console.warn("Title not found");
      }

      if (descEl) {
        descEl.innerText = currentPodcast.description;
      } else {
        console.warn("Object ID not found");
      }

      if (imgEl) {
        imgEl.src = currentPodcast.image;
      } else {
        console.warn("Image not found");
      }

      if (genreEl) {
        const splitTitles = genreTitles.split(",");
        genreEl.innerHTML = "";
        splitTitles.forEach((item) => {
          const p = document.createElement("p");
          p.classList.add("modal-genre-pill");
          p.textContent = item;
          genreEl.appendChild(p);
        });
      } else {
        console.warn("Genre not found");
      }

      if (updatedEl) {
        updatedEl.innerText = `Last updated: ${daysAgo(
          currentPodcast.updated
        )}`;
      } else {
        console.warn("Date not found");
      }

      if (seasonsEl && Array.isArray(podcastSeasons.seasonDetails)) {
        seasonsEl.innerHTML = "<h1>Seasons</h1>";
        podcastSeasons.seasonDetails.forEach((season) => {
          const seasonItem = document.createElement("div");
          seasonItem.classList.add("season");

          seasonItem.innerHTML = `<p>${season.title}<p><span>${season.episodes} episodes<span>`;

          seasonsEl.appendChild(seasonItem);
        });
      } else {
        console.warn("Seasons not found");
      }

      modal.showModal();
    } else {
      console.warn("Podcast ID not found");
    }
  });
}

// Loop through all elements with class "close"
for (let i = 0; i < closeModal.length; i++) {
  closeModal[i].addEventListener("click", () => {
    modal.close();
  });
}
