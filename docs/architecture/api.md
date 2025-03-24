### API Overview

The **Obsidian Summarizer API** is built with **Go** and the **Fiber** framework, providing a lightweight and high-performance interface for interacting with the user's notes and other system features. The API handles various functionalities such as note classification, generating summaries, creating flashcards for spaced repetition, and managing user authentication.

### Endpoints
The API exposes several key endpoints to interact with the system:

- **POST /auth/login**  
  Authenticates the user via **Google OAuth** and returns an authentication token.

- **POST /notes**  
  Adds a new note to the system. The user can specify the title, content, and metadata (e.g., categories, tags).

- **GET /notes**  
  Retrieves a list of the user's notes, including summaries and categorized content.

- **GET /notes/{id}**  
  Retrieves a detailed view of a specific note by ID, including all its metadata.

- **POST /flashcards**  
  Generates flashcards from a note based on its content and stores them for spaced repetition.

- **GET /flashcards**  
  Retrieves a list of the user's flashcards, ordered by due date for review.

### Authentication
- **Google OAuth** is used to authenticate users. This provides a seamless login experience, enabling users to sign in with their Google account.

### Services and Logic
- **Notes Service:** Manages the creation, classification, and summary generation for notes stored in Obsidian.
- **Flashcards Service:** Generates flashcards for spaced repetition from user notes. This service helps users retain critical information through flashcards.
- **User Service:** Handles authentication, user management, and user-specific data.

### Data Models
The API interacts with the following key data models:

- **User:** Stores user data, including authentication information and preferences.
- **Note:** Represents a note in the Obsidian vault, with metadata such as categories, tags, and content.
- **Flashcard:** Represents a flashcard generated from a note, used for spaced repetition.

### Future Enhancements
- **Advanced Search:** A future feature that will allow users to search their notes using natural language processing (NLP) techniques.
- **AI-driven Categorization:** Automatic categorization of notes and generation of flashcards using machine learning models.

