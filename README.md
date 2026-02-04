# Netlify Functions API with Express.js

This project demonstrates how to create a serverless API using Netlify Functions with Express.js and TypeScript. It serves as a modern, scalable solution for hosting backend services without managing servers.

## Table of Contents
- [Project Structure](#project-structure)
- [File-by-File Explanation](#file-by-file-explanation)
- [How It Works](#how-it-works)
- [Deployment](#deployment)
- [Development](#development)

## Project Structure

```
API/
├── netlify.toml          # Netlify deployment configuration
├── package.json          # Project metadata and dependencies
├── pnpm-lock.yaml        # Dependency version lock file
└── functions/
    └── index.ts          # Main serverless function entry point
```

## File-by-File Explanation

### 2. `netlify.toml`

```toml
[build]
  functions = "your-folder-name"
```

**Explanation:**
- **[build]**: Build configuration section for Netlify
- **functions**: Specifies the directory where Netlify Functions are located
  - Value `"functions"` tells Netlify to look for serverless functions in the `functions` directory
  - This is crucial for Netlify to properly deploy and route function requests
  - If you don't use a netlify.toml, it defaults to netlify/functions or functions/.
   - The key must stay functions because that is the reserved Netlify configuration property. You only change the value to your folder name.
### 3. `functions/index.ts`

```typescript
import express, { Router } from 'express';
import serverless from 'serverless-http';

const app = express();
const router = Router();

router.get('/me', (req, res) => {
  res.json({
    name: "me",
    role: "Full-Stack Developer",
    platform: "Netlify Functions",
    status: "Live"
  });
});

// Netlify passes the full path (/.netlify/functions/index/me) to Express. Express was looking for /me at the root, but it was actually nested under the function name. Adding app.use('/.netlify/functions/index', router) tells Express to look there too.
app.use('/.netlify/functions/index', router);
app.use('/', router);

export const handler = serverless(app);
```

**Explanation:**
- **Import Statements**:
  - `express, { Router }`: Imports Express.js framework and Router utility
  - `serverless from 'serverless-http'`: Imports serverless-http wrapper function

- **Application Setup**:
  - `const app = express();`: Creates an Express application instance
  - `const router = Router();`: Creates a router instance for organizing routes

- **Route Definition**:
  - `router.get('/me', ...)` defines a GET route at `/me`
  - The callback function handles incoming requests and sends JSON response
  - Response object contains profile information

- **Route Mounting**:
  - `app.use('/.netlify/functions/index', router);`: Mounts router at Netlify's internal path
  - `app.use('/', router);`: Mounts router at root path for direct access
  - Both are needed because Netlify modifies the request path internally

- **Export Statement**:
  - `export const handler = serverless(app);`: Exports the serverless handler
  - `serverless(app)` wraps the Express app for serverless compatibility
  - This creates the function that Netlify will execute for requests

### 4. Commented-Out Code Sections

The file also contains commented-out examples of traditional Node.js and Express setups:

```typescript
// Original Node.js HTTP server example
// Shows how to create a server without Express

// Traditional Express server example  
// Shows how to create a server with Express locally

 // FastAPI example
 // Shows how to create a server with FastAPI (Python)
```

These are kept for educational purposes to show the evolution from traditional servers to serverless functions.

## How It Works

### Serverless Architecture
1. **Request Flow**: Client → Netlify → Serverless Function → Express Router → Response
2. **Cold Start**: Function initializes on first request or after period of inactivity
3. **Execution**: Express routes handle the request and generate response
4. **Response**: Result sent back through Netlify to client

### Path Handling
Netlify modifies the request path by prepending `/.netlify/functions/[function-name]`. The dual route mounting ensures the API works regardless of how Netlify processes the path.

### Environment
- **Serverless**: No need to manage servers or scaling
- **TypeScript**: Type safety and better development experience
- **Express Compatibility**: Familiar routing and middleware patterns

## Deployment

1. Push code to a Git repository connected to Netlify
2. Netlify automatically detects the `netlify.toml` configuration
3. Functions in the `functions` directory are deployed as serverless endpoints
4. The `/me` endpoint becomes accessible at:
   - `https://your-site.netlify.app/.netlify/functions/index/me`
   - Or with Netlify's function URL directly

## Development

### Local Development
To run locally during development:

```bash
# Install dependencies
pnpm install

# Run with tsx for development
pnpm tsx watch express,ts
```

### Testing the Endpoint
After deployment, visit:
- `/.netlify/functions/index/me` - Full path access
- Alternative direct access if configured in Netlify

## Benefits of This Approach

1. **Scalability**: Automatically scales with demand
2. **Cost Efficiency**: Pay only for executions, not idle servers
3. **Maintenance**: No server management required
4. **Familiarity**: Uses Express.js patterns developers already know
5. **Performance**: Global CDN distribution through Netlify
6. **Integration**: Seamless integration with Netlify ecosystem

## Customization

To add new endpoints:
1. Define new routes using the router (e.g., `router.post('/new-endpoint', ...)`)
2. Deploy to Netlify - functions auto-deploy
3. Access via the appropriate path

This setup provides a robust foundation for building serverless APIs with familiar Express.js patterns while leveraging Netlify's infrastructure.