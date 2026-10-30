import React from 'react';

export type TechIconId =
  | 'typescript'
  | 'javascript'
  | 'python'
  | 'kotlin'
  | 'rust'
  | 'react'
  | 'nextjs'
  | 'vue'
  | 'angular'
  | 'vite'
  | 'tailwindcss'
  | 'nodejs'
  | 'fastapi'
  | 'django'
  | 'spring'
  | 'laravel'
  | 'llms'
  | 'langchain'
  | 'langgraph'
  | 'crewai'
  | 'n8n'
  | 'rag'
  | 'scikit-tensorflow'
  | 'neural-networks'
  | 'chromadb'
  | 'pinecone'
  | 'postgresql'
  | 'mysql'
  | 'mongodb'
  | 'prisma'
  | 'pandas'
  | 'kafka'
  | 'docker'
  | 'oracle'
  | 'vercel';

export interface TechIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  title?: string;
}

export function TypeScriptIcon({ size = 24, title = 'TypeScript', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        fill="#FFFFFF"
        d="M4 7h7v2.2H8.7V19H6.3V9.2H4V7zm10.7 7.1c.4.7 1 1.1 1.9 1.1.9 0 1.5-.4 1.5-1 0-.6-.5-.9-1.5-1.4-1.6-.7-2.6-1.5-2.6-2.9 0-1.7 1.4-2.9 3.3-2.9 1.5 0 2.6.6 3.2 1.8l-1.5.9c-.3-.7-.9-1-1.7-1-.9 0-1.5.5-1.5 1.1 0 .6.4.9 1.4 1.3 1.8.8 2.8 1.6 2.8 3.1 0 1.9-1.5 3-3.6 3-1.9 0-3.1-.9-3.7-2.3l1.8-.9z"
      />
    </svg>
  );
}

export function JavaScriptIcon({ size = 24, title = 'JavaScript', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path
        fill="#000000"
        d="M7 16.2c.4.7 1 1.1 1.8 1.1.8 0 1.3-.4 1.3-1.1V8.5h2.2v7.7c0 1.9-1.2 2.8-3.3 2.8-1.7 0-2.8-.8-3.4-2.1l1.4-.7zm7.4.3c.5.8 1.2 1.2 2.2 1.2 1.1 0 1.8-.5 1.8-1.2 0-.8-.6-1.1-1.8-1.7-1.9-.8-3.1-1.7-3.1-3.3 0-2 1.6-3.4 3.7-3.4 1.7 0 2.9.7 3.6 2l-1.6 1c-.4-.7-1-1.1-1.9-1.1-1 0-1.6.5-1.6 1.2 0 .7.5 1.1 1.6 1.5 2.1.9 3.4 1.8 3.4 3.5 0 2.2-1.7 3.5-4 3.5-2.2 0-3.5-1-4.2-2.5l1.7-.9z"
      />
    </svg>
  );
}

export function PythonIcon({ size = 24, title = 'Python', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <path
        fill="#3776AB"
        d="M11.92 2c-4.47 0-4.18 1.94-4.18 1.94l.01 2.01h4.25v.6H5.97S2 6.1 2 10.59s3.47 4.36 3.47 4.36h2.07v-2.92s-.11-3.47 3.41-3.47h4.22s3.3.06 3.3-3.24V3.94S18.74 2 11.92 2zm-2.36 1.53a.85.85 0 1 1 0 1.7.85.85 0 0 1 0-1.7z"
      />
      <path
        fill="#FFD438"
        d="M12.08 22c4.47 0 4.18-1.94 4.18-1.94l-.01-2.01h-4.25v-.6h6.02S22 17.9 22 13.41s-3.47-4.36-3.47-4.36h-2.07v2.92s.11 3.47-3.41 3.47H8.83s-3.3-.06-3.3 3.24v1.38s-.27 1.94 6.54 1.94zm2.36-1.53a.85.85 0 1 1 0-1.7.85.85 0 0 1 0 1.7z"
      />
    </svg>
  );
}

export function KotlinIcon({ size = 24, title = 'Kotlin', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <defs>
        <linearGradient id="kotlin-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7F52FF" />
          <stop offset="50%" stopColor="#C711E1" />
          <stop offset="100%" stopColor="#F88909" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="4" fill="#1B1B1B" />
      <polygon points="21,3 3,3 3,21 12,21 21,12" fill="url(#kotlin-grad)" />
      <polygon points="3,3 12,12 3,21" fill="#7F52FF" />
    </svg>
  );
}

