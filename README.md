# Stories From Space — 3D Space Museum Edition

A static, CSS-based 3D visual redesign using vanilla HTML, CSS and JavaScript. No framework or build tools.

## Run
Open this folder in VS Code and launch `index.html` with Live Server.

## Add NASA photographs
Put your chosen, credited NASA images in `assets/images/` using the filenames already referenced in the HTML. Keep the image credit/source with each asset.

## Add narration
Put MP3 recordings in `assets/audio/` using the filenames documented in the audio section of the previous project README / app.js.

## 3D design notes
The planets, orbital rings, depth, exhibit cards and image frames use CSS 3D transforms and gradients. They are intentionally static: no automatic rotation, floating, or motion. The site remains vanilla HTML/CSS/JS.

## Accessibility
Keyboard focus styles, responsive layouts, language and theme controls remain available.


## Learning features
- Each story chapter starts with a short summary.
- “Add more details” expands the full paragraph.
- “Listen to me” reads the summary using the browser speech engine.
- Every press on “Listen to me” adds 20% to the learning bar (maximum 100% after five presses); progress is saved in localStorage.
- Every chapter includes one mini-game with three questions; wrong answers are red and correct answers are green.
- The home-page tagline now appears inside Explore Missions.
- Mini-games and story controls are bilingual (Arabic/English).
- Each chapter quiz has three working questions, answer feedback, next-question navigation, a score screen, and replay.
- Animated twinkling stars and shooting stars appear behind the pages.
