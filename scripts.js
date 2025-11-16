import { podcasts, genres, seasons } from "./data.js";
import { daysAgo } from "./dateConverter.js";

class podcastPreview extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
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
          <p class="podcast-update">Last updated: ${daysAgo(
            podcast.updated
          )}</p>
        `;

      container.appendChild(podcastThumbnail);
    });

    const style = document.createElement("style");
    style.textContent = `

      #thumbnail-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
        gap: 30px;
      }

      .thumbnail {
        width: 100%;
        max-width: 380px;
        height: 100%;
        background-color: #202648;
        border-radius: 10px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding-top: 10px;
        box-shadow: 2px 2px 10px #353342;
        gap: px;
        cursor: pointer;
      }

      .podcast-img {
        width: 90%;
        border-radius: 10px;
        display: block;
        margin: 0 auto;
      }

      .seasonDetails {
        height: 15px;
        display: flex;
        align-items: center;
        margin-top: 0;
        margin-bottom: 0;
        padding-left: 20px;
        padding-top: 10px;
      }

      .seasonDetails i {
        padding-right: 10px;
        color: #febf0e;
      }

      .seasonDetails,
      .podcast-genres,
      .podcast-update {
        font-size: 17px;
      }

      .podcast-genres,
      .podcast-update {
        margin-top: 0;
        margin-bottom: 0;
        padding-left: 20px;
        padding-top: 10px;
      }

      .podcast-title {
        font-size: 22px;
        margin-top: 0;
        margin-bottom: 0;
        padding-left: 20px;
        padding-top: 10px;
        color: #febf0e;
      }

      .podcast-genres p {
  padding: 8px;
  background-color: #febe0e;
  border-radius: 20px;
  color: #040214;
  margin-top: 0;
  margin-bottom: 0;
}

.podcast-genres {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.podcast-genres p {
  font-size: 14px;
}

@media (max-width: 1200px) {
  #thumbnail-container {
    grid-template-columns: repeat(3, 1fr);
  }

  .inner-modal {
    grid-template-columns: 50% 50%;
    grid-template-rows: auto auto;
  }
}

@media (max-width: 900px) {
  #thumbnail-container {
    grid-template-columns: repeat(2, 1fr);
  }

  .inner-modal {
    display: flex;
    flex-direction: column;
  }

  .inner-modal img {
    width: 70%;
  }

  .modal-info {
    padding-left: 0px;
  }

  .season p {
    font-size: 14px;
  }
  .season p span {
    font-size: 14px;
  }
}

@media (max-width: 600px) {
  #thumbnail-container {
    grid-template-columns: 1fr;
  }

  .inner-modal img {
    width: 100%;
  }

  .close {
    font-size: 30px;
  }

  .season p {
    font-size: 10px;
  }
  .season p span {
    font-size: 10px;
  }

  #pod-title {
    font-size: 20px;
  }

  .modal-info h1 {
    font-size: 20px;
  }

  .modal-info p {
    font-size: 12px;
  }

  #podcast-seasons h1 {
    font-size: 20px;
  }
    `;
    this.shadowRoot.append(style, container);
  }
}

customElements.define("podcast-preview", podcastPreview);
