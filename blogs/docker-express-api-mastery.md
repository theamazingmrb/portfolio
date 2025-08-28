---
title: "Docker & Express API Mastery: From REST Fundamentals to Production-Ready Containers"
date: "2025-08-26"
category: "Development"
tags: ["Docker", "Node.js", "Express", "REST API", "Containers", "Backend Development", "DevOps", "MongoDB"]
excerpt: "Master REST API development with Express and Docker in this comprehensive guide. Learn API design principles, containerization best practices, and production deployment strategies."
difficulty: "Beginner"
author: "Billie Heidelberg Jr."
featured: true
---

# Docker & Express API Mastery: From REST Fundamentals to Production-Ready Containers

Tired of "it works on my machine" problems? Ready to build APIs that scale and deploy anywhere? Docker and Express are the perfect combination for modern backend development. This comprehensive guide will take you from REST API basics to production-ready containerized services that your team can deploy with confidence.

## 🎯 What You'll Learn

By the end of this guide, you'll master:
- REST API principles and best practices
- Building robust Express.js APIs with proper error handling
- Docker containerization from development to production
- Database integration with MongoDB and Docker Compose
- API testing, debugging, and monitoring strategies
- Security best practices for production APIs
- Deployment strategies and environment management

## 🚀 The Lightning-Fast Overview

Modern API development follows this pattern:
# Design → Build → Containerize → Deploy
Design API endpoints → Express.js implementation → Docker containerization → Production deployment

Everything else is optimization and best practices.

## 📚 Prerequisites

Before diving in, make sure you have:
- ✅ Node.js 16+ and npm installed
- ✅ Docker Desktop installed and running
- ✅ Basic JavaScript knowledge (functions, objects, async/await)
- ✅ Understanding of HTTP methods (GET, POST, PUT, DELETE)
- ✅ Basic command line comfort

New to APIs? Read this REST API explanation first for core concepts.

## 📋 Table of Contents

1. Understanding REST APIs
2. Setting Up Your Development Environment
3. Building Your First Express API
4. REST API Design Principles
5. Adding Database Integration
6. Docker Fundamentals for APIs
7. Containerizing Your Express API
8. Docker Compose for Development
9. Error Handling and Validation
10. Testing Your Containerized API
11. Security Best Practices
12. Production Deployment Strategies

## Understanding REST APIs

### What is a REST API?

REST (Representational State Transfer) is an architectural style for designing web services. Think of it as a contract between your frontend and backend:

```javascript
// Frontend asks: "Give me all users"
GET /api/users

// Backend responds: 
{
  "users": [
    { "id": 1, "name": "John", "email": "john@example.com" },
    { "id": 2, "name": "Jane", "email": "jane@example.com" }
  ]
}
```

### REST Principles Made Simple

#### 1. Stateless Communications

Each request contains all information needed to process it:

```javascript
// ❌ Bad: Server needs to remember previous requests
GET /api/next-page

// ✅ Good: Request contains all needed information
GET /api/users?page=2&limit=10
```

#### 2. Resource-Based URLs

URLs represent resources (nouns), not actions (verbs):

```javascript
// ❌ Bad: Action-based URLs
POST /api/createUser
GET /api/getUser/123
POST /api/deleteUser/123

// ✅ Good: Resource-based URLs
POST /api/users          // Create user
GET /api/users/123       // Get user
DELETE /api/users/123    // Delete user
```

#### 3. HTTP Methods Express Intent

| Method | Purpose | Example |
|--------|---------|----------|
| GET | Retrieve data | GET /api/users |
| POST | Create new resource | POST /api/users |
| PUT | Update entire resource | PUT /api/users/123 |
| PATCH | Partial update | PATCH /api/users/123 |
| DELETE | Remove resource | DELETE /api/users/123 |

#### 4. Consistent Response Structure

