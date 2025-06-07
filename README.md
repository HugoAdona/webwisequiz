# WebWise: The Dev Challenge

## Overview

This repository contains the source code for WebWise, an interactive quiz web application designed to assess and enhance users' knowledge of web development. The quiz focuses on fundamental concepts of HTML, CSS, and JavaScript, presented in a clean, user-friendly interface with a vibrant, retro-inspired design.

## Features

- **Interactive Quiz**: Five multiple-choice questions covering HTML, CSS, and JavaScript basics.
- **Score Tracking**: Displays the user's score at the end, with a congratulatory message for a perfect score.
- **Responsive Design**: Optimized for desktop and mobile devices with a centered layout.
- **Dynamic UI**: Updates question and answer options dynamically using React state management.
- **Stylish Aesthetics**: Features a yellow-themed design with hover effects and box shadows for a polished look.

## Technologies Used

- **React**: JavaScript library for building the interactive quiz component (`App.jsx`).
- **CSS3**: Custom styles in `App.css` for layout, typography, and visual effects.
- **Tailwind CSS**: Not explicitly used in the provided files, but compatible with the project structure.
- **Fonts**: Uses system fonts (Verdana, Geneva, Tahoma, sans-serif) for answer buttons.

## File Structure

- `App.jsx`: Main React component containing the quiz logic, state management, and UI rendering.
- `App.css`: CSS styles for the quiz app, including layout, colors, and hover effects.
- `public/`: Directory for static assets (e.g., `index.html`, favicon, etc.).
- `src/`: Directory containing `App.jsx` and `App.css`.

## Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/HugoAdona/webwisequiz.git
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd webwisequiz
   ```
3. **Install Dependencies**:
   Ensure Node.js is installed, then run:
   ```bash
   npm install
   ```
4. **Run the Application**:
   Start the development server:
   ```bash
   npm start
   ```
   Open `http://localhost:3000` in your browser to view the quiz.

## Usage

- **Start the Quiz**: The quiz begins with the first question displayed.
- **Answer Questions**: Click an answer button to select an option and proceed to the next question.
- **View Score**: After answering all questions, see your score out of 5. A perfect score (4/5, due to a bug in the scoring logic) displays a congratulatory message.
- **Responsive Viewing**: Test the quiz on different screen sizes for a consistent experience.

## Deployment

The website is deployed on GitHub Pages at [https://hugoadona.github.io/webwisequiz](https://hugoadona.github.io/webwisequiz). To deploy updates:

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```
   Ensure the `gh-pages` package is installed and configured in `package.json`.

## Known Issues

- **Scoring Bug**: The congratulatory message for a perfect score triggers at 4/5 instead of 5/5 due to a logic error in `App.jsx` (`score == questions.length - 1`). This can be fixed by updating the condition to `score === questions.length`.

## Contributing

This is a personal project, but feedback and suggestions are welcome! Feel free to open an issue or submit a pull request with improvements, such as fixing the scoring bug or adding more questions.

## License

© 2025 Hugo Adona. All rights reserved.

## Contact

Connect with me via:

- [GitHub](https://github.com/HugoAdona)
- [Instagram](https://www.instagram.com/hugo_adona)
- [X](https://x.com/HugoAdona)