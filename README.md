# André Victor — Software Engineering, Applied AI & IT Governance Portfolio (2026)

Live Site: **[https://andrecodexvictor.github.io/](https://andrecodexvictor.github.io/)**

Personal engineering portfolio of **André Victor Andrade Oliveira Santos** — Full Stack & Applied AI Engineering Intern at **VittalWeb**, Information Systems finalist at **IFBA (Vitória da Conquista)**, and author of the **GEAR (Gestão, Execução, Agilidade e Risco)** operational framework and technical book (evolution of `GP-PME`).

---

## 2026 Architecture & Design System

- **Warm Monochrome Editorial Palette**: Ivory paper (`#F5F3EF`), charcoal ink (`#222321`), stone (`#666A65`), muted sage (`#59695A`), optional warm bronze (`#8A7663`), and a composed carbon dark mode (`#181B1A`).
- **Typography**: `Inter` (UI & body), `Newsreader` (editorial serif accents), and `Geist Mono` (architectural & telemetry labels).
- **Interactive OpenUI Module (`#explore-openui`)**: Built with [`@openuidev/react-lang`](https://www.openui.com/docs/api-reference/react-lang) (`defineComponent`, `createLibrary`, `<Renderer />`) and `zod/v4` across three exploration lenses:
  1. *Explore by Competency* (Applied AI & RAG, MCP & Dev Tooling, Cloud & Streaming)
  2. *Explore by Architecture* (OCI StateGraph RAG, Privilege-Separated MCP, Hybrid Simulation)
  3. *Explore GEAR Framework* (3 Core Pillars, Transversal Optional AI Loop, 30-Day SME Adoption & IM-TI 0–10)
- **Motion & Anime.js Choreography**:
  - `motion/react` for layout transitions, filter tabs, and entrance reveals.
  - `animejs` v4 for the Formula 1 circuit racing-line SVG draw and apex marker pulse.
  - Full `prefers-reduced-motion` compliance and static 2D fallback for the **Apex** desk companion.
- **Bilingual Parity (`EN` & `PT-BR`)**: Complete English (default) and Brazilian Portuguese translation across every section and all 13 static case study routes (`/work/[slug]`).

---

## Featured Case Studies (`/work/[slug]`)

| Code | Project | Focus & Stack |
| :--- | :--- | :--- |
| **P0** | **[GEAR Framework (GP-PME Evolution)](https://github.com/andrecodexvictor/gp-pme)** | 10-chapter technical book & TCC (IFBA) with **3 essential pillars** (*Governança Essencial*, *Execução Ágil*, *Segurança Crítica*) + **transversal optional AI** under human verification. |
| **P1** | **[Axiom Tech](https://github.com/andrecodexvictor/Axiom-Tech)** | Source-grounded corporate RAG assistant (`FastAPI`, `LangGraph`, `ChromaDB`, `React`) with explicit abstention (`grounded=false`), deployed on **Oracle Cloud (OCI)** behind Oracle API Gateway. |
| **P2** | **[NovaMente Atlas](https://github.com/Oracle-hackatom-g10-team-4/Nova-mente-Solution)** | Multi-agent study studio (`Next.js`, `NestJS`, `@invokta/core` Action Engines, `FastAPI`, `TypeSafe Jev`) built in the Oracle + Alura ONE G10 hackathon. |
| **P3** | **[Quality Engine](https://github.com/andrecodexvictor/Quality-engine)** | Invokta Action Engine over **MCP Streamable HTTP** (`:7420/mcp`) enforcing cognitive complexity ratchets (`SonarJS`) and Tarjan cycle detection, separated from the human-only `quality-admin` CLI. |
| **P4** | **[SimPay](https://simpay.tech/)** | Interactive fintech web experience (`Next.js 16`, `React 19`, `Motion`, `Anime.js`) featuring a PIX-to-Solana converter, POS terminal simulator, and merchant savings calculator. |
| **P5** | **[LaunchGuard](https://github.com/andrecodexvictor/Lauchguard)** | Predictive checkout release intelligence using **Confluent Kafka**, **Avro Schema Registry**, and **Apache Flink SQL** temporal joins with operator-approved rollback. |
| **P6** | **[Jev Gateway](https://github.com/andrecodexvictor/jev-gateway)** | Open-source contribution (upstream `vinilana/jev-gateway`) routing coding-agent tool selection (`jev-codex`, `jev-claude`) through **TypeSafe’s System One model Jev**. |

Additional verified archive projects include **[24 Podiums](https://github.com/andrecodexvictor/24Podiums)**, **[Script Kitty](https://github.com/andrecodexvictor/Script-kitty)**, **[ZenPR](https://github.com/andrecodexvictor/ZenPR)**, **[dotstack](https://github.com/andrecodexvictor/dotstack)**, **[Frame-sim](https://github.com/andrecodexvictor/Frame-sim)**, and **[Creator Kit Hub](https://github.com/andrecodexvictor/Creator-kit-Hub)**.

---

## Local Development & Verification

```bash
npm install
npm run lint
npm run build
```

Static export output is generated in `./out` for GitHub Pages deployment.