export function RustIcon({ size = 24, title = 'Rust', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <circle cx="12" cy="12" r="10" fill="#CE412B" />
      <circle cx="12" cy="12" r="7.5" fill="#1E1E1E" />
      <path
        fill="#FFFFFF"
        d="M9 7h4c1.7 0 3 1.1 3 2.7 0 1.2-.7 2.1-1.8 2.5l2.2 4.8h-2.3l-1.9-4.2H11v4.2H9V7zm2 4h1.8c.7 0 1.2-.4 1.2-1s-.5-1-1.2-1H11v2z"
      />
    </svg>
  );
}

export function ReactIcon({ size = 24, title = 'React', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="#61DAFB"
      strokeWidth="1.5"
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill="#61DAFB" stroke="none" />
    </svg>
  );
}

export function NextJSIcon({ size = 24, title = 'Next.js', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <circle cx="12" cy="12" r="11" fill="#000000" stroke="#343E48" strokeWidth="0.8" />
      <path
        d="M15.5 7.5v5.8l-5.3-7.3H8.5v12h2.2v-6.6l6 8.3c.3-.1.6-.3.9-.5.2-.2.4-.4.6-.6l-2.7-3.8V7.5h-2.2z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function VueJSIcon({ size = 24, title = 'Vue.js', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <polygon points="12,21.5 1.5,3.5 6.5,3.5 12,13 17.5,3.5 22.5,3.5" fill="#42B883" />
      <polygon points="12,13 6.5,3.5 9.5,3.5 12,8 14.5,3.5 17.5,3.5" fill="#35495E" />
    </svg>
  );
}

export function AngularIcon({ size = 24, title = 'Angular', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <polygon points="12,2 21.5,5.4 19.8,17.4 12,22 4.2,17.4 2.5,5.4" fill="#DD0031" />
      <polygon points="12,2 12,22 19.8,17.4 21.5,5.4" fill="#C3002F" />
      <polygon points="12,6 7,17.5 9.2,17.5 10.3,14.8 13.7,14.8 14.8,17.5 17,17.5" fill="#FFFFFF" />
      <polygon points="12,10.2 10.9,13 13.1,13" fill="#DD0031" />
    </svg>
  );
}

export function ViteIcon({ size = 24, title = 'Vite', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <defs>
        <linearGradient id="vite-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#41D1FF" />
          <stop offset="100%" stopColor="#BD34FE" />
        </linearGradient>
      </defs>
      <polygon points="12,22 2,5.5 12,2 22,5.5" fill="url(#vite-grad)" />
      <polygon points="13,3 6,13 11,13 10,21 18,10 13,10" fill="#FFD427" />
    </svg>
  );
}

export function NodeJSIcon({ size = 24, title = 'Node.js', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <path fill="#539E43" d="M12 1.5l9.5 5.5v11L12 23.5 2.5 18V7L12 1.5z" />
      <path fill="#1A2026" d="M12 3.8l7.5 4.3v8.7L12 21.2 4.5 16.8V8.1L12 3.8z" />
      <path
        fill="#539E43"
        d="M12 6.5c-2.4 0-3.9 1.3-3.9 3.2 0 3.3 5.3 1.8 5.3 3.8 0 .7-.6 1.1-1.5 1.1-1.2 0-2-.5-2.3-1.2l-1.5.9c.7 1.2 2 2 3.9 2 2.5 0 4.1-1.3 4.1-3.3 0-3.4-5.3-2-5.3-3.8 0-.6.6-1 1.5-1 1 0 1.7.4 2.1 1l1.4-.9c-.7-1.1-1.8-1.8-3.8-1.8z"
      />
    </svg>
  );
}

export function FastAPIIcon({ size = 24, title = 'FastAPI', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <circle cx="12" cy="12" r="11" fill="#059669" />
      <path fill="#FFFFFF" d="M12.8 3.5L5.5 13.2h5.2l-1.5 7.3 7.3-9.7h-5.2l1.5-7.3z" />
    </svg>
  );
}

