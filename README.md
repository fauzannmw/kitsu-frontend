# Anime Explorer

Anime Explorer is a [Next.js](https://nextjs.org) application that allows users to explore a list of anime and view their details using data from the public [Kitsu API](https://kitsu.docs.apiary.io/). The app is fully responsive and styled using CSS-in-JS for modern and modular design.

## Features

- **Anime List Page**:

  - Displays a paginated list of anime (10 per page).
  - Each anime item shows an image, English and Japanese titles, and is clickable to view detailed information.

- **Anime Detail Page**:
  - Provides detailed information about the selected anime, including an image, English and Japanese titles, synopsis, rating, and episode count.
  - Includes navigation to return to the anime list page.

## Technologies Used

- **Next.js**:
  - A React-based framework for routing, rendering, and API handling.
- **TypeScript**:
  - A typed superset of JavaScript used for better code quality and type safety.
- **CSS-in-JS**:
  - Styling is implemented using `styled-components` to ensure modularity and ease of maintenance.

## Getting Started

### Prerequisites

Ensure you have **Node.js** and a package manager like **npm/yarn/pnpm/bun** installed on your system.

### Installation Steps

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Install dependencies:
   npm install
   # or
   yarn install
   # or
   pnpm install
3. Run the development server:
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
4. Dev:
   Open http://localhost:3000 in your browser to view the application.
