import express, { Router } from 'express';
import serverless from 'serverless-http';
import { bio } from './../modules/bio';
import { projects } from './../modules/projects';
import { techStack } from './../modules/techStack'; 
import { timeline } from './../modules/timeLine';
const app = express();
const router = Router();

// --- API ROUTES ---

// Main entry for the AI Agent (Combines everything)
router.get('/', (req, res) => {
    res.json({
        profile: bio,
        skills: techStack,
        portfolio: projects,
        history: timeline
    });
});

// Specific endpoints
router.get('/about-me', (req, res) => res.json(bio));
router.get('/projects', (req, res) => res.json(projects));
router.get('/tech-stack', (req, res) => res.json(techStack));

// --- NETLIFY CONFIG ---

app.use('/.netlify/functions/index', router);
app.use('/', router);

export const handler = serverless(app);