export function DjangoIcon({ size = 24, title = 'Django', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <rect width="24" height="24" rx="4" fill="#092E20" />
      <path
        fill="#FFFFFF"
        d="M12.5 5.5v7.8c-.5.3-1.1.4-1.7.4-1.6 0-2.4-.9-2.4-2.5 0-1.7.9-2.7 2.4-2.7.5 0 .9.1 1.2.3V6.9c-.4-.1-.9-.2-1.4-.2-2.8 0-4.4 1.7-4.4 4.5 0 2.9 1.6 4.4 4.3 4.4 1 0 1.9-.3 2.5-.7l.2.5h1.7V5.5h-2.4zm3.8 3.5h2.2v7.2c0 1.8-.7 2.8-2.3 2.8-.7 0-1.4-.2-1.9-.5l.5-1.7c.4.2.8.4 1.2.4.9 0 1.3-.5 1.3-1.4V9zM16.3 5.3a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6z"
      />
    </svg>
  );
}

export function SpringIcon({ size = 24, title = 'Spring', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <rect width="24" height="24" rx="5" fill="#6DB33F" />
      <path
        fill="#FFFFFF"
        d="M18.8 6.2c-5.8-.8-10.4 1.8-12.7 6.3-1.6 3.1-1.3 6 1 7.5 2.5 1.6 6.3.6 9.4-2.4 3.7-3.6 4.3-8.8 2.3-11.4zm-5.7 8.9c-2.3 1.7-4.8 1.9-5.7.5-.9-1.4.1-3.6 2.3-5.2 2.3-1.7 4.8-1.9 5.7-.5.9 1.4-.1 3.5-2.3 5.2z"
      />
    </svg>
  );
}

export function LaravelIcon({ size = 24, title = 'Laravel', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <rect width="24" height="24" rx="4" fill="#FF2D20" />
      <path fill="#FFFFFF" d="M11.6 4.8l7 3.9v7.7l-7-3.9V4.8zm-6.2 3.8l5.5 3.1v7.6l-5.5-3.1V8.6zm6.3 3.6l5.4 3-5.4 3.1-5.4-3.1 5.4-3z" />
    </svg>
  );
}

