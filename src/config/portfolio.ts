import { ALL_PROJECTS, PRIMARY_PROJECTS } from '@/content/projects';
import { ORACLE_CREDENTIALS } from '@/content/credentials';

export const PORTFOLIO_CONFIG = {
  personal: {
    name: 'André Victor',
    fullName: 'André Victor Andrade Oliveira Santos',
    role: 'Applied AI Engineer & Full-Stack Developer',
    location: 'Bahia, Brazil (IFBA — Vitória da Conquista)',
    email: 'andrevictorandrade@gmail.com',
    secondaryEmail: 'andrevictorandrade@hotmail.com',
    phone: '+55 77 99909-5690',
    githubUsername: 'andrecodexvictor',
    githubUrl: 'https://github.com/andrecodexvictor',
    linkedinUrl: 'https://www.linkedin.com/in/andr%C3%A9-victor-andrade-oliveira-santos-22b142208/',
    instagramUrl: 'https://www.instagram.com/dedevictr/',
    portraitSrc: '/images/andre-portrait-apex.png',
    resumeEnUrl: '/docs/andre-victor-resume.pdf',
    resumePtUrl: '/docs/andre-victor-curriculo-pt.pdf',
  },
  featuredWork: PRIMARY_PROJECTS,
  allWork: ALL_PROJECTS,
  oracleCredentials: ORACLE_CREDENTIALS,
};
