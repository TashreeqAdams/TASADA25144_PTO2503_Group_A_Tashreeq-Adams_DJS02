# DJS02 Challenge – Web Component: Podcast Preview

## Overview

This project focuses on building a reusable, self-contained Web Component that displays a podcast preview. Designed using the Web Component standard and registered with customElements.define(), this custom element works independently from the main application logic while improving modularity and reducing code duplication. The component accepts podcast data via attributes or properties, renders a clean UI preview, and communicates with the parent application through custom events. It emphasizes Shadow DOM encapsulation, responsive UI design, and best practices for component-based architecture in vanilla JavaScript.

## Technologies include

The project includes:

- HTML
- CSS
- JavaScript(Web Components, Shadow DOM)
- GitHub

## Features Created

The project includes:

- A fully encapsulated custom HTML element registered with customElements.define().
- Supports passing podcast data (cover image, title, genres, number of seasons, last updated date) through attributes or properties.
- Stateless design—component relies entirely on data from the parent application.
- Shadow DOM encapsulation to isolate styling and avoid global CSS conflicts.
- Dispatches a custom event when clicked, allowing the parent app to open a modal or trigger related actions.
- A clean UI displaying a podcast cover image, title, genre names, season count, and a human-readable last updated date.
- Fully responsive design consistent with the app’s overall style across desktop and mobile devices.

### How to Use This Project

1. Include the Web Component file (e.g., scripts.js) in your HTML.
2. Register the component using the provided script.
3. Pass podcast data via attributes or JavaScript properties.
4. Listen for the custom interaction event to trigger modal opening or other app logic.
5. View the component on the included demo HTML page to see it in action.
