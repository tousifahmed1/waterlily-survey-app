# Backend - Waterlily Survey App

Express.js backend API server with TypeScript, Prisma ORM, and OpenAPI documentation.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- SQLite (default) or PostgreSQL

### Installation

```bash
cd backend
pnpm install
```

### Environment Setup

1. **Copy environment file**

   ```bash
   cp .env.example .env
   ```

2. **Configure environment variables**

   ```bash
   # Database
   DATABASE_URL="file:./dev.db"

   # JWT
   JWT_SECRET="your-secret-key"
   JWT_EXPIRES_IN="24h"

   # Server
   PORT=3001
   NODE_ENV=development
   ```

### Database Setup

```bash
# Generate Prisma client
pnpm prisma generate

# Push schema to database
pnpm prisma db push

# View database in Prisma Studio
pnpm prisma studio
```

### Development

```bash
# Start development server with hot reload
pnpm start:dev

# Start production server
pnpm start:prod
```

## 🛠️ Available Scripts

- `pnpm start:dev` - Start development server with hot reload
- `pnpm start:prod` - Start production server
- `pnpm build` - Build for production
- `pnpm test` - Run tests
- `pnpm test:cov` - Run tests with coverage
- `pnpm check` - Run Biome linter and formatter

## 📁 Project Structure

```
src/
├── api/                    # API routes and controllers
│   ├── auth/              # Authentication endpoints
│   ├── healthCheck/       # Health check endpoint
│   ├── submission/        # Survey submission endpoints
│   └── user/              # User management endpoints
├── common/                 # Shared utilities and middleware
│   ├── database/          # Database configuration
│   ├── middleware/        # Express middleware
│   ├── models/            # Shared data models
│   └── utils/             # Utility functions
├── api-docs/              # OpenAPI documentation
└── types/                 # TypeScript type definitions
```

## 🔐 Authentication

The backend uses JWT tokens for authentication:

- **Register**: `POST /api/auth/register`
- **Login**: `POST /api/auth/login`
- **Protected routes**: Use `Authorization: Bearer <token>` header

## 📊 API Endpoints

- **Health Check**: `GET /api/health`
- **Authentication**: `POST /api/auth/*`
- **Submissions**: `POST /api/submissions`
- **Users**: `GET /api/users/*`
- **API Documentation**: `GET /api-docs`

## 🗄️ Database

- **ORM**: Prisma
- **Database**: SQLite (development) / PostgreSQL (production)
- **Migrations**: Automatic with `pnpm prisma db push`

## 🧪 Testing

```bash
# Run all tests
pnpm test

# Run tests with coverage
pnpm test:cov

# Run tests in watch mode
pnpm test --watch
```

## 🔧 Development Tools

- **Linting**: Biome
- **Testing**: Vitest
- **Type Checking**: TypeScript
- **API Documentation**: OpenAPI/Swagger

## 🚀 Deployment

```bash
# Build for production
pnpm build

# Start production server
pnpm start:prod
```

## 📚 API Documentation

Once the server is running, visit:

- **Swagger UI**: `http://localhost:3001/api-docs`
- **OpenAPI JSON**: `http://localhost:3001/api-docs/openapi.json`

## 🔍 Troubleshooting

### Common Issues

1. **Database connection failed**

   - Check `DATABASE_URL` in `.env`
   - Ensure database is running
   - Run `pnpm prisma generate`

2. **Port already in use**

   - Change `PORT` in `.env`
   - Kill process using the port

3. **JWT errors**
   - Verify `JWT_SECRET` is set
   - Check token expiration
