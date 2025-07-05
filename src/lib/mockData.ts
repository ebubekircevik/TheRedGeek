export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  category: string;
  tags: string[];
  readTime: number;
  imageUrl?: string;
}

export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Developing Modern Web Applications with Next.js 14",
    content: `
# Developing Modern Web Applications with Next.js 14

Next.js 14 is one of the most current and powerful frameworks for developing React-based web applications. In this article, we will explore the new features of Next.js 14 and how we can develop modern web applications.

## What is App Router?

App Router is the new routing system that came with Next.js 13. Thanks to this system:

- **Better Performance**: Faster page loads with Server Components
- **Easy Routing**: File-based routing system
- **SEO Optimization**: Automatic meta tag management

## Server Components vs Client Components

### Server Components
\`\`\`tsx
// This component is rendered on the server
export default function ServerComponent() {
  return <div>Rendered on server</div>
}
\`\`\`

### Client Components
\`\`\`tsx
'use client'

// This component is rendered on the client
export default function ClientComponent() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
\`\`\`

## New Features

### 1. Turbopack
Turbopack is the new bundler that replaces Webpack. It provides 700% faster development server.

### 2. Partial Prerendering
Optimizes static and dynamic parts of pages separately.

### 3. Server Actions
New API for form operations:

\`\`\`tsx
async function createPost(formData: FormData) {
  'use server'
  
  const title = formData.get('title')
  const content = formData.get('content')
  
  // Save to database
  await db.posts.create({ title, content })
}
\`\`\`

## Performance Optimization

### Image Optimization
\`\`\`tsx
import Image from 'next/image'

<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority
/>
\`\`\`

### Font Optimization
\`\`\`tsx
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
\`\`\`

## Deployment

You can deploy Next.js applications on Vercel, Netlify, or your own server.

### Vercel Deployment
\`\`\`bash
npm install -g vercel
vercel
\`\`\`

## Conclusion

Next.js 14 is an excellent choice for modern web development. With App Router, Server Components, and other new features, you can develop faster, SEO-friendly, and high-user-experience applications.

In our future articles, we will cover more advanced topics with Next.js.
    `,
    excerpt:
      "Discover the new features of Next.js 14 and learn how to develop modern web applications. Detailed information about App Router, Server Components, and performance optimizations.",
    author: "TheRedGeek",
    publishedAt: "2024-01-15",
    category: "Web Development",
    tags: ["Next.js", "React", "JavaScript", "Web Development"],
    readTime: 8,
    imageUrl: "/images/nextjs-14.jpg",
  },
  {
    id: "2",
    title: "Writing Safer Code with TypeScript",
    content: `
# Writing Safer Code with TypeScript

TypeScript is the type-safe version of JavaScript. In this article, we will learn the fundamentals of TypeScript and how we can write safer code.

## What is TypeScript?

TypeScript is an open-source programming language developed by Microsoft. It adds a type system to JavaScript and allows you to write safer code.

## Basic Types

### Primitive Types
\`\`\`typescript
let name: string = "TheRedGeek"
let age: number = 25
let isActive: boolean = true
let skills: string[] = ["JavaScript", "TypeScript", "React"]
\`\`\`

### Object Types
\`\`\`typescript
interface User {
  id: number
  name: string
  email: string
  isAdmin?: boolean // Optional property
}

const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com"
}
\`\`\`

## Generic Types

Generics prevent code duplication while ensuring type safety:

\`\`\`typescript
function createArray<T>(length: number, value: T): T[] {
  return Array(length).fill(value)
}

const stringArray = createArray<string>(3, "hello")
const numberArray = createArray<number>(3, 42)
\`\`\`

## Union Types

Variables that accept multiple types:

\`\`\`typescript
type Status = "loading" | "success" | "error"

function handleStatus(status: Status) {
  switch (status) {
    case "loading":
      return "Loading..."
    case "success":
      return "Success!"
    case "error":
      return "Error occurred!"
  }
}
\`\`\`

## Interface vs Type

### Interface
\`\`\`typescript
interface Animal {
  name: string
  makeSound(): void
}

interface Dog extends Animal {
  breed: string
}
\`\`\`

### Type
\`\`\`typescript
type Animal = {
  name: string
  makeSound(): void
}

type Dog = Animal & {
  breed: string
}
\`\`\`

## Utility Types

TypeScript's built-in utility types:

\`\`\`typescript
interface User {
  id: number
  name: string
  email: string
  password: string
}

// Partial - makes all properties optional
type PartialUser = Partial<User>

// Pick - selects only specific properties
type UserCredentials = Pick<User, "email" | "password">

// Omit - removes specific properties
type PublicUser = Omit<User, "password">
\`\`\`

## React with TypeScript

### Component Props
\`\`\`typescript
interface ButtonProps {
  text: string
  onClick: () => void
  variant?: "primary" | "secondary"
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ 
  text, 
  onClick, 
  variant = "primary", 
  disabled = false 
}) => {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={\`btn btn-\${variant}\`}
    >
      {text}
    </button>
  )
}
\`\`\`

## Best Practices

1. **Strict Mode**: Enable strict mode in TypeScript config
2. **Explicit Types**: Use explicit type definitions whenever possible
3. **Interface First**: Define interfaces first, then implement
4. **Use Generics**: Use generics to prevent code duplication

## Conclusion

TypeScript improves code quality and prevents errors in large projects. With the fundamentals we learned in this article, you can write safer and more maintainable code.
    `,
    excerpt:
      "Learn the fundamentals of TypeScript and discover how to write safer code. Detailed guide about type system, interfaces, and React integration.",
    author: "TheRedGeek",
    publishedAt: "2024-01-10",
    category: "Programming",
    tags: ["TypeScript", "JavaScript", "Programming", "React"],
    readTime: 10,
    imageUrl: "/images/typescript.jpg",
  },
  {
    id: "3",
    title: "Rapid UI Development with Tailwind CSS",
    content: `
# Rapid UI Development with Tailwind CSS

With Tailwind CSS, a utility-first CSS framework, you can create fast and responsive web designs. In this article, we will learn the fundamentals of Tailwind CSS and its practical usage.

## What is Tailwind CSS?

Tailwind CSS is a CSS framework that adopts a utility-first approach. You can quickly create styles using pre-defined utility classes.

## Basic Utility Classes

### Spacing
\`\`\`html
<div class="p-4 m-2">Padding and margin</div>
<div class="px-6 py-3">X and Y axis spacing</div>
<div class="space-y-4">Space between child elements</div>
\`\`\`

### Colors
\`\`\`html
<div class="bg-blue-500 text-white">Blue background, white text</div>
<div class="text-gray-700 bg-gray-100">Gray tones</div>
<div class="border-red-500 border-2">Red border</div>
\`\`\`

### Typography
\`\`\`html
<h1 class="text-4xl font-bold text-gray-900">Large heading</h1>
<p class="text-lg text-gray-600 leading-relaxed">Readable paragraph</p>
<span class="text-sm text-gray-500">Small text</span>
\`\`\`

## Responsive Design

Tailwind's responsive prefixes:

\`\`\`html
<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- Mobile: full width, Tablet: half width, Desktop: third width -->
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- Responsive grid -->
</div>
\`\`\`

## Flexbox and Grid

### Flexbox
\`\`\`html
<div class="flex items-center justify-between">
  <div>Left content</div>
  <div>Right content</div>
</div>

<div class="flex flex-col md:flex-row gap-4">
  <!-- Responsive flex direction -->
</div>
\`\`\`

### Grid
\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-white p-6 rounded-lg shadow-md">Card 1</div>
  <div class="bg-white p-6 rounded-lg shadow-md">Card 2</div>
  <div class="bg-white p-6 rounded-lg shadow-md">Card 3</div>
</div>
\`\`\`

## Hover and Focus States

\`\`\`html
<button class="bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 text-white px-4 py-2 rounded-lg transition-colors">
  Button with hover and focus effects
</button>
\`\`\`

## Custom Components

### Card Component
\`\`\`html
<div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
  <h3 class="text-xl font-semibold text-gray-900 mb-2">Card Title</h3>
  <p class="text-gray-600 mb-4">Card description goes here.</p>
  <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
    Continue
  </button>
</div>
\`\`\`

### Navigation
\`\`\`html
<nav class="bg-gray-800 text-white">
  <div class="max-w-6xl mx-auto px-4">
    <div class="flex items-center justify-between h-16">
      <div class="text-xl font-bold">Logo</div>
      <div class="hidden md:flex space-x-4">
        <a href="#" class="hover:text-gray-300 transition-colors">Home</a>
        <a href="#" class="hover:text-gray-300 transition-colors">About</a>
        <a href="#" class="hover:text-gray-300 transition-colors">Contact</a>
      </div>
    </div>
  </div>
</nav>
\`\`\`

## Dark Mode

Tailwind's dark mode support:

\`\`\`html
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  <h1 class="text-2xl font-bold">Dark mode supported content</h1>
</div>
\`\`\`

## Performance

### Purge CSS
Tailwind automatically removes unused CSS in production builds.

### JIT Mode
Faster build times with Just-In-Time mode.

## Best Practices

1. **Component-based**: Extract repeating structures into components
2. **Consistent spacing**: Use a consistent spacing system
3. **Responsive first**: Adopt a mobile-first approach
4. **Custom utilities**: Add custom utilities when needed

## Conclusion

Tailwind CSS is an excellent tool for modern web development. With its utility-first approach, you can create fast and consistent UIs.
    `,
    excerpt:
      "Learn how to create fast and responsive web designs with Tailwind CSS. Detailed guide about utility-first approach, responsive design, and best practices.",
    author: "TheRedGeek",
    publishedAt: "2024-01-05",
    category: "CSS",
    tags: ["Tailwind CSS", "CSS", "UI/UX", "Web Design"],
    readTime: 12,
    imageUrl: "/images/tailwind-css.jpg",
  },
  {
    id: "4",
    title: "State Management in React with Zustand",
    content: `
# State Management in React with Zustand

Zustand is a lightweight state management library for React that provides a simple and intuitive API. In this article, we will explore how to use Zustand for state management in React applications.

## What is Zustand?

Zustand is a small, fast, and scalable state management solution. Unlike Redux, it doesn't require providers or complex setup.

## Basic Setup

### Installation
\`\`\`bash
npm install zustand
\`\`\`

### Creating a Store
\`\`\`typescript
import { create } from 'zustand'

interface CounterStore {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}))
\`\`\`

## Using the Store

### In Components
\`\`\`typescript
import { useCounterStore } from './store'

function Counter() {
  const { count, increment, decrement, reset } = useCounterStore()

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
\`\`\`

## Advanced Features

### Async Actions
\`\`\`typescript
interface UserStore {
  users: User[]
  loading: boolean
  fetchUsers: () => Promise<void>
}

const useUserStore = create<UserStore>((set) => ({
  users: [],
  loading: false,
  fetchUsers: async () => {
    set({ loading: true })
    try {
      const response = await fetch('/api/users')
      const users = await response.json()
      set({ users, loading: false })
    } catch (error) {
      set({ loading: false })
      console.error('Failed to fetch users:', error)
    }
  },
}))
\`\`\`

### Computed Values
\`\`\`typescript
interface TodoStore {
  todos: Todo[]
  addTodo: (text: string) => void
  toggleTodo: (id: string) => void
  getCompletedTodos: () => Todo[]
}

const useTodoStore = create<TodoStore>((set, get) => ({
  todos: [],
  addTodo: (text) => set((state) => ({
    todos: [...state.todos, { id: Date.now().toString(), text, completed: false }]
  })),
  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  })),
  getCompletedTodos: () => get().todos.filter(todo => todo.completed),
}))
\`\`\`

## Persistence

### Local Storage
\`\`\`typescript
import { persist } from 'zustand/middleware'

const usePersistedStore = create(
  persist(
    (set) => ({
      theme: 'light',
      setTheme: (theme: string) => set({ theme }),
    }),
    {
      name: 'theme-storage',
    }
  )
)
\`\`\`

## DevTools Integration

\`\`\`typescript
import { devtools } from 'zustand/middleware'

const useStoreWithDevTools = create(
  devtools(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
    }),
    {
      name: 'counter-store',
    }
  )
)
\`\`\`

## Best Practices

1. **Keep stores small**: Create multiple small stores instead of one large store
2. **Use TypeScript**: Define proper interfaces for your stores
3. **Avoid nested updates**: Use immer for complex state updates
4. **Optimize re-renders**: Use selectors to prevent unnecessary re-renders

## Comparison with Other Libraries

### vs Redux
- **Zustand**: Simple setup, less boilerplate
- **Redux**: More features, larger ecosystem

### vs Context API
- **Zustand**: Better performance, easier testing
- **Context**: Built-in, no additional dependencies

## Conclusion

Zustand is an excellent choice for state management in React applications. Its simplicity and performance make it ideal for both small and large projects.
    `,
    excerpt:
      "Learn how to manage state in React applications with Zustand. Comprehensive guide covering setup, advanced features, and best practices.",
    author: "TheRedGeek",
    publishedAt: "2024-01-20",
    category: "React",
    tags: ["Zustand", "React", "State Management", "JavaScript"],
    readTime: 9,
    imageUrl: "/images/zustand.jpg",
  },
  {
    id: "5",
    title: "Building RESTful APIs with Node.js and Express",
    content: `
# Building RESTful APIs with Node.js and Express

Node.js and Express.js are powerful tools for building scalable RESTful APIs. In this article, we will learn how to create robust APIs using these technologies.

## What is Express.js?

Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

## Project Setup

### Initialization
\`\`\`bash
mkdir api-project
cd api-project
npm init -y
npm install express cors helmet morgan dotenv
npm install --save-dev nodemon @types/node @types/express
\`\`\`

### Basic Server Setup
\`\`\`javascript
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(helmet())
app.use(cors())
app.use(morgan('combined'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' })
})

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`)
})
\`\`\`

## RESTful Routes

### User Routes
\`\`\`javascript
// GET /api/users - Get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

// GET /api/users/:id - Get user by ID
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.json(user)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

// POST /api/users - Create new user
app.post('/api/users', async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.status(201).json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// PUT /api/users/:id - Update user
app.put('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// DELETE /api/users/:id - Delete user
app.delete('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.json({ message: 'User deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
})
\`\`\`

## Middleware

### Authentication Middleware
\`\`\`javascript
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.status(401).json({ error: 'Access token required' })
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' })
    }
    req.user = user
    next()
  })
}

// Protected route
app.get('/api/profile', authenticateToken, (req, res) => {
  res.json({ user: req.user })
})
\`\`\`

### Error Handling Middleware
\`\`\`javascript
const errorHandler = (err, req, res, next) => {
  console.error(err.stack)
  
  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message })
  }
  
  if (err.name === 'CastError') {
    return res.status(400).json({ error: 'Invalid ID format' })
  }
  
  res.status(500).json({ error: 'Something went wrong!' })
}

app.use(errorHandler)
\`\`\`

## Database Integration

### MongoDB with Mongoose
\`\`\`javascript
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
})

const User = mongoose.model('User', userSchema)
\`\`\`

## API Documentation

### Swagger/OpenAPI
\`\`\`javascript
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'User API',
      version: '1.0.0',
      description: 'A simple user management API',
    },
  },
  apis: ['./routes/*.js'],
}

const specs = swaggerJsdoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
\`\`\`

## Testing

### Jest Setup
\`\`\`javascript
const request = require('supertest')
const app = require('../app')

describe('User API', () => {
  test('GET /api/users should return all users', async () => {
    const response = await request(app).get('/api/users')
    expect(response.status).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
  })
})
\`\`\`

## Deployment

### Environment Variables
\`\`\`bash
# .env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/myapp
JWT_SECRET=your-secret-key
NODE_ENV=production
\`\`\`

### PM2 Configuration
\`\`\`javascript
// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'api-server',
    script: 'app.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    },
  }],
}
\`\`\`

## Best Practices

1. **Security**: Use helmet, cors, and input validation
2. **Error Handling**: Implement proper error handling middleware
3. **Logging**: Use morgan for HTTP request logging
4. **Validation**: Validate input data with libraries like Joi
5. **Rate Limiting**: Implement rate limiting for API endpoints

## Conclusion

Node.js and Express.js provide a powerful foundation for building RESTful APIs. With proper structure and best practices, you can create scalable and maintainable applications.
    `,
    excerpt:
      "Learn how to build robust RESTful APIs using Node.js and Express.js. Comprehensive guide covering setup, routing, middleware, and deployment.",
    author: "TheRedGeek",
    publishedAt: "2024-01-25",
    category: "Backend Development",
    tags: ["Node.js", "Express.js", "REST API", "JavaScript"],
    readTime: 11,
    imageUrl: "/images/nodejs-express.jpg",
  },
  {
    id: "6",
    title: "Modern CSS Techniques with CSS Grid and Flexbox",
    content: `
# Modern CSS Techniques with CSS Grid and Flexbox

Modern CSS provides powerful layout tools with CSS Grid and Flexbox. In this article, we will explore how to create responsive and flexible layouts using these technologies.

## CSS Grid vs Flexbox

### When to Use Grid
- **Two-dimensional layouts**: Both rows and columns
- **Complex layouts**: Magazine-style layouts
- **Grid-based designs**: Card layouts, dashboards

### When to Use Flexbox
- **One-dimensional layouts**: Either rows or columns
- **Navigation menus**: Horizontal or vertical
- **Content alignment**: Centering, spacing

## CSS Grid Fundamentals

### Basic Grid Setup
\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 20px;
  padding: 20px;
}
\`\`\`

### Grid Areas
\`\`\`css
.grid-layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: 80px 1fr 100px;
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
\`\`\`

### Responsive Grid
\`\`\`css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

/* Mobile first approach */
@media (max-width: 768px) {
  .responsive-grid {
    grid-template-columns: 1fr;
  }
}
\`\`\`

## Flexbox Techniques

### Basic Flexbox
\`\`\`css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}
\`\`\`

### Flexbox Navigation
\`\`\`css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #333;
  color: white;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-links a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #ffd700;
}
\`\`\`

### Flexbox Card Layout
\`\`\`css
.card {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.card-title {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  font-weight: bold;
}

.card-description {
  flex: 1;
  color: #666;
  line-height: 1.5;
}

.card-button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.card-button:hover {
  background: #0056b3;
}
\`\`\`

## Advanced Layouts

### Holy Grail Layout
\`\`\`css
.holy-grail {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: 80px 1fr 100px;
  min-height: 100vh;
}

.header { grid-area: header; }
.nav { grid-area: nav; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }

@media (max-width: 768px) {
  .holy-grail {
    grid-template-areas:
      "header"
      "nav"
      "main"
      "aside"
      "footer";
    grid-template-columns: 1fr;
  }
}
\`\`\`

### Masonry-like Layout
\`\`\`css
.masonry {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 0;
  grid-auto-flow: dense;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 20px;
}

.masonry-item.tall {
  grid-row: span 2;
}

.masonry-item.wide {
  grid-column: span 2;
}
\`\`\`

## Performance Optimization

### CSS Containment
\`\`\`css
.optimized-container {
  contain: layout style paint;
  will-change: transform;
}
\`\`\`

### Hardware Acceleration
\`\`\`css
.accelerated {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}
\`\`\`

## Browser Support

### CSS Grid
- **Modern browsers**: Full support
- **IE11**: Partial support (older syntax)
- **Mobile browsers**: Excellent support

### Flexbox
- **All modern browsers**: Full support
- **IE10+**: Good support
- **Mobile browsers**: Excellent support

## Best Practices

1. **Mobile First**: Start with mobile layouts
2. **Progressive Enhancement**: Add complex layouts for larger screens
3. **Semantic HTML**: Use meaningful HTML structure
4. **Accessibility**: Ensure keyboard navigation works
5. **Performance**: Use CSS containment for large layouts

## Conclusion

CSS Grid and Flexbox are powerful tools for modern web layouts. Understanding when and how to use each will help you create responsive, maintainable, and accessible designs.
    `,
    excerpt:
      "Master modern CSS layout techniques with CSS Grid and Flexbox. Learn when to use each, create responsive designs, and optimize performance.",
    author: "TheRedGeek",
    publishedAt: "2024-01-30",
    category: "CSS",
    tags: ["CSS Grid", "Flexbox", "CSS", "Layout", "Responsive Design"],
    readTime: 10,
    imageUrl: "/images/css-grid-flexbox.jpg",
  },
  {
    id: "7",
    title: "Testing React Applications with Jest and React Testing Library",
    content: `
# Testing React Applications with Jest and React Testing Library

Testing is crucial for maintaining code quality and preventing regressions. In this article, we will learn how to test React applications using Jest and React Testing Library.

## Why Testing Matters

### Benefits of Testing
- **Bug Prevention**: Catch issues before they reach production
- **Refactoring Confidence**: Safely refactor code with test coverage
- **Documentation**: Tests serve as living documentation
- **Better Design**: Writing tests often improves code design

## Setup and Configuration

### Installation
\`\`\`bash
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest
\`\`\`

### Jest Configuration
\`\`\`javascript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.tsx',
  ],
}
\`\`\`

### Setup File
\`\`\`javascript
// src/setupTests.js
import '@testing-library/jest-dom'
\`\`\`

## Component Testing

### Basic Component Test
\`\`\`typescript
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  test('renders button with correct text', () => {
    render(<Button>Click me</Button>)
    
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
  })

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    const button = screen.getByRole('button')
    button.click()
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
\`\`\`

### Testing User Interactions
\`\`\`typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  test('submits form with user input', async () => {
    const user = userEvent.setup()
    const handleSubmit = jest.fn()
    
    render(<LoginForm onSubmit={handleSubmit} />)
    
    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const submitButton = screen.getByRole('button', { name: /sign in/i })
    
    await user.type(emailInput, 'test@example.com')
    await user.type(passwordInput, 'password123')
    await user.click(submitButton)
    
    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123',
    })
  })
})
\`\`\`

## Testing Hooks

### Custom Hook Testing
\`\`\`typescript
import { renderHook, act } from '@testing-library/react'
import { useCounter } from './useCounter'

describe('useCounter', () => {
  test('initializes with default value', () => {
    const { result } = renderHook(() => useCounter())
    
    expect(result.current.count).toBe(0)
  })

  test('increments counter', () => {
    const { result } = renderHook(() => useCounter())
    
    act(() => {
      result.current.increment()
    })
    
    expect(result.current.count).toBe(1)
  })

  test('decrements counter', () => {
    const { result } = renderHook(() => useCounter(5))
    
    act(() => {
      result.current.decrement()
    })
    
    expect(result.current.count).toBe(4)
  })
})
\`\`\`

## Testing Async Operations

### API Calls
\`\`\`typescript
import { render, screen, waitFor } from '@testing-library/react'
import { UserList } from './UserList'

// Mock API
jest.mock('./api', () => ({
  fetchUsers: jest.fn(),
}))

import { fetchUsers } from './api'

describe('UserList', () => {
  test('displays users after successful API call', async () => {
    const mockUsers = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
    ]
    
    ;(fetchUsers as jest.Mock).mockResolvedValue(mockUsers)
    
    render(<UserList />)
    
    // Show loading state
    expect(screen.getByText(/loading/i)).toBeInTheDocument()
    
    // Wait for users to load
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument()
    })
    
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument()
  })

  test('displays error message on API failure', async () => {
    ;(fetchUsers as jest.Mock).mockRejectedValue(new Error('API Error'))
    
    render(<UserList />)
    
    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeInTheDocument()
    })
  })
})
\`\`\`

## Testing Context

### Context Provider Testing
\`\`\`typescript
import { render, screen } from '@testing-library/react'
import { ThemeProvider, useTheme } from './ThemeContext'

const TestComponent = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div>
      <span>Current theme: {theme}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

describe('ThemeContext', () => {
  test('provides theme context to children', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
    
    expect(screen.getByText(/current theme: light/i)).toBeInTheDocument()
  })

  test('toggles theme when button is clicked', async () => {
    const user = userEvent.setup()
    
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
    
    const toggleButton = screen.getByRole('button')
    await user.click(toggleButton)
    
    expect(screen.getByText(/current theme: dark/i)).toBeInTheDocument()
  })
})
\`\`\`

## Testing Redux

### Redux Store Testing
\`\`\`typescript
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { renderWithProviders } from './test-utils'
import { TodoList } from './TodoList'

describe('TodoList with Redux', () => {
  test('displays todos from store', () => {
    const preloadedState = {
      todos: {
        items: [
          { id: 1, text: 'Learn Testing', completed: false },
          { id: 2, text: 'Write Tests', completed: true },
        ],
      },
    }
    
    renderWithProviders(<TodoList />, { preloadedState })
    
    expect(screen.getByText('Learn Testing')).toBeInTheDocument()
    expect(screen.getByText('Write Tests')).toBeInTheDocument()
  })
})

// Test utility for Redux
export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = configureStore({
      reducer: { todos: todosReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>
  }
  
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
\`\`\`

## Best Practices

### Testing Principles
1. **Test behavior, not implementation**: Focus on what users see and do
2. **Use semantic queries**: Prefer getByRole over getByTestId
3. **Write accessible tests**: Tests should reflect how users interact
4. **Keep tests simple**: One assertion per test when possible
5. **Use descriptive test names**: Clear what is being tested

### Common Patterns
\`\`\`typescript
// Test data factories
const createUser = (overrides = {}) => ({
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  ...overrides,
})

// Custom render function
const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)
  return render(ui, { wrapper: BrowserRouter })
}
\`\`\`

## Coverage and CI/CD

### Coverage Configuration
\`\`\`javascript
// jest.config.js
module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.tsx',
    '!src/reportWebVitals.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
}
\`\`\`

## Conclusion

Testing React applications with Jest and React Testing Library provides confidence in your code and improves maintainability. Focus on testing user behavior and interactions rather than implementation details.
    `,
    excerpt:
      "Learn how to test React applications effectively with Jest and React Testing Library. Comprehensive guide covering component testing, hooks, and best practices.",
    author: "TheRedGeek",
    publishedAt: "2024-02-05",
    category: "Testing",
    tags: ["Jest", "React Testing Library", "Testing", "React", "JavaScript"],
    readTime: 12,
    imageUrl: "/images/react-testing.jpg",
  },
];

export const getBlogPostById = (id: string): BlogPost | undefined => {
  return mockBlogPosts.find(post => post.id === id);
};

export const getAllBlogPosts = (): BlogPost[] => {
  return mockBlogPosts;
};

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return mockBlogPosts.filter(post => post.category === category);
};

export const searchBlogPosts = (query: string): BlogPost[] => {
  const lowercaseQuery = query.toLowerCase();
  return mockBlogPosts.filter(
    post =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};
