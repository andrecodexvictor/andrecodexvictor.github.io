import React from 'react';

export type TechIconId =
  | 'typescript'
  | 'python'
  | 'react'
  | 'nextjs'
  | 'nodejs'
  | 'fastapi'
  | 'langgraph'
  | 'postgresql'
  | 'docker'
  | 'chromadb'
  | 'kafka'
  | 'oracle'
  | 'tailwindcss'
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
    case 'python':
    case 'py':
      return <PythonIcon {...props} />;
    case 'react':
    case 'reactjs':
      return <ReactIcon {...props} />;
    case 'nextjs':
    case 'next.js':
    case 'next':
      return <NextJSIcon {...props} />;
    case 'nodejs':
    case 'node.js':
    case 'node':
      return <NodeJSIcon {...props} />;
    case 'fastapi':
      return <FastAPIIcon {...props} />;
    case 'langgraph':
      return <LangGraphIcon {...props} />;
    case 'postgresql':
    case 'postgres':
      return <PostgreSQLIcon {...props} />;
    case 'docker':
      return <DockerIcon {...props} />;
    case 'chromadb':
    case 'chroma':
      return <ChromaDBIcon {...props} />;
    case 'kafka':
    case 'apache kafka':
      return <KafkaIcon {...props} />;
    case 'oracle':
    case 'oracle cloud':
    case 'oci':
      return <OracleIcon {...props} />;
    case 'tailwindcss':
    case 'tailwind':
    case 'tailwind css':
      return <TailwindCSSIcon {...props} />;
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
