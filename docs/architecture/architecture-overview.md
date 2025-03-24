### Architecture Overview

The architecture of **Obsidian Summarizer** follows a modular approach, built with a **microservices** mindset, but within a **monolithic** structure for simplicity and scalability.

### Backend
- **Go + Fiber:** The backend is built using Go with the Fiber framework, providing high performance and minimal overhead for processing the user's notes and handling business logic.
- **PostgreSQL:** A relational database is used for storing user data, notes metadata, and flashcards. PostgreSQL ensures reliable, structured data storage.
- **API Layer:** The system exposes RESTful APIs to handle user interactions, such as adding, classifying, and summarizing notes. APIs will also handle user authentication and authorization.

### Frontend
- **Next.js:** The frontend is built with Next.js, which ensures fast page rendering with server-side rendering (SSR) and static site generation (SSG).
- **React & TypeScript:** React is used for building dynamic, responsive user interfaces, while TypeScript ensures strong typing and better code maintainability.
- **Responsive Design:** The application is fully responsive, ensuring a smooth experience on both desktop and mobile devices.

### Authentication
- **Google OAuth:** Users can sign in using Google OAuth for easy and secure authentication.

### Containerization
- **Docker:** The entire application is containerized using Docker, enabling easy deployment, scalability, and isolated environments for both backend and frontend services.
