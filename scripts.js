import { podcasts, genres, seasons } from "./data.js";
import { daysAgo } from "./dateConverter.js";

class podcastPreview extends HTMLElement {
  constructor() {
    super();
    this.attachShadow.apply({ mode: "open" });

    this.shadowRoot.innerHTML = `<style>
.thumbnail {
  width: 100%;
  max-width: 380px;
  height: 100%;
  background-color: #202648;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  padding-top: 10px;
  box-shadow: 2px 2px 10px #353342;
  gap: 8px;
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

</style>

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
  }
}

customElements.define("podcast-preview", podcastPreview);