export function LLMsIcon({ size = 24, title = 'LLMs', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <rect width="24" height="24" rx="5" fill="#18181B" stroke="#3F3F46" strokeWidth="1" />
      <path fill="#A855F7" d="M12 4l1.8 4.2L18 10l-4.2 1.8L12 16l-1.8-4.2L6 10l4.2-1.8L12 4z" />
      <circle cx="6" cy="18" r="2" fill="#38BDF8" />
      <circle cx="18" cy="18" r="2" fill="#34D399" />
      <path d="M7.8 17.2l3-2.5M16.2 17.2l-3-2.5" stroke="#71717A" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function LangChainIcon({ size = 24, title = 'LangChain', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <rect width="24" height="24" rx="5" fill="#1C3C3C" />
      <path
        d="M9.5 14.5l-2 2a3.5 3.5 0 0 1-5-5l2-2a3.5 3.5 0 0 1 5 0m5-5l2-2a3.5 3.5 0 0 1 5 5l-2 2a3.5 3.5 0 0 1-5 0"
        stroke="#10B981"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <line x1="8.5" y1="15.5" x2="15.5" y2="8.5" stroke="#34D399" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function LangGraphIcon({ size = 24, title = 'LangGraph', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <rect width="24" height="24" rx="5" fill="#1C3C3C" />
      <circle cx="6" cy="12" r="2.5" fill="#10B981" />
      <circle cx="18" cy="6.5" r="2.5" fill="#34D399" />
      <circle cx="18" cy="17.5" r="2.5" fill="#38BDF8" />
      <path d="M8.5 11.2l7-3.5M8.5 12.8l7 3.5" stroke="#94A3B8" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M18 9v6" stroke="#94A3B8" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="2 2" />
    </svg>
  );
}

export function CrewAIIcon({ size = 24, title = 'CrewAI', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <rect width="24" height="24" rx="5" fill="#2563EB" />
      <circle cx="12" cy="7" r="2.8" fill="#FFFFFF" />
      <circle cx="6.5" cy="15.5" r="2.2" fill="#BFDBFE" />
      <circle cx="17.5" cy="15.5" r="2.2" fill="#BFDBFE" />
      <path d="M12 10.5v3.5M10 14l-2 1M14 14l2 1" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function N8nIcon({ size = 24, title = 'n8n', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <rect width="24" height="24" rx="5" fill="#FF6584" />
      <circle cx="6.5" cy="12" r="2.5" fill="#FFFFFF" />
      <circle cx="17.5" cy="7.5" r="2.5" fill="#FFFFFF" />
      <circle cx="17.5" cy="16.5" r="2.5" fill="#FFFFFF" />
      <path
        d="M9 12h3l3.5-3.5M12 12l3.5 3.5"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function RAGIcon({ size = 24, title = 'RAG (Document QA & KB)', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <rect width="24" height="24" rx="5" fill="#0284C7" />
      <rect x="5" y="4" width="10" height="13" rx="1.5" fill="#FFFFFF" />
      <line x1="7.5" y1="7.5" x2="12.5" y2="7.5" stroke="#0284C7" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="7.5" y1="10" x2="12.5" y2="10" stroke="#0284C7" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="7.5" y1="12.5" x2="10.5" y2="12.5" stroke="#0284C7" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="16" cy="16" r="3.5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.5" />
      <line x1="18.5" y1="18.5" x2="21" y2="21" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ScikitTensorFlowIcon({
  size = 24,
  title = 'Machine Learning (Scikit Learn & TensorFlow)',
  className,
  ...props
}: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <rect width="24" height="24" rx="5" fill="#FF6F00" />
      <polygon points="12,3 4,7.5 12,12 20,7.5" fill="#FFA726" />
      <polygon points="4,7.5 12,12 12,21 4,16.5" fill="#F57C00" />
      <polygon points="20,7.5 12,12 12,21 20,16.5" fill="#E65100" />
      <circle cx="12" cy="12" r="2.5" fill="#0284C7" />
    </svg>
  );
}

export function NeuralNetworksIcon({ size = 24, title = 'Neural Networks', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <rect width="24" height="24" rx="5" fill="#6D28D9" />
      <circle cx="6" cy="7" r="1.8" fill="#DDD6FE" />
      <circle cx="6" cy="17" r="1.8" fill="#DDD6FE" />
      <circle cx="12" cy="5" r="1.8" fill="#A78BFA" />
      <circle cx="12" cy="12" r="1.8" fill="#A78BFA" />
      <circle cx="12" cy="19" r="1.8" fill="#A78BFA" />
      <circle cx="18" cy="8.5" r="1.8" fill="#DDD6FE" />
      <circle cx="18" cy="15.5" r="1.8" fill="#DDD6FE" />
      <line x1="7.5" y1="7.5" x2="10.5" y2="11.5" stroke="#C4B5FD" strokeWidth="0.8" opacity="0.8" />
      <line x1="7.5" y1="16.5" x2="10.5" y2="12.5" stroke="#C4B5FD" strokeWidth="0.8" opacity="0.8" />
      <line x1="13.5" y1="12" x2="16.5" y2="9" stroke="#C4B5FD" strokeWidth="0.8" opacity="0.8" />
      <line x1="13.5" y1="12" x2="16.5" y2="15" stroke="#C4B5FD" strokeWidth="0.8" opacity="0.8" />
    </svg>
  );
}

export function ChromaDBIcon({ size = 24, title = 'ChromaDB', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <circle cx="8" cy="8" r="4.5" fill="#FF5C5C" />
      <circle cx="16" cy="8" r="4.5" fill="#FFB703" />
      <circle cx="16" cy="16" r="4.5" fill="#4D96FF" />
      <circle cx="8" cy="16" r="4.5" fill="#2EC4B6" />
    </svg>
  );
}

export function PineconeIcon({ size = 24, title = 'Pinecone', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <rect width="24" height="24" rx="5" fill="#18181B" />
      <circle cx="12" cy="6" r="2.2" fill="#10B981" />
      <circle cx="8" cy="11" r="2.2" fill="#10B981" />
      <circle cx="16" cy="11" r="2.2" fill="#10B981" />
      <circle cx="6" cy="16" r="2.2" fill="#059669" />
      <circle cx="12" cy="16" r="2.2" fill="#059669" />
      <circle cx="18" cy="16" r="2.2" fill="#059669" />
      <circle cx="12" cy="20.5" r="1.5" fill="#047857" />
    </svg>
  );
}

export function PostgreSQLIcon({ size = 24, title = 'PostgreSQL', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <path
        fill="#336791"
        d="M17.5 5.5C16.3 3.4 14.2 2 11.8 2 7.5 2 4 5.5 4 9.8c0 2 .8 3.9 2.1 5.3v4.4c0 .8.7 1.5 1.5 1.5h1.2c.4 0 .8-.2 1.1-.5l1.6-1.6c.5.1 1 .2 1.5.2 4.3 0 7.8-3.5 7.8-7.8 0-2.3-1-4.4-2.8-5.8zm-5.7 11.3c-.6 0-1.1-.1-1.7-.2l-1.3 1.3H8.3v-3.2c-.9-1-1.5-2.3-1.5-3.9 0-3 2.4-5.5 5.5-5.5s5.5 2.5 5.5 5.5-2.5 6-5.5 6z"
      />
      <circle cx="14" cy="9.5" r="1.2" fill="#FFFFFF" />
      <path d="M10.5 13.5c.5.8 1.3 1.3 2.3 1.3" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function MySQLIcon({ size = 24, title = 'MySQL', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <rect width="24" height="24" rx="5" fill="#00758F" />
      <path
        fill="#F29111"
        d="M12 4c-3.8 0-6.9 2.5-7.7 6 .6-.3 1.3-.5 2-.5 2.5 0 4.6 1.8 5 4.2.8-.2 1.6-.4 2.5-.4 3.4 0 6.2 2.2 6.2 5 0 .6-.1 1.2-.4 1.7C20.8 18.5 22 15.9 22 13c0-5-4.5-9-10-9z"
      />
      <circle cx="8.5" cy="8.5" r="1" fill="#FFFFFF" />
    </svg>
  );
}

export function MongoDBIcon({ size = 24, title = 'MongoDB', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <path
        fill="#47A248"
        d="M12 2c-.3 0-.5.2-.6.4C10.2 4.7 6 10.7 6 15c0 3.3 2.7 6 6 6s6-2.7 6-6c0-4.3-4.2-10.3-5.4-12.6-.1-.2-.3-.4-.6-.4z"
      />
      <path
        fill="#3FA037"
        d="M12 2v19c3.3 0 6-2.7 6-6 0-4.3-4.2-10.3-5.4-12.6-.1-.2-.3-.4-.6-.4z"
      />
      <path fill="#FFFFFF" d="M12 21.5c-.3 0-.5-.2-.5-.5v-4.5c0-.3.2-.5.5-.5s.5.2.5.5V21c0 .3-.2.5-.5.5z" />
    </svg>
  );
}

export function PrismaIcon({ size = 24, title = 'Prisma', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <polygon points="13.2,2 4.5,18.8 8.8,22 20.5,14" fill="#2D3748" />
      <polygon points="13.2,2 8.8,22 4.5,18.8" fill="#16A394" />
      <polygon points="13.2,2 20.5,14 8.8,22" fill="#0D9488" opacity="0.7" />
    </svg>
  );
}

export function PandasIcon({ size = 24, title = 'Pandas', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <rect width="24" height="24" rx="4" fill="#150458" />
      <rect x="5" y="6" width="3" height="8" rx="1.5" fill="#E70488" />
      <rect x="10.5" y="10" width="3" height="8" rx="1.5" fill="#FFD43B" />
      <rect x="16" y="5" width="3" height="13" rx="1.5" fill="#00A3E0" />
    </svg>
  );
}

export function KafkaIcon({ size = 24, title = 'Apache Kafka', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <circle cx="12" cy="12" r="3" fill="currentColor" />
      <circle cx="5" cy="6" r="2.5" fill="currentColor" />
      <circle cx="5" cy="18" r="2.5" fill="currentColor" />
      <circle cx="19" cy="12" r="2.5" fill="currentColor" />
      <line x1="7.2" y1="7.5" x2="9.8" y2="10.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="7.2" y1="16.5" x2="9.8" y2="13.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="15" y1="12" x2="16.5" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function DockerIcon({ size = 24, title = 'Docker', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <path
        fill="#2496ED"
        d="M13.98 9.07h1.96v1.96h-1.96zM11.53 9.07h1.96v1.96h-1.96zM9.08 9.07h1.96v1.96H9.08zM11.53 6.62h1.96v1.96h-1.96zM9.08 6.62h1.96v1.96H9.08zM6.63 9.07h1.96v1.96H6.63zM4.18 9.07h1.96v1.96H4.18zM11.53 4.17h1.96v1.96h-1.96zM9.08 4.17h1.96v1.96H9.08zM23.97 12.06c-.46-.35-1.53-.49-2.37-.36-.14-.72-.6-1.39-1.29-1.85l-.57-.38-.38.57c-.47.7-.6 1.63-.38 2.47-.54.3-1.34.42-2.38.42H1.5c-.32 0-.58.26-.58.58 0 2.27.79 4.39 2.24 5.96 1.48 1.61 3.5 2.53 5.68 2.53 6.63 0 11.96-4.5 12.98-10.74.88-.08 1.77-.37 2.15-.99.07-.12.08-.2.08-.21 0-.02 0-.09-.08-.19v.19z"
      />
    </svg>
  );
}

export function OracleIcon({ size = 24, title = 'Oracle Cloud', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <path
        fill="#F80000"
        d="M16.5 6h-9C4.5 6 2 8.5 2 11.5s2.5 5.5 5.5 5.5h9c3 0 5.5-2.5 5.5-5.5S19.5 6 16.5 6zm-.2 8.2h-8.6c-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7h8.6c1.5 0 2.7 1.2 2.7 2.7s-1.2 2.7-2.7 2.7z"
      />
    </svg>
  );
}

export function TailwindCSSIcon({ size = 24, title = 'Tailwind CSS', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <path
        fill="#06B6D4"
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z"
      />
    </svg>
  );
}

export function VercelIcon({ size = 24, title = 'Vercel', className, ...props }: TechIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <path fill="currentColor" d="M12 2L23 21H1L12 2Z" />
    </svg>
  );
}

export interface TechIconDynamicProps extends TechIconProps {
  id: TechIconId | string;
}

export function TechIcon({ id, ...props }: TechIconDynamicProps) {
  switch (id.toLowerCase()) {
    case 'typescript':
    case 'ts':
      return <TypeScriptIcon {...props} />;
    case 'javascript':
    case 'js':
      return <JavaScriptIcon {...props} />;
    case 'python':
    case 'py':
      return <PythonIcon {...props} />;
    case 'kotlin':
    case 'kt':
      return <KotlinIcon {...props} />;
    case 'rust':
    case 'rs':
      return <RustIcon {...props} />;
    case 'react':
    case 'reactjs':
      return <ReactIcon {...props} />;
    case 'nextjs':
    case 'next.js':
    case 'next':
      return <NextJSIcon {...props} />;
    case 'vue':
    case 'vuejs':
    case 'vue.js':
      return <VueJSIcon {...props} />;
    case 'angular':
    case 'ng':
      return <AngularIcon {...props} />;
    case 'vite':
      return <ViteIcon {...props} />;
    case 'tailwindcss':
    case 'tailwind':
    case 'tailwind css':
      return <TailwindCSSIcon {...props} />;
    case 'nodejs':
    case 'node.js':
    case 'node':
      return <NodeJSIcon {...props} />;
    case 'fastapi':
      return <FastAPIIcon {...props} />;
    case 'django':
    case 'dj':
      return <DjangoIcon {...props} />;
    case 'spring':
    case 'springboot':
    case 'spring boot':
      return <SpringIcon {...props} />;
    case 'laravel':
      return <LaravelIcon {...props} />;
    case 'llms':
    case 'llm':
      return <LLMsIcon {...props} />;
    case 'langchain':
      return <LangChainIcon {...props} />;
    case 'langgraph':
      return <LangGraphIcon {...props} />;
    case 'crewai':
      return <CrewAIIcon {...props} />;
    case 'n8n':
      return <N8nIcon {...props} />;
    case 'rag':
      return <RAGIcon {...props} />;
    case 'scikit-tensorflow':
    case 'scikitlearn':
    case 'tensorflow':
    case 'scikit':
    case 'machine learning':
      return <ScikitTensorFlowIcon {...props} />;
    case 'neural-networks':
    case 'neural networks':
    case 'neural':
      return <NeuralNetworksIcon {...props} />;
    case 'chromadb':
    case 'chroma':
      return <ChromaDBIcon {...props} />;
    case 'pinecone':
      return <PineconeIcon {...props} />;
    case 'postgresql':
    case 'postgres':
      return <PostgreSQLIcon {...props} />;
    case 'mysql':
      return <MySQLIcon {...props} />;
    case 'mongodb':
    case 'mongo':
      return <MongoDBIcon {...props} />;
    case 'prisma':
      return <PrismaIcon {...props} />;
    case 'pandas':
      return <PandasIcon {...props} />;
    case 'kafka':
    case 'apache kafka':
      return <KafkaIcon {...props} />;
    case 'docker':
      return <DockerIcon {...props} />;
    case 'oracle':
    case 'oracle cloud':
    case 'oci':
      return <OracleIcon {...props} />;
    case 'vercel':
      return <VercelIcon {...props} />;
    default:
      return (
        <span
          className="inline-flex items-center justify-center font-mono text-xs font-bold uppercase rounded bg-surface-raised text-muted px-1.5 py-0.5"
          role="img"
          aria-label={props.title || id}
        >
          {id.slice(0, 3)}
        </span>
      );
  }
}
