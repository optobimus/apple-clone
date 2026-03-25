# apple-clone-docker

This project is a React shopping cart application inspired by Apple.com, prepared for Docker-based deployment.

## Prerequisites for development

Install:

- [Node.js](https://nodejs.org/) 20 or newer
- `npm` (comes with Node.js)
- [Docker](https://docs.docker.com/get-docker/) (for container build/run)

## Build project

Install dependencies and build the production bundle:

```bash
npm install
npm run build
```

## Test project

Run tests with:

```bash
npm test -- --watchAll=false
```

## Execute project

Run locally in development mode:

```bash
npm start
```

Then open `http://localhost:3000`.

## Environment variables

The application accepts:

- `PORT` to choose the local port for the app (default: `3000`)