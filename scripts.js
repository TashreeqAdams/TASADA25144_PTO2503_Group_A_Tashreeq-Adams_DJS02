import { podcasts, genres, seasons } from "./data.js";
import { daysAgo } from "./dateConverter.js";

class podcastPreview extends HTMLElement {
  constructor() {
    super();
    this.attachShadow.apply({ mode: "open" });
  }
    connectedCallback() {
      const container = document.createElement("div");
      container.id = "thumbnail-container";
  
      podcasts.forEach((podcast) => {
        const genreTitles = podcast.genres
          .map((genreId) => {
            const genre = genres.find((g) => g.id === genreId);
            return genre ? genre.title : "Unknown";
          })
          .join(", ");
        const splitTitles = genreTitles.split(",");
  
        const podcastThumbnail = document.createElement("div");
        podcastThumbnail.classList.add("thumbnail");
  
        podcastThumbnail.innerHTML = `
          <img class="podcast-img" src="${podcast.image}" alt="${
          podcast.title
        }" />
          <h1 class="podcast-title">${podcast.title}</h1>
          <div class="seasonDetails">
            <i class="fa fa-calendar">🗒</i>
            <p>${podcast.seasons} seasons</p>
          </div>
          <div class="podcast-genres">
            ${splitTitles.map((title) => `<p>${title.trim()}</p>`).join("")}
          </div>
          <p class="podcast-update">Updated ${daysAgo(podcast.updated)}</p>
        `;
  
  
        container.appendChild(podcastThumbnail);
      });
    

customElements.define("podcast-preview", podcastPreview);