```javascript
// Success responses
{
  "success": true,
  "data": { /* actual data */ },
  "message": "User created successfully"
}

// Error responses
{
  "success": false,
  "error": {
    "code": 400,
    "message": "Validation failed",
    "details": ["Email is required", "Name must be at least 2 characters"]
  }
}
```

### API Design Best Practices

#### Resource Naming Conventions

```javascript
// ✅ Good API endpoint design
GET    /api/users                 // Get all users
POST   /api/users                 // Create new user
GET    /api/users/123             // Get specific user
PUT    /api/users/123             // Update user
DELETE /api/users/123             // Delete user

// Nested resources
GET    /api/users/123/posts       // Get user's posts
POST   /api/users/123/posts       // Create post for user
DELETE /api/users/123/posts/456   // Delete specific post
```

#### HTTP Status Codes That Matter

```javascript
// Success codes
200 // OK - Standard success response
201 // Created - Resource successfully created
204 // No Content - Success with no response body

// Client error codes
400 // Bad Request - Invalid request data
401 // Unauthorized - Authentication required
403 // Forbidden - Permission denied
404 // Not Found - Resource doesn't exist
422 // Unprocessable Entity - Validation failed

// Server error codes
500 // Internal Server Error - Something went wrong
503 // Service Unavailable - Server temporarily down
```

## Setting Up Your Development Environment

Let's set up a proper development environment for our Express API and Docker workflow.

### Project Structure

Create a new project folder and initialize it:

```bash
mkdir express-docker-api
cd express-docker-api
npm init -y
```

Install the essential dependencies:

```bash
npm install express mongoose dotenv cors helmet
npm install --save-dev nodemon eslint jest supertest
```

Create this folder structure:

```
express-docker-api/
├── src/
│   ├── config/         # Configuration files
│   ├── controllers/    # Route controllers
│   ├── middleware/     # Custom middleware
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── services/       # Business logic
│   ├── utils/          # Helper functions
│   └── app.js          # Express app setup
├── tests/              # Test files
├── .dockerignore       # Files to exclude from Docker
├── .env                # Environment variables
├── .env.example        # Example environment file
├── .eslintrc.js        # ESLint configuration
├── .gitignore          # Git ignore file
├── docker-compose.yml  # Docker Compose config
├── Dockerfile          # Docker build instructions
├── jest.config.js      # Jest configuration
├── package.json        # Project dependencies
└── README.md           # Project documentation
```

### Setting Up Express

Create the main Express application in `src/app.js`:

```javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
require('dotenv').config();

// Import routes
const userRoutes = require('./routes/userRoutes');

// Initialize Express app
const app = express();

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
app.use('/api/users', userRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'API is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: {
      code: 500,
      message: 'Internal Server Error',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    }
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; // For testing
```

### Creating Routes and Controllers

Create a user route file at `src/routes/userRoutes.js`:

```javascript
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET all users
router.get('/', userController.getAllUsers);

// GET single user by ID
router.get('/:id', userController.getUserById);

// POST create new user
router.post('/', userController.createUser);

// PUT update user
router.put('/:id', userController.updateUser);

// DELETE user
router.delete('/:id', userController.deleteUser);

module.exports = router;
```

Create a controller at `src/controllers/userController.js`:

```javascript
const User = require('../models/userModel');

// Get all users
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      data: users,
      count: users.length
    });
  } catch (error) {
    next(error);
  }
};

// Get single user by ID
exports.getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: {
          code: 404,
          message: 'User not found'
        }
      });
    }
    
    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    next(error);
  }
};

// Create new user
exports.createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      success: true,
      data: user,
      message: 'User created successfully'
    });
  } catch (error) {
    next(error);
  }
};

// Update user
exports.updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: {
          code: 404,
          message: 'User not found'
        }
      });
    }
    
    res.status(200).json({
      success: true,
      data: user,
      message: 'User updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

// Delete user
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: {
          code: 404,
          message: 'User not found'
        }
      });
    }
    
    res.status(200).json({
      success: true,
      data: {},
      message: 'User deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
```

