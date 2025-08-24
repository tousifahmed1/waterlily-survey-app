# Waterlily Survey App

A full-stack survey application built with Next.js frontend and Express.js backend.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- Docker (optional, for database)

### Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd waterlily-survey-app
   ```

2. **Install dependencies**

   ```bash
   # Install backend dependencies
   cd backend
   pnpm install

   # Install frontend dependencies
   cd ../frontend
   pnpm install
   ```

3. **Environment Setup**

   ```bash
   # Backend
   cd backend
   cp .env.example .env
   # Edit .env with your database and JWT settings

   # Frontend
   cd ../frontend
   cp .env.example .env
   # Edit .env with your API endpoint
   ```

4. **Database Setup**

   ```bash
   cd backend
   pnpm prisma generate
   pnpm prisma db push
   ```

5. **Run the application**

   ```bash
   # Terminal 1 - Backend
   cd backend
   pnpm start:dev

   # Terminal 2 - Frontend
   cd frontend
   pnpm dev
   ```

## 📁 Project Structure

- `frontend/` - Next.js React application
- `backend/` - Express.js API server
- `prisma/` - Database schema and migrations

## 🛠️ Development

- **Backend**: `http://localhost:3001`
- **Frontend**: `http://localhost:3000`
- **API Docs**: `http://localhost:3001/api-docs`

## 📚 Documentation

- [Frontend README](./frontend/README.md)
- [Backend README](./backend/README.md)

## 🧪 Testing

```bash
# Backend tests
cd backend
pnpm test

# Frontend tests
cd frontend
pnpm test
```

## 📦 Build & Deploy

```bash
# Backend
cd backend
pnpm build
pnpm start:prod

# Frontend
cd frontend
pnpm build
pnpm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

MIT License
