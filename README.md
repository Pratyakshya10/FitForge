# FitForge

**FitForge** is an interactive 30-day fitness planner built with React. It helps users follow a structured Push/Pull/Legs workout routine, track their daily progress, save workout data, and unlock each day only after completing the previous one.

The goal of FitForge is simple: make workout consistency feel visual, structured, and motivating.

---

## Live Demo

**Live Site:** *https://fitforge0.netlify.app/*

```txt
https://fitforge0.netlify.app/
```

---

## Preview

### Home

<img width="1511" height="832" alt="Image" src="https://github.com/user-attachments/assets/eeaa6420-7a91-4f29-b98d-1b8a3f749f3c" />

### Training Plan

<img width="1507" height="818" alt="Image" src="https://github.com/user-attachments/assets/5bf7ce91-e403-4d71-b911-50b0755ab655" />

<img width="1270" height="867" alt="Image" src="https://github.com/user-attachments/assets/a2b9d720-db70-43d8-b613-3079e9d09847" />

### Exercise Description

<img width="1242" height="832" alt="Image" src="https://github.com/user-attachments/assets/ede45a57-4a78-421d-9145-a3484b9663d3" />


---

## Features

* Interactive 30-day workout grid
* Push / Pull / Legs training structure
* Progressive unlocking system
* Future workout days stay locked until the previous day is completed
* Completed days show a check icon
* Locked days show a lock icon
* Clickable workout cards
* Detailed workout view for each day
* Warmup and workout exercise sections
* Max weight input for each exercise
* Save & Exit functionality
* Complete workout functionality
* Progress tracking with percentage
* Saved progress using `localStorage`
* Saved user name input
* Exercise help modal with name and description
* Responsive layout
* Clean dark-themed UI

---

## Tech Stack

* React
* Vite
* JavaScript
* CSS
* Font Awesome
* LocalStorage
* Netlify

---

## What I Learned

While building FitForge, I practiced:

* React component structure
* Passing props between components
* Conditional rendering
* State management with `useState`
* Persisting data using `localStorage`
* Handling user interactions
* Building reusable components
* Creating modals
* Styling responsive layouts
* Deploying a Vite React app on Netlify

---

## Project Structure

```txt
FitForge/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Grid.jsx
│   │   ├── Hero.jsx
│   │   ├── Layout.jsx
│   │   ├── Modal.jsx
│   │   └── WorkoutCard.jsx
│   ├── utils/
│   │   └── index.js
│   ├── App.jsx
│   ├── App.css
│   ├── fanta.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

---

## Core Functionality

### Progressive Unlocking

FitForge unlocks workout days one by one.

* Day 01 is unlocked by default.
* Day 02 unlocks after Day 01 is completed.
* Day 03 unlocks after Day 02 is completed.
* This continues until the full 30-day routine is completed.

This makes the app feel like a real guided challenge instead of just a static workout list.

---

### Save & Exit

Users can enter their max weight for exercises and save their data without completing the workout.

The saved data stays available even after refreshing the page because FitForge uses `localStorage`.

---

### Complete Workout

When a user completes a workout:

* The current day is marked as completed.
* A check icon appears on that day.
* The next workout day gets unlocked.
* Progress percentage updates automatically.

---

### Exercise Help Modal

Each exercise includes a help icon. Clicking it opens a modal showing:

* Exercise name
* Exercise description
* Close option

This makes the workout plan easier to understand, especially for beginners.

---

## Installation and Setup

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/FitForge.git
```

Move into the project folder:

```bash
cd FitForge
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

---

## Deployment

This project is deployed using Netlify.

For Vite projects, Netlify settings should be:

```txt
Build command: npm run build
Publish directory: dist
```

---

## Author

Built by **Pratyakshya Mishra**

* GitHub: ![https://github.com/Pratyakshya10](https://github.com/Pratyakshya10)
* LinkedIn: ![https://www.linkedin.com/in/pratyakshya-mishra-12a80a39a/](https://www.linkedin.com/in/pratyakshya-mishra-12a80a39a/)

---

## Acknowledgement

Built while learning full-stack development and React through hands-on project-based practice.

Special thanks to the Smoljames full-stack course and FantaCSS inspiration for helping shape the early structure and styling direction of the project.