### Creating a MongoDB Model

Create a user model at `src/models/userModel.js`:

```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters'],
    select: false // Don't return password in queries
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
```

## Docker Fundamentals for APIs

### What is Docker & Why Do We Need It?

Before diving into Docker, let's understand the problem it solves. Have you ever experienced any of these situations?

- "It works on my machine but not in production"
- Spending hours configuring development environments for new team members
- Dependency conflicts between different applications on the same server
- Inconsistent behavior between development, staging, and production environments
- Difficulty scaling your application when traffic increases

These are the exact problems Docker was designed to solve. Docker allows you to package your application with all its dependencies into a standardized unit called a container. This ensures your API runs the same way everywhere, eliminating the "it works on my machine" problem.

### How Docker Works: The Container Revolution

To understand Docker's value, let's compare traditional deployment methods with containerization:

**Traditional Deployment:**
- Applications run directly on the host operating system
- Dependencies installed globally can conflict between applications
- Environment variables and configurations vary between systems
- Scaling requires provisioning entire new servers

**Docker Containerization:**
- Each application runs in its own isolated container
- Containers include only the dependencies needed for that specific application
- Environment configuration is packaged with the application
- Containers can be started, stopped, and scaled independently

### Why Docker for Express APIs?

1. **Consistent Environment**: The same container runs identically in development, testing, and production, eliminating "works on my machine" problems. This means no more surprises when deploying to production.

2. **Isolation**: Each service runs in its own container with its own dependencies, preventing conflicts. For example, you can run one service that needs Node.js 14 and another that requires Node.js 16 on the same host without issues.

3. **Scalability**: When traffic increases, you can easily spin up more containers to handle the load. This horizontal scaling is much more efficient than scaling entire virtual machines.

4. **Dependency Management**: All dependencies are packaged within the container, so you don't need to worry about installing dependencies on each server. This makes deployment much simpler and more reliable.

5. **Version Control**: You can tag and version your API images, making it easy to roll back to previous versions if something goes wrong. This provides a safety net for deployments.

6. **Microservices Architecture**: Docker makes it practical to break down monolithic applications into smaller, more manageable microservices that can be developed, deployed, and scaled independently.

7. **DevOps Integration**: Docker integrates seamlessly with CI/CD pipelines, making automated testing and deployment much easier to implement.

### Real-World Benefits

Here's how Docker solves common development challenges:

**Problem:** A new developer joins your team and spends 2 days configuring their environment.
**Solution:** With Docker, they can be up and running in minutes with a simple `docker-compose up`.

**Problem:** Your API works in development but crashes in production due to environment differences.
**Solution:** Docker ensures the production environment matches development exactly.

**Problem:** Deploying updates to your API is risky and often causes downtime.
**Solution:** Docker enables blue-green deployments where you can spin up new containers with updates before switching traffic over, minimizing downtime.

### Creating a Dockerfile

A Dockerfile is a text document that contains all the commands needed to build a Docker image. Let's create one in your project root and understand why each instruction matters:

```dockerfile
# Base image - We start with a lightweight Alpine Linux with Node.js pre-installed
# WHY: Alpine is much smaller than standard Linux images (100MB vs 1GB+), 
# making our final image download and start faster. Node 16 is chosen for 
# its stability and performance with modern JavaScript features.
FROM node:16-alpine

# Set working directory - Creates and switches to /app directory inside container
# WHY: This keeps our container organized and prevents conflicts with system files.
# All subsequent commands will run from this directory, similar to using 'cd /app'
WORKDIR /app

# Copy package.json and package-lock.json first (before other files)
# WHY: This takes advantage of Docker's build cache. If your package files haven't 
# changed, Docker will reuse the cached layer with installed dependencies, 
# dramatically speeding up builds during development.
COPY package*.json ./

# Install dependencies
# WHY: We run this as a separate step from copying the source code so that 
# dependencies are cached. This means if you only change your source code 
# (not dependencies), npm install won't run again, saving build time.
RUN npm install

# Copy app source - Now we copy the rest of the application code
# WHY: We copy this AFTER installing dependencies to leverage Docker's layer 
# caching. This way, changing your source code doesn't invalidate the dependency cache.
COPY . .

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Expose port - Documents that the container listens on port 3000
# WHY: While this doesn't actually publish the port (you'll need -p flag for that),
# it serves as documentation for anyone using your image about which ports 
# should be published when running the container.
EXPOSE 3000

# Start the app
CMD ["node", "src/app.js"]
```

