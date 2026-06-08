# NeuroFlow Analytics — Documentação do Projeto

## Visão Geral

O **NeuroFlow Analytics** é uma plataforma SaaS de produtividade acadêmica com recursos de analytics e inteligência artificial para apoiar estudantes na organização, execução e melhoria contínua da rotina de estudos. A solução centraliza o acompanhamento de desempenho, sessões de estudo, tarefas, metas, streaks e recomendações personalizadas em uma experiência digital orientada por dados.

A plataforma será construída inicialmente como uma aplicação web responsiva, com arquitetura separada entre frontend, backend e banco de dados, permitindo evolução futura para integrações com IA, notificações, gamificação avançada, PWA e recursos premium.

## Objetivos do Produto

| Objetivo | Descrição |
|---|---|
| Organização acadêmica | Permitir que estudantes registrem matérias, tarefas, metas e sessões de estudo em um único ambiente. |
| Acompanhamento de desempenho | Fornecer dashboards e indicadores para análise de evolução acadêmica. |
| Consistência de estudo | Estimular hábitos recorrentes por meio de streaks, metas e visualizações de progresso. |
| Inteligência aplicada | Evoluir para recomendações personalizadas com IA baseadas no comportamento de estudo. |
| Escalabilidade SaaS | Criar uma base técnica preparada para crescimento, autenticação segura e manutenção contínua. |

## Stack Tecnológica Planejada

### Frontend

- React
- Vite
- TypeScript
- Tailwind CSS
- Shadcn/UI

### Backend

- Spring Boot
- Java 21
- JWT Authentication

### Banco de Dados

- PostgreSQL

### Infraestrutura

- Docker
- Docker Compose

### Inteligência Artificial

- OpenAI API, prevista para versões futuras

## Estrutura da Documentação

```text
docs/
├── README.md
├── vision/
│   └── product-vision.md
├── requirements/
│   ├── functional-requirements.md
│   ├── non-functional-requirements.md
│   ├── business-rules.md
│   └── use-cases.md
├── architecture/
│   ├── system-architecture.md
│   ├── tech-stack.md
│   └── api-overview.md
├── database/
│   ├── domain-model.md
│   └── database-schema.md
├── roadmap/
│   ├── mvp.md
│   ├── v2.md
│   └── v3.md
└── decisions/
    └── adr-001-project-foundation.md
```

## Roadmap Resumido

| Fase | Foco | Resultado Esperado |
|---|---|---|
| MVP | Autenticação, matérias, sessões, tarefas, metas e dashboard básico | Produto funcional para validação com estudantes. |
| V2 | Analytics avançado e integração com IA | Recomendações personalizadas, insights e relatórios inteligentes. |
| V3 | Gamificação, notificações, ranking, PWA e premium | Plataforma SaaS mais completa, escalável e monetizável. |

## Premissas de Engenharia

- A arquitetura deve ser modular, testável e preparada para evolução incremental.
- O backend deve expor APIs REST documentáveis e seguras.
- Os dados acadêmicos do usuário devem ser isolados por autenticação e autorização.
- O modelo de domínio deve permitir analytics histórico sem comprometer a simplicidade inicial.
- A documentação deve evoluir junto com o código e decisões arquiteturais.
