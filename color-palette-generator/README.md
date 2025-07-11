# Color Palette Generator 🎨

A playful and interactive web app that generates random color codes, displays them in a stylish animated box, and lets you copy them with a single click. Built with HTML, SCSS, jQuery, and jQuery UI for a modern and fun user experience.

---

## Live Preview

[View the app live!](https://your-live-link-here.com)

---

## Table of Contents

- [Features](#features)
- [How It Works](#how-it-works)
- [Getting Started](#getting-started)
- [File Structure](#file-structure)
- [Tech Stack & Credits](#tech-stack--credits)
- [Screenshots](#screenshots)

---

## Features

- **Random Color Generation:**  
  Click the "Generate Color" button to instantly get a new random hex color code.

- **Animated Bounce Effect:**  
  The color box bounces with a fun animation every time a new color is generated, thanks to jQuery UI.

- **Copy to Clipboard:**  
  Click the color box to copy the displayed color code. A "Copied!" message appears for feedback, then reverts to the color code.

- **Modern, Playful UI:**  
  Uses Google Fonts (Fredoka One & Baloo 2) and Font Awesome icons for a friendly, modern look. The layout is responsive and visually appealing.

- **Live Feedback:**  
  When generating a new color, the color box displays "Generating..." for 2 seconds before revealing the new color, enhancing the user experience.

---

## How It Works

### 1. HTML Structure

- The main container (`.container`) holds:
  - A logo image
  - The app title with a palette icon
  - A description
  - The color display box (`#colorBox`)
  - The color code (`#colorCode`)
  - The "Generate Color" button with a paint brush icon
  - An info message for users

- External resources are loaded via CDN:
  - Google Fonts: Fredoka One & Baloo 2
  - Font Awesome for icons
  - jQuery and jQuery UI for interactivity and animation

### 2. Styling (SCSS/CSS)

- **Variables:**  
  Colors, gradients, and transitions are defined as SCSS variables for easy customization.

- **Layout:**  
  The app is centered on the page with a dark, modern background and a card-like container.

- **Color Box:**  
  Large, rounded, and animated. On hover, it scales up and gets a glowing shadow.

- **Button:**  
  Uses a gradient background and scales up on hover with a shadow effect.

- **Fonts & Icons:**  
  Playful fonts and relevant icons make the UI engaging and friendly.

### 3. JavaScript (jQuery + jQuery UI)

- **Random Color Generation:**  
  The `getRandomColor()` function creates a random hex color code.

- **Generate Button:**  
  When clicked:
  1. The color box displays "Generating..." for 2 seconds.
  2. After 2 seconds, the box and page background update to the new color.
  3. The color code is updated and the box bounces for visual feedback.

- **Copy to Clipboard:**  
  Clicking the color box copies the color code to the clipboard, shows "Copied!" for 1 second, then restores the color code.

- **Hover Effects:**  
  The color box grows and glows on hover, both via CSS and (optionally) via JavaScript for dynamic effects.

---

## Getting Started

1. **Clone or download this repository.**
2. **Open `index.html` in your browser.**
3. **Click "Generate Color" and enjoy the interactive experience!**

---

## File Structure

```
color-palette-generator/
│
├── index.html        # Main HTML file
├── styles.scss       # Source SCSS styles (edit this for custom styles)
├── styles.css        # Compiled CSS (generated from SCSS)
├── styles.css.map    # Source map for CSS (optional)
├── script.js         # JavaScript for interactivity and animation
└── README.md         # Project documentation
```

---

## Tech Stack & Credits

- **HTML5 & SCSS/CSS3** — Structure and styling
- **jQuery** — DOM manipulation and event handling
- **jQuery UI** — Animation effects (bounce)
- **Google Fonts:** [Fredoka One](https://fonts.google.com/specimen/Fredoka+One), [Baloo 2](https://fonts.google.com/specimen/Baloo+2)
- **Font Awesome** — Icons

---

## Screenshots

<!-- Add a screenshot of your app here -->
![Color Palette Generator Screenshot](screenshot.png)

---

**Made with ❤️ by tobilobaCodes**