### Creating a .dockerignore File

Create a `.dockerignore` file to exclude unnecessary files:

```
node_modules
npm-debug.log
.git
.gitignore
.env
.env.*
*.md
.vscode
coverage
tests
```

### Docker Compose for Development

#### Why Use Docker Compose?

Managing multiple containers with individual `docker run` commands quickly becomes complex and error-prone. Docker Compose solves this problem by allowing you to define your entire application stack in a single YAML file.

**Key Benefits of Docker Compose:**

1. **Simplified Configuration**: Define all services, networks, and volumes in one file
2. **Service Coordination**: Automatically manages dependencies between containers
3. **Environment Consistency**: Ensures all team members run identical environments
4. **Single Command Operations**: Start/stop entire application stack with one command
5. **Development Workflow**: Supports local development with volume mounting

#### Docker Compose Architecture

Here's how a typical Express API with MongoDB architecture looks using Docker Compose:

```
┌─────────────────────────────────┐      ┌─────────────────────────┐
│           Express API           │      │         MongoDB         │
│           Container             │      │         Container       │
│                                 │      │                         │
│  ┌─────────────┐     ┌────────┐ │      │  ┌───────────────────┐  │
│  │             │     │        │ │      │  │                   │  │
│  │  Node.js    │────▶│Express │ │      │  │     MongoDB       │  │
│  │  Runtime    │     │  App   │◀│──────│─▶│     Database      │  │
│  │             │     │        │ │      │  │                   │  │
│  └─────────────┘     └────────┘ │      │  └───────────────────┘  │
│                                 │      │                         │
└─────────────────┬───────────────┘      └─────────────────────────┘
                  │                                    ▲
                  │                                    │
                  │                                    │
                  │      Docker Network (user-defined) │
                  └────────────────────────────────────┘
                                    ▲
                                    │
                                    │
                                    │
                            ┌───────┴────────┐
                            │  Host System   │
                            │  Port 3000     │
                            └────────────────┘
```

#### Creating a docker-compose.yml File

Let's create a `docker-compose.yml` file for local development and understand why each configuration matters:

