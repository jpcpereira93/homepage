# Welcome to My Personal Webpage!

[![Next.js](https://img.shields.io/badge/NextJs-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![Bun](https://img.shields.io/badge/-Bun-000000?style=flat&logo=bun&logoColor=white)](https://bun.sh/)
[![Vitest](https://img.shields.io/badge/-Vitest-6E9F18?style=flat&logo=vitest&logoColor=white)](https://vitest.dev/)
[![React Testing Library](https://img.shields.io/badge/-Testing%20Library-E33332?style=flat&logo=testinglibrary&logoColor=white)](https://testing-library.com/docs/react-testing-library/intro/)
[![Biome](https://img.shields.io/badge/-Biome-60A5FA?style=flat&logo=biome&logoColor=white)](https://biomejs.dev)

A modern, production-ready personal webpage using Next.js with Bun. This project had 2 main goals:
- Get people to know more about me & showcase my professional experience/stack
- Improve some concepts in Next.js and TailwindCSS, something I didn't had opportunity to work recently
- Build a modern, responsive, eye-catching (subject to personal taste!) static website, something I love to do and don't have many opportunities to do so.

This project fully supports Next.js SSR and SSG features, it's currently using an exported build output, that only includes static HTML/CSS/JS since it's useful for self-hosting without a Node.js server in Github Pages.

## Features

- 🚀 Server-side rendering (w/ Bun!)
- 📦 Asset bundling and optimization
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [Next.js docs](https://nextjs.org/)
- 🧪 Vitest + React Testing Library for testing
- 🔍 BiomeJS for code linting & formatting

## Getting Started

### Prerequisites

This template uses [bun](https://bun.sh/) as the package manager and Javascript Runtime. So, you need to install `bun` globally:

  ```bash
  curl -fsSL https://bun.sh/install | bash
  ```

### Installation

Install the dependencies:

```bash
bun install
```

### Development

Start the development server with HMR:

```bash
bun dev
```

Your application will be available at `http://localhost:3000`.

## Building for Production

Create a production build:

```bash
bun run build
```

## Deployment

This repo includes a github action workflow to automatically deploy the project to Github Pages when a push is made on the main branch. 

## Linting & Formatting

[Biome](https://biomejs.dev/) is used to ensure code consistency across the project. It is already included a config file with the default + recommended options to enable when using this setup. Feel free to change it to your liking!

To run all the biome checks (linting and formatting):

```bash
bun biome check
```

To automatically fix linting issues and format code:

```bash
bun biome check --write
```

## Testing

This template uses [Vitest](https://vitest.dev/) as the testing framework and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for component testing. There's also included a basic setup with recommended settings.

To run the tests, use the following command:

```bash
bun run test
```

This will run all the unit and integration tests.

To watch and re-run tests on file changes during development:

```bash
bun run test:watch
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---