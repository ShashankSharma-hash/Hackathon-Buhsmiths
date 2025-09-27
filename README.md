# Hackathon Buhsmiths

A React prototype application built with Vite, TypeScript, TailwindCSS, and React Router.

## Features

- **Landing Page** (`/`) - Welcome page with feature overview
- **Consent Management** (`/consent`) - User consent and privacy settings
- **Speech Processing** (`/speech`) - Speech recognition and transcription
- **Memory Management** (`/memory`) - Data storage and memory management
- **Dashboard** (`/dashboard`) - Analytics and monitoring dashboard

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **ESLint** - Code linting
- **Prettier** - Code formatting

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Build the application:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Code Quality

Run ESLint:
```bash
npm run lint
```

Fix ESLint issues:
```bash
npm run lint:fix
```

Format code with Prettier:
```bash
npm run format
```

## Project Structure

```
src/
├── components/
│   └── AppLayout.tsx      # Main layout with header and footer
├── pages/
│   ├── Landing.tsx        # Home page
│   ├── Consent.tsx        # Consent management
│   ├── Speech.tsx         # Speech processing
│   ├── Memory.tsx         # Memory management
│   └── Dashboard.tsx      # Analytics dashboard
├── App.tsx                # Main app component with routing
├── main.tsx               # Application entry point
└── index.css              # Global styles with TailwindCSS
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier

## License

This project is created for hackathon purposes.
