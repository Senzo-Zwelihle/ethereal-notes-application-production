![Hero Image](./public/hero.png)

```md
# Ethereal Notes - Your Modern Note-Taking Oasis

## Overview

Ethereal Notes offers a contemporary and intuitive note-taking experience, drawing inspiration from the flexibility of Notion. Built with the cutting-edge Next.js 15 framework, leveraging the robust backend capabilities of Convex for seamless logic and data persistence, and styled with the utility-first approach of Tailwind CSS v4 in conjunction with the elegant UI components of ShadCN UI, Ethereal Notes aims to provide a smooth and powerful platform for organizing your thoughts and ideas. The application features a versatile block-based editor, ensuring content creation is both flexible and structured. Real-time synchronization keeps your notes up-to-date across all your devices, while modern React features and carefully chosen animation libraries contribute to a polished and engaging user experience.

## 🛠️ Tech Stack - The Foundation of Ethereal Notes

* **Frontend Powerhouse**:
    * **Next.js 15 (App Router)**: Provides server-side rendering, static site generation, and a streamlined development experience with the new App Router.
    * **React 19**: The core UI library, enabling a component-based and reactive frontend.
    * **Tailwind CSS v4**: A utility-first CSS framework for rapid and consistent styling.
    * **ShadCN UI**: A collection of beautifully designed and accessible UI components built with Radix Primitives and Tailwind CSS.
    * **Radix Primitives**: A set of low-level UI primitives for building accessible design systems.
* **Intuitive Editor**:
    * **Blocknote (with Mantine integration)**: A highly customizable block-based editor that allows for rich content creation with seamless integration with the Mantine UI library for enhanced functionality and styling.
* **Secure Authentication**:
    * **Clerk**: Provides robust and easy-to-implement user authentication and management.
* **Efficient State Management**:
    * **Zustand**: A small, fast, and scalable bearbones state management solution using simplified flux principles.
* **Scalable Backend & Database**:
    * **Convex**: A fully managed backend platform that offers a reactive database and serverless functions, simplifying real-time data handling.
* **Reliable Media Storage**:
    * **EdgeStore**: A performant and scalable storage solution optimized for edge delivery, ideal for handling user-uploaded media.
* **Enhancements & Interactions**:
    * **Emoji picker**: Allows users to easily incorporate emojis into their notes, adding personality and visual cues.
    * **Dropzone for file uploads**: Provides a user-friendly drag-and-drop interface for uploading various file types.
    * **Animated UI with Lenis and Framer Motion**:
        * **Lenis**: A library for smooth and natural scrolling, enhancing the overall feel of the application.
        * **Framer Motion**: A powerful animation library for creating expressive and engaging UI transitions and animations.

##  Getting Started - Diving into Ethereal Notes

To get Ethereal Notes up and running on your local machine, follow these simple steps:

1.  **Clone the Repository**: Obtain the project source code from the GitHub repository. Replace `[https://github.com/your-org/ethereal-notes.git](https://github.com/your-org/ethereal-notes.git)` with the actual repository URL.

    ```bash
    git clone [https://github.com/your-org/ethereal-notes.git](https://github.com/your-org/ethereal-notes.git)
    cd ethereal-notes
    ```

2.  **Install Dependencies**: Navigate into the project directory and install the necessary packages. You can use either `pnpm`, `yarn`, or `npm`.

    ```bash
    pnpm install  # Recommended if you have it
    # or
    yarn install
    # or
    npm install
    ```

3.  **Configure Environment Variables**: Ethereal Notes relies on several environment variables to connect to external services like Clerk, Convex, and EdgeStore. You will need to create a `.env.local` file in the root of your project and populate it with the required keys and URLs. Here are the essential variables you'll need to configure:

    ```
    CLERK_SECRET_KEY=your_clerk_secret_key
    CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    CONVEX_DEPLOYMENT_URL=your_convex_deployment_url
    EDGE_STORE_API_KEY=your_edgestore_api_key
    EDGE_STORE_URL=your_edgestore_url
    # Add any other necessary environment variables here
    ```

    Refer to the documentation of Clerk, Convex, and EdgeStore for instructions on how to obtain these credentials.

4.  **Start the Development Server**: Once the dependencies are installed and the environment variables are configured, you can start the Next.js development server.

    ```bash
    pnpm dev      # Runs the application on http://localhost:3000 by default
    # or
    yarn dev
    # or
    npm run dev
    ```

    Open your browser and navigate to `http://localhost:3000` to see Ethereal Notes in action.

##  Key Features - What Makes Ethereal Notes Stand Out

* **Flexible Block-Based Editor**: Create rich and structured notes using a variety of content blocks powered by Blocknote. This allows for easy organization of text, headings, lists, images, code blocks, and more. The Mantine integration enhances the editor with additional styling options and functionalities.
* **Seamless User Authentication**: Securely manage user accounts with Clerk, providing a smooth and reliable authentication experience.
* **Real-Time Collaboration & Data Persistence**: Benefit from the power of Convex for real-time data synchronization and robust backend storage. Changes you make are instantly reflected across all connected devices, ensuring a collaborative and consistent experience.
* **Effortless Media Management**: Upload and manage images, documents, and other media files with ease using the integrated Dropzone functionality, backed by the scalable storage of EdgeStore.
* **Personalized User Interface**: Customize the look and feel of Ethereal Notes with a built-in dark mode and the ability to switch between customizable themes, allowing you to tailor the application to your preferences.
* **Blazing-Fast Navigation**: Quickly navigate through your notes and application features using the CMDK-powered command palette, providing an efficient and keyboard-centric way to access different parts of the application.

##  Architecture - How Ethereal Notes is Organized

Ethereal Notes follows a well-structured architecture to ensure maintainability, scalability, and a clear separation of concerns:

* **`app/` (Next.js App Router)**: This directory houses the main application routes, layouts, and page components, leveraging the latest features of Next.js for efficient routing and data fetching.
* **`components/editor/`**: Contains the modular React components that make up the Blocknote-powered editor. These components are designed to be reusable and extendable, allowing for future enhancements to the editing experience.
* **`state/`**: Manages the application's client-side state using Zustand. This centralizes state management, making it easier to track and update data across different components.
* **`convex/`**: This directory holds all the Convex backend functions, including queries for fetching data, mutations for updating data, and any server-side logic that powers the real-time features and data persistence of the application.
* **`lib/edgestore.ts` (or similar)**: Contains the integration logic for interacting with EdgeStore, including hooks and utilities for handling file uploads and retrieval.
* **`components/ui/`**: Houses the reusable UI components built with ShadCN UI and Tailwind CSS, ensuring a consistent and aesthetically pleasing design throughout the application.
* **`styles/`**: Contains global CSS files and Tailwind CSS configuration.
* **`public/`**: Serves as the directory for static assets such as images, fonts, and other publicly accessible files.

## 🔧 Development Tools & Practices

Ethereal Notes embraces modern development practices and utilizes the following tools to ensure code quality and consistency:

* **Linting (ESLint with Next.js config)**: Enforces code style and identifies potential issues early in the development process, adhering to best practices and the recommended Next.js configuration.
* **Type Checking (TypeScript)**: Provides static typing, improving code maintainability and reducing runtime errors by catching type-related issues during development.
* **Formatting (Prettier - Optional Configuration)**: Automatically formats code to maintain a consistent style across the codebase. While configuration might be optional, its use is highly recommended for collaborative projects.


```
