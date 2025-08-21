# Node.js PostgreSQL Microservice 🚀

A lightweight Node.js microservice template using **Express** and **PostgreSQL**, built with modern best practices.

## Features
- Express.js API
- PostgreSQL with pg client
- ESM imports
- ESLint + Prettier for formatting
- Jest for testing
- Docker + Docker Compose

## Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/your-org/node-postgres-microservice.git
cd node-postgres-microservice
```

### 2. Environment variables
```bash
cp .env.example .env
```
Update `.env` with your values.

### 3. Run with Docker Compose
```bash
docker-compose up --build
```

### 4. Access API
```bash
GET http://localhost:3000/api/users
```

## Scripts
- `npm run dev` - Start dev server with nodemon
- `npm start` - Start prod server
- `npm test` - Run Jest tests
- `npm run lint` - Run ESLint

---
Enjoy building 🚀
