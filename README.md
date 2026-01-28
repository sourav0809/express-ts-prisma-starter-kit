# Node.js TypeScript Starter Kit

A production-ready Node.js backend starter kit with TypeScript, featuring a well-structured project setup with essential security, validation, and database integration.

## 🚀 Features

- **TypeScript** - Full TypeScript support
- **Express.js** - Fast, unopinionated web framework
- **PostgreSQL + Prisma** - Type-safe database with Prisma ORM
- **Authentication** - JWT-based auth with bcrypt
- **Security** - Helmet, CORS, compression
- **Logging** - Winston structured logging
- **Docker** - Production-ready containerization
- **Health Checks** - Built-in monitoring

## 📋 Prerequisites

**Docker (Recommended):**
- Docker Engine 20.10+
- Docker Compose 2.0+

**Local Setup:**
- Node.js v20+
- PostgreSQL 12+

## 🚀 Quick Start

### With Docker (Recommended)

```bash
# Clone the repo
git clone https://github.com/sourav0809/express-ts-starter-kit.git
cd express-ts-starter-kit

# Start everything
make up

# View logs
make logs
```

Your app is running at http://localhost:3000

### Without Docker

```bash
# Install dependencies
npm install

# Set up environment
cp example.env .env
# Edit .env with your database URL

# Run migrations
npm run migrations:dev

# Start dev server
npm run dev
```


### Development
- `npm run dev` - Start dev server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server

### Database
- `npm run migrations:dev` - Run migrations
- `npm run db:generate` - Generate Prisma client

### Docker
- `npm run docker:up` - Start Docker services
- `npm run docker:down` - Stop Docker services
- `npm run docker:build` - Build and start
- `npm run docker:logs` - View logs

## 🔧 Main Dependencies

- **express** - Web framework
- **@prisma/client** - Database ORM
- **bcrypt** - Password hashing
- **jsonwebtoken** - JWT auth
- **joi** - Validation
- **helmet** - Security
- **winston** - Logging

## 🔐 Environment Variables

```env
PORT=3000
NODE_ENV=production
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/postgres
JWT_SECRET=your_secret_here
JWT_EXPIRES_IN=7d
```

For Docker, these are set in `docker-compose.yml`. For local dev, copy `example.env` to `.env`.

## 🏥 Health Check

```bash
curl http://localhost:3000/health
# {"status":"ok"}
```

## 📝 License

ISC License

## 👤 Author

Sourav
