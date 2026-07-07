# NeuroFlow Analytics

Fundação do MVP para um SaaS de produtividade acadêmica, seguindo a documentação em `docs/` como fonte de verdade.

## Stack

- Frontend: React, Vite, TypeScript, TailwindCSS, shadcn/ui foundation, React Router, TanStack Query, Axios, React Hook Form e Zod.
- Backend: Spring Boot 3, Java 21, Maven, Spring Web, Security, Data JPA, Validation, Lombok, Flyway e PostgreSQL.
- Infraestrutura: Docker, Docker Compose e variáveis externalizadas.

## Execução local

1. Copie as variáveis de exemplo:

```bash
cp .env.example .env
```

2. Suba os serviços:

```bash
docker compose up --build
```

- Frontend: http://localhost:5173
- Backend: http://localhost:8080/api
- PostgreSQL: localhost:5432

## Estrutura

- `frontend/`: aplicação web em arquitetura baseada em features.
- `backend/`: API Spring Boot organizada por módulos de domínio.
- `docs/`: documentação de produto, arquitetura, requisitos e banco de dados.
