import express, { Request, Response } from 'express';
import cors from 'cors'; // Added for Agent access
import { bio } from './modules/bio';
import { projects } from './modules/projects';
import { techStack } from './modules/techStack';
import { timeline } from './modules/timeLine';

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json());

// --- ROUTES ---

// Main entry for the AI Agent (Combines everything)
app.get('/', (req: Request, res: Response) => {
    res.json({
        profile: bio,
        skills: techStack,
        portfolio: projects,
        history: timeline
    });
});

// Specific endpoints
app.get('/about-me', (req: Request, res: Response) => res.json(bio));
app.get('/projects', (req: Request, res: Response) => res.json(projects));
app.get('/tech-stack', (req: Request, res: Response) => res.json(techStack));

app.listen(7000, () => console.log('Running on : http://localhost:7000/'));
