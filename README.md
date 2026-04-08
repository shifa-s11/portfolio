# Shifa Saeed Portfolio

A personal portfolio built with Next.js, React, TypeScript, and Tailwind CSS v4.

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4

## Features

- Editorial-style landing page
- Tailwind-based section styling
- Responsive layout for desktop and mobile
- Animated reveal effects
- Interactive project and skills presentation
- Resume download support

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

- `app/page.tsx` main portfolio page
- `app/layout.tsx` metadata and global layout
- `app/globals.css` shared global styles and motion helpers
- `public/images` static image assets
- `public/resume` downloadable resume
- `public/logo-s.svg` favicon/logo asset

## Notes

- Most section styling has been migrated to Tailwind utility classes.
- `globals.css` now mainly contains shared visual tokens, hero styles, motion helpers, and the experience rail animation.
- The portfolio metadata has been enhanced for browser tabs and social sharing.
