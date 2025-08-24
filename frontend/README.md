# Frontend - Waterlily Survey App

Next.js 15 React application with TypeScript, Tailwind CSS, and modern UI components.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
cd frontend
pnpm install
```

### Environment Setup

1. **Copy environment file**

   ```bash
   cp .env.example .env
   ```

2. **Configure environment variables**

   ```bash
   # API endpoint (default backend port)
   NEXT_PUBLIC_API_URL=http://localhost:3000

   # App configuration
   NEXT_PUBLIC_APP_NAME=Waterlily Survey
   ```

### Development

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## 🛠️ Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run Biome linter
- `pnpm format` - Format code with Biome

## 📁 Project Structure

```
src/
├── app/                    # Next.js 15 app directory
│   ├── (auth)/            # Protected routes (requires auth)
│   │   ├── survey/        # Survey taking interface
│   │   └── submissions/   # View survey submissions
│   ├── (public)/          # Public routes
│   │   ├── login/         # User login
│   │   └── register/      # User registration
│   └── layout.tsx         # Root layout
├── components/             # Reusable UI components
│   ├── ui/                # Base UI components (shadcn/ui)
│   ├── header.tsx         # Navigation header
│   ├── question-card.tsx  # Survey question component
│   └── loading.tsx        # Loading states
├── contexts/               # React contexts
│   └── auth/              # Authentication context
├── lib/                    # Utility libraries
│   ├── api.ts             # API client functions
│   └── utils.ts           # Helper functions
└── repositories/           # Data layer
    ├── auth/               # Authentication services
    ├── question/           # Question data
    └── submission/         # Submission services
```

## 🎨 UI Components

The app uses a modern component library built with:

- **Radix UI** - Accessible, unstyled components
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible components
- **Lucide React** - Icon library

## 🔐 Authentication

The frontend includes:

- **Protected routes** - Survey and submission pages require login
- **Auth context** - Global authentication state management
- **JWT tokens** - Stored securely in localStorage
- **Route guards** - Automatic redirects for unauthenticated users

## 📱 Features

- **Responsive design** - Works on all device sizes
- **Survey interface** - Interactive question cards with progress tracking
- **Form validation** - Client-side validation with Zod schemas
- **Real-time updates** - Live form state management
- **Accessibility** - WCAG compliant components

## 🧪 Testing

```bash
# Run tests (when configured)
pnpm test

# Run tests in watch mode
pnpm test --watch
```

## 🔧 Development Tools

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Linting**: Biome
- **State Management**: React Context + Hooks
- **Forms**: React Hook Form + Zod validation

## 🚀 Deployment

### Build for Production

```bash
# Create production build
pnpm build

# Start production server
pnpm start
```

### Environment Variables

Ensure these are set in production:

- `NEXT_PUBLIC_API_URL` - Backend API endpoint
- `NEXT_PUBLIC_APP_NAME` - Application name

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🔍 Troubleshooting

### Common Issues

1. **API connection failed**

   - Check `NEXT_PUBLIC_API_URL` in `.env`
   - Ensure backend server is running
   - Check CORS settings on backend

2. **Build errors**

   - Clear `.next` folder: `rm -rf .next`
   - Reinstall dependencies: `pnpm install`
   - Check TypeScript errors: `pnpm build`

3. **Styling issues**
   - Ensure Tailwind CSS is properly configured
   - Check PostCSS configuration
   - Verify component imports

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/)
- [React Hook Form Documentation](https://react-hook-form.com/)