```yaml
# Docker Compose version - using 3.8 for modern features
version: '3.8'

services:
  # API service configuration
  api:
    # Build configuration - tells Docker how to build the API image
    build:
      # WHY: The context specifies where to find the build files (current directory)
      context: .
      # WHY: Using a separate dev Dockerfile allows for development-specific settings
      dockerfile: Dockerfile.dev
    
    # Volume mounts - critical for development workflow
    volumes:
      # WHY: Maps local directory to container's /app directory for live code changes
      # This is what enables hot reloading - change code locally, see changes immediately
      - ./:/app
      # WHY: This prevents the container's node_modules from being overwritten by the host's
      # This is a common gotcha - without this, installed modules in container would be lost
      - /app/node_modules
    
    # Port mapping - makes the API accessible from the host
    ports:
      # WHY: Maps host port 3000 to container port 3000
      # Format is "HOST:CONTAINER" - change left side if port 3000 is already used on host
      - "3000:3000"
    
    # Environment variables - configuration without hardcoding
    environment:
      # WHY: Sets Node to development mode for better debugging and verbose errors
      - NODE_ENV=development
      # WHY: Connection string uses service name 'mongo' as hostname
      # This works because Docker Compose creates an internal DNS entry for each service
      - MONGO_URI=mongodb://mongo:27017/express_api
    
    # Dependencies - ensures services start in correct order
    depends_on:
      # WHY: Ensures MongoDB container starts before API container
      # Note: This only waits for container to start, not for MongoDB to be ready
      - mongo
    
    # Startup command - what runs when container starts
    # WHY: Uses npm run dev instead of npm start to enable nodemon for hot reloading
    command: npm run dev

  # MongoDB service configuration
  mongo:
    # WHY: Using official MongoDB image saves us from having to configure MongoDB ourselves
    image: mongo:5.0
    
    # Port mapping - makes MongoDB accessible from host for debugging
    ports:
      # WHY: Maps host port 27017 to container port 27017
      # This allows you to connect to the database from the host using MongoDB tools
      - "27017:27017"
    
    # Volume mounts - persists database data
    volumes:
      # WHY: Uses a named volume to persist data between container restarts
      # Without this, all database data would be lost when container is removed
      - mongo-data:/data/db

# Named volumes definition - persists data between container restarts
volumes:
  # WHY: Named volumes are managed by Docker and persist even if containers are removed
  # This ensures your database data survives container rebuilds and system restarts
  mongo-data:
```

#### Key Docker Compose Concepts Explained

1. **Service Names as Hostnames**: Inside the Docker network, service names (like 'mongo') automatically become hostnames. That's why we can use `mongodb://mongo:27017/express_api` as the connection string.

2. **depends_on**: This ensures services start in the correct order. However, it only waits for the container to start, not for the service inside to be ready. For production, consider implementing a healthcheck or connection retry logic.

3. **volumes**: 
   - `./:/app` mounts your local code into the container, enabling live code changes without rebuilding
   - `/app/node_modules` is a trick to prevent the container's node_modules from being overwritten by the host's

4. **Named Volumes**: `mongo-data` persists database data even if you remove and recreate containers

#### Running Your Multi-container Application

```bash
# Start all services
docker-compose up

# Run in detached mode (background)
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down

# Stop and remove volumes (caution: destroys data)
docker-compose down -v
```

#### Development vs. Production Compose Files

For production environments, consider using a separate compose file with production-specific settings:

```yaml
# docker-compose.prod.yml
version: '3.8'

services:
  api:
    image: your-registry/express-api:latest  # Use pre-built image instead of building
    environment:
      - NODE_ENV=production
      - MONGO_URI=mongodb://mongo:27017/express_api
    restart: always  # Always restart container if it crashes
    # Remove development-specific volumes and use production command

  mongo:
    image: mongo:5.0
    volumes:
      - mongo-prod-data:/data/db
    # Add authentication and other security measures for production
    environment:
      - MONGO_INITDB_ROOT_USERNAME=${MONGO_USER}
      - MONGO_INITDB_ROOT_PASSWORD=${MONGO_PASSWORD}
    restart: always

volumes:
  mongo-prod-data:
```

Run with:
```bash
docker-compose -f docker-compose.prod.yml up -d
```

Create a development Dockerfile (`Dockerfile.dev`):

```dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
```

## Testing Your Containerized API

### Unit Testing with Jest

Create a test file at `tests/user.test.js`:

```javascript
const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/userModel');

// Connect to test database before tests
beforeAll(async () => {
  const url = process.env.MONGO_URI || 'mongodb://localhost:27017/test_db';
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});

// Clear database between tests
beforeEach(async () => {
  await User.deleteMany({});
});

// Disconnect after all tests
afterAll(async () => {
  await mongoose.connection.close();
});

describe('User API', () => {
  // Test creating a user
  it('should create a new user', async () => {
    const userData = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123'
    };

    const response = await request(app)
      .post('/api/users')
      .send(userData);

    expect(response.statusCode).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.data.name).toBe(userData.name);
    expect(response.body.data.email).toBe(userData.email);
  });

  // Test getting all users
  it('should get all users', async () => {
    // Create test users
    await User.create([
      { name: 'User 1', email: 'user1@example.com', password: 'password123' },
      { name: 'User 2', email: 'user2@example.com', password: 'password123' }
    ]);

    const response = await request(app).get('/api/users');

    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data.length).toBe(2);
  });
});
```

