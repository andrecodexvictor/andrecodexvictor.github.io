import type { Locale } from './gear';

export interface CredentialItem {
  id: string;
  title: Record<Locale, string>;
  subtitle: Record<Locale, string>;
  issuer: string;
  date: Record<Locale, string>;
  certificateId: string;
  verifyUrl: string;
  category: 'oracle' | 'complementary';
  highlights: Record<Locale, string[]>;
}

export interface EducationItem {
  institution: string;
  degree: Record<Locale, string>;
  campus: Record<Locale, string>;
  period: Record<Locale, string>;
  thesisTitle: Record<Locale, string>;
  leadership: Record<Locale, string[]>;
}

export const ORACLE_CREDENTIALS: CredentialItem[] = [
  {
    id: 'oci-ai-foundations',
    title: {
      en: 'Oracle Cloud Infrastructure Certified AI Foundations Associate',
      pt: 'Oracle Cloud Infrastructure Certified AI Foundations Associate',
    },
    subtitle: {
      en: 'Oracle Certified Foundations Associate · Official Recognition & Share Badge',
      pt: 'Oracle Certified Foundations Associate · Registro Oficial de Certificação e Share Badge',
    },
    issuer: 'Oracle University',
    date: {
      en: 'Issued September 2026',
      pt: 'Emitido em setembro de 2026',
    },
    certificateId: '331822278OCI26AICFA · 331856991OCI26AICFA',
    verifyUrl:
      'https://catalog-education.oracle.com/ords/certview/sharebadge?id=3389CC2B297A522B8F5550D9FC1FA938765D5C565047DBE2C7892E',
    category: 'oracle',
    highlights: {
      en: [
        'Foundations of Machine Learning, Deep Learning, and Large Language Models (LLMs) on Oracle Cloud Infrastructure.',
        'OCI Generative AI Service, vector search / RAG architectures, and enterprise AI governance.',
        'Verified Oracle University credential backing cloud AI deployments such as Axiom Tech on OCI (sa-saopaulo-1).',
      ],
      pt: [
        'Fundamentos de Machine Learning, Deep Learning e Grandes Modelos de Linguagem (LLMs) na Oracle Cloud Infrastructure.',
        'OCI Generative AI Service, arquiteturas de busca vetorial / RAG e governança de IA.',
        'Credencial oficial da Oracle University que respalda implantações de IA em nuvem como o Axiom Tech na OCI (sa-saopaulo-1).',
      ],
    },
  },
];

export const COMPLEMENTARY_CREDENTIALS: CredentialItem[] = [
  {
    id: 'santander-f1-leadership',
    title: {
      en: 'High-Performance Leadership: Lessons from Formula 1',
      pt: 'Liderança de Alta Performance: Lições da F1',
    },
    subtitle: {
      en: 'Santander Open Academy · 8 Hours (2 Modules + Self-Assessment)',
      pt: 'Santander Open Academy · 8 Horas (2 Módulos + Autoavaliação)',
    },
    issuer: 'Santander Open Academy',
    date: {
      en: 'Completed May 3, 2025',
      pt: 'Concluído em 3 de maio de 2025',
    },
    certificateId: 'OA-2025-0503001071221',
    verifyUrl: 'https://app.santanderopenacademy.com/',
    category: 'complementary',
    highlights: {
      en: [
        'Decision-making under pressure, telemetry-driven iteration, and cross-functional pit-wall coordination.',
      ],
      pt: [
        'Tomada de decisão sob pressão, melhoria orientada a telemetria e coordenação de equipes de alta precisão.',
      ],
    },
  },
  {
    id: 'dio-cloud-foundations',
    title: {
      en: 'How Cloud Computing Works & XP Inc. Experience',
      pt: 'Como a Computação em Nuvem Funciona & Experiência XP Inc.',
    },
    subtitle: {
      en: 'Digital Innovation One (DIO) · Cloud & Enterprise Track',
      pt: 'Digital Innovation One (DIO) · Trilha Cloud e Engenharia Corporativa',
    },
    issuer: 'DIO / XP Inc.',
    date: {
      en: 'Completed May 4–5, 2025',
      pt: 'Concluído em 4–5 de maio de 2025',
    },
    certificateId: 'U8VD31HZ · FPUFRIK0',
    verifyUrl: 'https://www.dio.me/',
    category: 'complementary',
    highlights: {
      en: ['Cloud service models, elasticity, and enterprise engineering culture.'],
      pt: ['Modelos de serviço em nuvem, elasticidade e cultura de engenharia corporativa.'],
    },
  },
];

export const EDUCATION_DATA: EducationItem = {
  institution: 'Instituto Federal da Bahia (IFBA)',
  degree: {
    en: 'Bachelor of Information Systems (B.Sc.)',
    pt: 'Bacharelado em Sistemas de Informação',
  },
  campus: {
    en: 'Vitória da Conquista Campus, Bahia, Brazil',
    pt: 'Campus Vitória da Conquista, Bahia, Brasil',
  },
  period: {
    en: 'Expected Completion: 2026',
    pt: 'Conclusão Prevista: 2026',
  },
  thesisTitle: {
    en: 'GEAR (Governance, Execution, Agility & Risk): Minimum Viable IT Governance & Execution Framework for SMEs with Optional Governed AI',
    pt: 'GEAR (Gestão, Execução, Agilidade e Risco): Framework de Governança e Execução Mínima Viável de TI para PMEs com IA Transversal Opcional',
  },
  leadership: {
    en: [
      'Student Council Member (Diretório Acadêmico do IFBA), representing students in institutional governance initiatives.',
      'University speaker on technical communication, career strategy, and personal branding.',
      'Languages: Native Portuguese · Advanced English (C1) · Intermediate Spanish.',
    ],
    pt: [
      'Conselheiro no Diretório Acadêmico do IFBA, representando estudantes em iniciativas institucionais.',
      'Palestrante em eventos universitários sobre comunicação, posicionamento profissional e marca pessoal.',
      'Idiomas: Português nativo · Inglês avançado (C1) · Espanhol intermediário.',
    ],
  },
};
