# 🖼️ Azki Service - Image Gallery

> **🌐 Live Demo**: [https://azki-service-assignment.vercel.app/](https://azki-service-assignment.vercel.app/)

A modern, responsive image gallery built with Next.js 16, featuring a beautiful UI with dark/light theme support, image preloading, and smooth modal interactions.

## ✨ Features

- **🎨 Modern UI/UX**: Clean, responsive design with smooth animations and transitions
- **🌓 Dark/Light Theme**: Toggle between themes with persistent user preference
- **🖼️ Image Gallery**: Grid-based layout with responsive design (1-4 columns based on screen size)
- **🔍 Image Modal**: Full-screen modal with detailed image information and metadata
- **⚡ Performance Optimized**: Image preloading for better user experience
- **📱 Mobile Responsive**: Fully responsive design that works on all devices
- **🎯 TypeScript**: Full type safety with comprehensive type definitions
- **🎨 Tailwind CSS**: Utility-first CSS framework for rapid styling
- **🔧 Developer Experience**: ESLint, Prettier, and Husky for code quality

## 🚀 Tech Stack

- **Framework**: Next.js 16.0.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Theme**: next-themes for dark/light mode
- **Icons**: Custom SVG icons
- **Code Quality**: ESLint, Prettier, Husky, lint-staged

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── gallery/           # Gallery pages
│   │   ├── [id]/         # Dynamic image detail page
│   │   └── page.tsx      # Main gallery page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page (redirects to gallery)
├── components/            # React components
│   ├── Card.tsx          # Image card component
│   ├── Footer.tsx        # Footer component
│   ├── Header.tsx        # Header component
│   ├── ImageGallery.tsx  # Main gallery grid
│   ├── ImageModal.tsx    # Full-screen image modal
│   ├── Modal.tsx         # Base modal component
│   └── ThemeToggle.tsx   # Theme switcher
├── data/                 # Mock data
│   └── mock-images.data.ts
├── hooks/                # Custom React hooks
│   └── use-image-preloader.hook.ts
├── icons/                # SVG icon components
│   ├── CloseIcon.tsx
│   ├── DarkIcon.tsx
│   └── LightIcon.tsx
├── models/               # TypeScript type definitions
│   └── gallery.model.ts
└── utils/                # Utility functions
    └── style.util.ts
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd azki-service
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🎨 Features in Detail

### Image Gallery

- **Responsive Grid**: Automatically adjusts from 1 to 4 columns based on screen size
- **Image Preloading**: First 6 images are preloaded for better performance
- **Smooth Animations**: Hover effects and transitions for enhanced UX

### Image Modal

- **Full-Screen View**: Click any image to view in full-screen modal
- **Detailed Information**: View title, description, location, date, photographer, and tags
- **Keyboard Navigation**: ESC key to close modal
- **Loading States**: Smooth loading animations for better UX

### Theme System

- **Persistent Themes**: User theme preference is saved and restored
- **Smooth Transitions**: 300ms transition duration for theme changes
- **System Preference**: Respects user's system theme preference

### Performance Optimizations

- **Image Preloading**: Critical images are preloaded for faster display
- **Next.js Image**: Optimized image loading with Next.js Image component
- **Code Splitting**: Automatic code splitting for better performance
- **TypeScript**: Compile-time error checking for better reliability

## 🎯 Key Components

### ImageGallery

The main gallery component that renders a responsive grid of image cards.

```tsx
<ImageGallery images={mockImages} />
```

### ImageModal

Full-screen modal for viewing image details with metadata.

```tsx
<ImageModal
  image={selectedImage}
  isOpen={isModalOpen}
  onClose={handleCloseModal}
/>
```

### ThemeToggle

Floating theme switcher with smooth animations.

```tsx
<ThemeToggle />
```

## 📊 Data Structure

Images are defined with the following structure:

```typescript
interface IMockImage {
  id: string;
  title: string;
  description: string;
  tags: Array<string>;
  location: string;
  date: string;
  photographer: string;
  imageUrl: string;
  thumbnailUrl: string;
}
```

## 🎨 Styling

The project uses Tailwind CSS with a custom configuration:

- **Dark Mode**: `selector` strategy for theme switching
- **Responsive Design**: Mobile-first approach with breakpoints
- **Custom Utilities**: Tailwind utilities with custom styling
- **Component Styling**: Utility-first approach with component composition

## 🔧 Development

### Code Quality

- **ESLint**: Configured with Next.js and Prettier rules
- **Prettier**: Code formatting with import sorting
- **Husky**: Git hooks for pre-commit linting
- **lint-staged**: Run linters on staged files only

### TypeScript Configuration

- Strict type checking enabled
- Path aliases for clean imports (`@assignment/`)
- Next.js specific TypeScript configuration

## 🚀 Deployment

The application is ready for deployment on platforms like:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Any Node.js hosting platform**

### Build for Production

```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary.

## 👨‍💻 Author

Built with ❤️ using Next.js and modern web technologies.

---

**Note**: This is a demo application showcasing modern React/Next.js patterns and best practices for building responsive image galleries.
