# empty-repo-2

A minimal Hello World React application scaffolded with Vite. It renders a single `<h1>Hello, World!</h1>` and serves as a clean starting point for React + Vite projects.

## Prerequisites

- [Node.js](https://nodejs.org/) ≥ 18
- npm (comes bundled with Node.js)

## Installation

```bash
npm install
```

## Development Server

```bash
npm start
```

Starts the Vite dev server. Open [http://localhost:5173](http://localhost:5173) in your browser to view the app. The page hot-reloads automatically on file changes.

## Production Build

```bash
npm run build
```

Compiles and bundles the app for production. Output is written to the `dist/` folder (excluded from version control via `.gitignore`).

## Project Structure

```
empty-repo-2/
├── index.html        # HTML entry point — mounts the React app
├── src/
│   ├── main.jsx      # React root — renders <App /> into #root
│   └── App.jsx       # Top-level component — renders <h1>Hello, World!</h1>
├── vite.config.js    # Vite configuration (React plugin)
└── package.json      # Project metadata, scripts, and dependencies
```
