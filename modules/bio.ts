import { BioData } from './schema';

export const bio: BioData = {
    name: "𝔐𝔲𝔥𝔞𝔪𝔪𝔞𝔡 ͯś𝔲𝔥𝔞𝔦𝔟",
    role: "Fυʅʅ-Sƚαƈƙ & AI Eɳɠιɳҽ𝚎𝚛",
    specialties: ["Agentic AI", "Python", "Next.js", "Scalable DevOps Architectures"],
    bio: `
    𝑰 𝒃𝒖𝒊𝒍𝒅 𝒊𝒏𝒕𝒆𝒍𝒍𝒊𝒈𝒆𝒏𝒕 𝒔𝒚𝒔𝒕𝒆𝒎𝒔 𝒂𝒏𝒅 𝒔𝒄𝒂𝒍𝒂𝒃𝒍𝒆 𝑫𝒆𝒗𝑶𝒑𝒔-𝒅𝒓𝒊𝒗𝒆𝒏 𝒂𝒓𝒄𝒉𝒊𝒕𝒆𝒄𝒕𝒖𝒓𝒆𝒔. <br/>
    𝑺𝒑𝒆𝒄𝒊𝒂𝒍𝒊𝒛𝒊𝒏𝒈 𝒊𝒏 𝑨𝒈𝒆𝒏𝒕𝒊𝒄 𝑨𝑰, 𝑷𝒚𝒕𝒉𝒐𝒏, 𝒂𝒏𝒅 𝑵𝒆𝒙𝒕.𝒋𝒔, 𝑰 𝒃𝒓𝒊𝒅𝒈𝒆 𝒕𝒉𝒆 𝒈𝒂𝒑 𝒃𝒆𝒕𝒘𝒆𝒆𝒏 𝒄𝒐𝒎𝒑𝒍𝒆𝒙 𝒍𝒐𝒈𝒊𝒄
    𝒂𝒏𝒅 𝒅𝒚𝒏𝒂𝒎𝒊𝒄 𝒆𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒆𝒔. 𝑳𝒆𝒕&apos;𝒔 𝒃𝒖𝒊𝒍𝒅 𝒕𝒉𝒆 𝒇𝒖𝒕𝒖𝒓𝒆 𝒕𝒐𝒈𝒆𝒕𝒉𝒆𝒓!`
    .replace(/<br\s*\/?>/gi, '\n') // Converts HTML breaks to newlines
    .replace(/&apos;/g, "'")       // Converts HTML entities to standard apostrophes
    .trim(),                        // Removes leading/trailing whitespace,
    location: "Karachi, Pakistan",
    socials: {
        github: "https://github.com/MuhammedSuhaib",
        linkedin: "https://www.linkedin.com/in/suhaib1/",
        x: "https://x.com/cuhaib1"
    }
};
