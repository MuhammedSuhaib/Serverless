// Define TypeScript interfaces
export interface SocialLinks {
    github: string;
    linkedin: string;
    x: string;
}

export interface BioData {
    name: string;
    role: string;
    specialties: string[];
    bio: string;
    location: string;
    socials: SocialLinks;
}

export interface Project {
    link: string;
    title: string;
    description: string;
    image: string;
}

export interface TechSkill {
    src: string;
    alt: string;
    name: string;
}

export interface TimelineEvent {
    year: string;
    text: string;
}
