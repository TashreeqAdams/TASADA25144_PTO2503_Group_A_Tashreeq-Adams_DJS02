class PodcastModal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: open });

    this.shadowRoot.innerHTML = `/* Modal Background */
        #modal {
          display: none;
          position: fixed;
          z-index: 1;
          padding-top: 100px;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgba(0, 0, 0, 0.4);
        }

        :host([open]) #modal {
          display: block;
        }

        .modal-content {
          background-color: #202648;
          margin: auto;
          padding: 20px;
          width: 70%;
          border-radius: 10px;
          box-shadow: 5px 5px 10px #353342;
          color: rgb(221, 218, 218);
        }

        .close {
          color: rgb(221, 218, 218);
          float: right;
          font-size: 50px;
          font-weight: bold;
          cursor: pointer;
        }

        .close:hover {
          color: #febf0e;
        }

        .inner-modal {
          display: grid;
          grid-template-columns: 30% 70%;
          grid-template-rows: auto auto;
          gap: 10px;
        }

        #pod-title {
          grid-column: 1 / -1;
          margin: 0;
          padding: 10px 0;
          color: #febf0e;
        }

        img {
          grid-column: 1 / 2;
          width: 100%;
          border-radius: 10px;
          object-fit: cover;
        }

        .modal-info {
          grid-column: 2 / 3;
          padding-left: 20px;
        }

        .modal-info h1 {
          font-size: 22px;
          margin-top: 0px;
        }

        #modal-genres {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }

        .modal-genre-pill {
          padding: 8px;
          background-color: #febe0e;
          border-radius: 20px;
          color: #040214;
        }

        .modal-podcast-seasons {
          grid-column: 1 / -1;
          grid-row: 3 / 4;
        }

        .season {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 50px;
          border-radius: 10px;
          border: solid 1px #febf0e;
          font-size: large;
          padding: 0 10px;
          margin-bottom: 10px;
        }
      </style>

      <div id="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <div class="inner-modal">
            <h1 id="pod-title"></h1>
            <img id="modal-img" />
            <div class="modal-info">
              <h1>Description</h1>
              <p id="modal-desc"></p>
              <h1>Genres</h1>
              <div id="modal-genres"></div>
              <p id="modal-last-updated"></p>
            </div>
            <div id="podcast-seasons" class="modal-podcast-seasons"></div>
          </div>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    this.shadowRoot.querySelector(".close").addEventListener("click", () => {
      this.removeAttribute("open");
      this.dispatchEvent(
        new CustomEvent("modal-closed", { bubbles: true, composed: true })
      );
    });
  }

  disconnectedCallback() {
    this.shadowRoot
      .querySelector(".close")
      .removeEventlistener("click", thise.close);
  }
}
