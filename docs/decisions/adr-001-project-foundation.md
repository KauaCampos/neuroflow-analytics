# ADR-001 — Fundação Arquitetural do Projeto

## Status

Aceito

## Data

2026-06-08

## Contexto

O NeuroFlow Analytics será uma plataforma SaaS de produtividade acadêmica com foco em registro de estudos, tarefas, metas, dashboards, analytics, streaks e futura integração com inteligência artificial. O projeto ainda está em fase de planejamento, portanto é necessário definir uma fundação técnica coerente, evolutiva e compatível com um produto real.

A arquitetura precisa suportar:

- autenticação segura de usuários;
- isolamento de dados por conta;
- APIs REST para comunicação com frontend;
- persistência relacional com integridade;
- consultas analíticas por período;
- evolução futura para IA e recursos premium;
- ambiente de desenvolvimento reprodutível.

## Decisão

Adotar a seguinte base tecnológica inicial:

| Camada | Decisão |
|---|---|
| Frontend | React, Vite, TypeScript, Tailwind CSS e Shadcn/UI. |
| Backend | Spring Boot com Java 21. |
| Autenticação | JWT Authentication. |
| Banco de Dados | PostgreSQL. |
| Infraestrutura | Docker e Docker Compose. |
| IA futura | OpenAI API integrada pelo backend. |

## Motivação das Decisões

### Escolha do Spring Boot

Spring Boot foi escolhido por oferecer um ecossistema robusto para desenvolvimento de APIs REST, segurança, validação, persistência e testes. Como o NeuroFlow Analytics manipulará dados privados de usuários e regras de negócio relevantes, a maturidade do framework reduz riscos técnicos.

A estrutura em controllers, services, repositories e DTOs favorece organização, testabilidade e evolução incremental. Além disso, a integração com Spring Security permite implementar autenticação JWT de forma consistente.

### Escolha do PostgreSQL

PostgreSQL foi escolhido por ser um banco relacional confiável, adequado para domínios com relacionamentos claros e necessidade de integridade referencial. O produto depende de histórico acadêmico, métricas por período e agregações sobre sessões, tarefas, metas e streaks.

A escolha também permite evoluir para consultas analíticas mais sofisticadas, uso de índices e eventuais recursos avançados sem abandonar a base relacional.

### Escolha do React

React foi escolhido por sua maturidade, ampla adoção e capacidade de construir interfaces componentizadas. O NeuroFlow Analytics terá dashboards, formulários, cards, filtros e gráficos, que se beneficiam de componentes reutilizáveis e estado de interface bem estruturado.

A combinação com Vite e TypeScript oferece produtividade no desenvolvimento, tipagem estática e melhor manutenção dos contratos entre frontend e backend.

### Escolha de Tailwind CSS e Shadcn/UI

Tailwind CSS permite criar uma interface responsiva e consistente com velocidade. Shadcn/UI fornece componentes modernos e customizáveis que podem evoluir para um design system próprio, sem limitar a identidade visual do produto.

### Escolha de JWT

JWT foi escolhido para autenticação stateless em APIs REST. Essa abordagem facilita a separação entre frontend e backend e prepara o sistema para futuras implantações distribuídas.

### Escolha de Docker e Docker Compose

Docker e Docker Compose serão utilizados para padronizar o ambiente de desenvolvimento, facilitar onboarding e reduzir inconsistências entre máquinas. O MVP deverá executar os principais serviços de forma orquestrada.

### Integração Futura com OpenAI API

A OpenAI API será adotada futuramente para geração de insights, recomendações e análises personalizadas. A integração será feita exclusivamente pelo backend para proteger credenciais, controlar contexto enviado e registrar interações.

## Consequências

### Positivas

- Base técnica madura e amplamente suportada.
- Boa separação entre frontend, backend e banco.
- Facilidade para implementar autenticação e autorização.
- Modelo relacional adequado para analytics histórico.
- Ambiente local reprodutível.
- Evolução gradual para IA e funcionalidades premium.

### Riscos e Mitigações

| Risco | Mitigação |
|---|---|
| Complexidade inicial do backend | Manter arquitetura modular e escopo controlado no MVP. |
| Crescimento de consultas analíticas | Usar índices, otimização de queries e possível materialização futura. |
| Custos de IA | Controlar chamadas, limitar contexto e monitorar uso. |
| Segurança de dados | Aplicar autenticação JWT, filtros por usuário e boas práticas de armazenamento. |

## Alternativas Consideradas

| Alternativa | Motivo de Não Adoção Inicial |
|---|---|
| Node.js no backend | Boa opção, mas Spring Boot oferece estrutura corporativa mais robusta para o escopo planejado. |
| MySQL | Adequado, porém PostgreSQL oferece maior flexibilidade para consultas e evolução analítica. |
| Next.js full-stack | Poderia acelerar algumas entregas, mas a separação frontend/backend foi priorizada para clareza arquitetural. |
| Banco NoSQL | Menos adequado para o domínio inicial com relacionamentos fortes e necessidade de integridade. |
