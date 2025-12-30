# Lumina Studio

A high-end, handcrafted web development agency website featuring a minimal Vercel-inspired dark mode UI with intentional motion, interactive border beams, and subtle proximity effects.

## Tech Stack

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tooling
- **Tailwind CSS** - Utility-first styling

## Features

- Animated gradient background with mouse tracking
- Interactive feature cards with gradient borders
- Smooth scroll navigation
- Responsive design
- Modern dark mode aesthetic
- Testimonials section
- FAQ accordion
- Contact CTA

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vinnyf518/Lumina.git
   cd Lumina
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
├── components/
│   ├── Background.tsx      # Animated gradient background
│   ├── FeatureCard.tsx     # Service feature cards
│   ├── InteractiveButton.tsx # Reusable button component
│   └── Navbar.tsx          # Navigation bar
├── App.tsx                 # Main application component
├── constants.tsx           # Static content (nav, features, FAQs)
├── types.ts                # TypeScript interfaces
└── index.tsx               # Entry point
```