### Integration Testing with Docker

Create a `docker-compose.test.yml` file:

```yaml
version: '3.8'

services:
  api-test:
    build:
      context: .
      dockerfile: Dockerfile.test
    environment:
      - NODE_ENV=test
      - MONGO_URI=mongodb://mongo-test:27017/test_db
    depends_on:
      - mongo-test
    command: npm test

  mongo-test:
    image: mongo:5.0
    ports:
      - "27018:27017"
```

Create a test Dockerfile (`Dockerfile.test`):

```dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "test"]
```

## Security Best Practices

### 1. Use Environment Variables for Secrets

Create a `.env` file (never commit to version control):

```
NODE_ENV=development
PORT=3000
MONGO_URI=mongodb://localhost:27017/express_api
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=30d
```

### 2. Implement Authentication

Create middleware at `src/middleware/auth.js`:

```javascript
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.protect = async (req, res, next) => {
  let token;
  
  // Check for token in headers
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }
  
  if (!token) {
    return res.status(401).json({
      success: false,
      error: {
        code: 401,
        message: 'Not authorized to access this route'
      }
    });
  }
  
  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Attach user to request
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      error: {
        code: 401,
        message: 'Not authorized to access this route'
      }
    });
  }
};

// Grant access to specific roles
exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        error: {
          code: 403,
          message: 'User role not authorized to access this route'
        }
      });
    }
    next();
  };
};
```

### 3. Rate Limiting

Add rate limiting middleware:

```javascript
const rateLimit = require('express-rate-limit');

// Rate limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    success: false,
    error: {
      code: 429,
      message: 'Too many requests, please try again later.'
    }
  }
});

// Apply to all requests
app.use('/api/', apiLimiter);
```

## Production Deployment Strategies

### 1. Multi-Stage Docker Build

Create an optimized production Dockerfile:

```dockerfile
# Build stage
FROM node:16-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

# Production stage
FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app/package*.json ./
RUN npm ci --only=production
COPY --from=builder /app ./

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "src/app.js"]
```

### 2. Container Orchestration with Docker Swarm

Create a `docker-stack.yml` file:

```yaml
version: '3.8'

services:
  api:
    image: your-registry/express-api:latest
    deploy:
      replicas: 3
      update_config:
        parallelism: 1
        delay: 10s
      restart_policy:
        condition: on-failure
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - MONGO_URI=mongodb://mongo:27017/express_api
    networks:
      - app-network
    depends_on:
      - mongo

  mongo:
    image: mongo:5.0
    volumes:
      - mongo-data:/data/db
    deploy:
      placement:
        constraints: [node.role == manager]
    networks:
      - app-network

networks:
  app-network:

volumes:
  mongo-data:
```

## Conclusion

Congratulations! You've learned how to build a production-ready Express API with Docker. You now have the skills to:

- Design RESTful APIs with proper resource naming and HTTP methods
- Implement a structured Express.js application with controllers and models
- Containerize your API with Docker for consistent environments
- Set up local development with Docker Compose
- Implement proper testing strategies
- Secure your API with authentication and other best practices
- Deploy your containerized API to production

Remember, the key to mastering API development is practice and continuous improvement. Start with this foundation and keep building on it as you explore more advanced concepts like GraphQL, microservices, and serverless architectures.

## Next Steps

- Add TypeScript to your Express API for better type safety
- Implement API documentation with Swagger/OpenAPI
- Set up CI/CD pipelines for automated testing and deployment
- Explore Kubernetes for more advanced container orchestration
- Add monitoring and logging with tools like Prometheus and ELK stack

Happy coding!
