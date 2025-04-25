![Hero Image](./public/hero.png)

# Ethereal Notes - Your Modern Note-Taking Oasis

[![Next.js](https://img.shields.io/badge/Next.js%2015-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React%2019-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS%20v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## Overview

Ethereal Notes offers a contemporary and intuitive note-taking experience, drawing inspiration from the flexibility of Notion. Built with the cutting-edge Next.js 15 framework, leveraging the robust backend capabilities of Convex for seamless logic and data persistence, and styled with the utility-first approach of Tailwind CSS v4 in conjunction with the elegant UI components of ShadCN UI, Ethereal Notes aims to provide a smooth and powerful platform for organizing your thoughts and ideas.

The application features a versatile block-based editor, ensuring content creation is both flexible and structured. Real-time synchronization keeps your notes up-to-date across all your devices, while modern React features and carefully chosen animation libraries contribute to a polished and engaging user experience.

##  Tech Stack

### Frontend Powerhouse
- **Next.js 15 (App Router)**: Server-side rendering, static site generation, and streamlined development experience
- **React 19**: Core UI library enabling component-based and reactive frontend
- **Tailwind CSS v4**: Utility-first CSS framework for rapid and consistent styling
- **ShadCN UI**: Beautifully designed and accessible UI components
- **Radix Primitives**: Low-level UI primitives for building accessible design systems

### Intuitive Editor
- **Blocknote (with Mantine integration)**: Highly customizable block-based editor with enhanced functionality

### Secure Authentication
- **Clerk**: Robust and easy-to-implement user authentication and management

### Efficient State Management
- **Zustand**: Small, fast, and scalable bearbones state management solution

### Scalable Backend & Database
- **Convex**: Fully managed backend platform with reactive database and serverless functions

### Reliable Media Storage
- **EdgeStore**: Performant and scalable storage solution optimized for edge delivery

### Enhancements & Interactions
- **Emoji picker**: Easy incorporation of emojis into notes
- **Dropzone for file uploads**: User-friendly drag-and-drop interface
- **Animated UI**:
  - **Lenis**: Smooth and natural scrolling
  - **Framer Motion**: Powerful animation library for UI transitions

##  Getting Started

Follow these steps to get Ethereal Notes running on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/ethereal-notes.git
cd ethereal-notes
```

### 2. Install Dependencies

```bash
pnpm install  # Recommended
# or
yarn install
# or
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CONVEX_DEPLOYMENT_URL=your_convex_deployment_url
EDGE_STORE_API_KEY=your_edgestore_api_key
EDGE_STORE_URL=your_edgestore_url
# Add any other necessary environment variables here
```

### 4. Start the Development Server

```bash
pnpm dev
# or
yarn dev
# or
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to see Ethereal Notes in action.

##  Key Features

- **Flexible Block-Based Editor**: Create rich and structured notes using a variety of content blocks
- **Seamless User Authentication**: Secure account management with Clerk
- **Real-Time Collaboration & Data Persistence**: Instant synchronization across devices with Convex
- **Effortless Media Management**: Easy upload and management of media files with Dropzone and EdgeStore
- **Personalized User Interface**: Customizable themes including dark mode
- **Blazing-Fast Navigation**: CMDK-powered command palette for keyboard-centric access

##  Architecture

Ethereal Notes follows a well-structured architecture for maintainability and scalability:

- **`app/` (Next.js App Router)**: Application routes, layouts, and page components
- **`components/editor/`**: Modular React components for the Blocknote editor
- **`state/`**: Client-side state management with Zustand
- **`convex/`**: Backend functions including queries, mutations, and server-side logic
- **`lib/edgestore.ts`**: Integration logic for EdgeStore file handling
- **`components/ui/`**: Reusable UI components built with ShadCN UI and Tailwind CSS
- **`styles/`**: Global CSS files and Tailwind configuration
- **`public/`**: Static assets including images and fonts

## 🔧 Development Tools & Practices

Ethereal Notes embraces modern development practices with:

- **Linting**: ESLint with Next.js configuration
- **Type Checking**: TypeScript for improved code maintainability
- **Formatting**: Prettier (optional but recommended)

##  License

[MIT](LICENSE)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
