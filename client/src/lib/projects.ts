export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  videoUrl: string;
  githubUrl: string;
  
  category: 'Core Engineering' | 'Automation' | 'Authoring' | 'UI/UX' | 'Full-Stack AI'|'Research';
}

export const projects: Project[] = [
  {
    id: 'project-management-system',
    title: 'Project Management System',
    description: 'A robust Business management platform utilizing Custom API Architecture with Node.js controllers like suggestTasks and balanceWorkload to orchestrate complex resource allocation and risk analysis.',
    tags: ['Node.js', 'JWT', 'AWS S3', 'Custom APIs'],
    videoUrl: '', 
    githubUrl: 'https://github.com/Ambreensheikh/project-management-system',
    category: 'Core Engineering'
  },
  {
    id: 'ai-employee-vault',
    title: 'AI Employee 24/7 Vault',
    description: 'A sophisticated communication monitoring system built on Event-Driven Architecture (EDA). It employs Python-based File Watchers to trigger real-time workflows from Gmail, WhatsApp, and LinkedIn events.',
    tags: ['Python', 'EDA', 'File Watchers', 'Automation'],
    videoUrl: '/video2.mp4',
    githubUrl: 'https://github.com/Ambreensheikh/AI-Employee-GoldTier',
    category: 'Automation'
  },
  {
    id: 'ai-explained-book',
    title: 'Robotics-AI-Book',
    description: 'An AI-orchestrated content engineering pipeline. This project uses a multi-agent Event-Driven Architecture to coordinate narrative structuring, technical generation, and cross-chapter consistency checks.',
    tags: ['AI Orchestration', 'Content Engineering', 'Multi-agent Systems'],
    videoUrl: '/video3.mp4',
    githubUrl: 'https://github.com/Ambreensheikh/my-hackathon-book',
    category: 'Authoring',
    
  },
  {
   id: 'legacy-chatbot-v1',
    title: 'TaskFlow-AI-Chatbot',
    description: 'A robust AI-integrated task engine featuring a high-performance FastAPI backend and Neon PostgreSQL. Implements SQLModel for ORM and Pydantic for strict schema validation.',
    tags: ["FastAPI", "Python", "SQLModel", "Neon DB", "PostgreSQL"],
    videoUrl: '/video4.mp4',
    githubUrl: 'https://github.com/Ambreensheikh/phase2-todo',
    category: 'Full-Stack AI',
    

  },
  {
    id: 'ai-inventory',
    title: 'AI Inventory',
    description: 'A smart stock management system leveraging a hybrid Custom API Architecture. It coordinates ACID-compliant PostgreSQL transactions with flexible MongoDB schema synchronization for real-time inventory tracking.',
    tags: ['MongoDB', 'PostgreSQL', 'Inventory Management', 'Hybrid Database'],
    videoUrl: '/video5.mp4',
    githubUrl: 'https://github.com/Ambreensheikh/ai-inventory',
    category: 'Core Engineering',
  },
];
