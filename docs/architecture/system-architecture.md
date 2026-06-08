# Arquitetura do Sistema

## Visão Geral

O NeuroFlow Analytics seguirá uma arquitetura em camadas com separação clara entre interface, regras de negócio, persistência e integrações externas. Essa abordagem facilita manutenção, testes, evolução incremental e implantação em ambiente SaaS.

## Arquitetura de Alto Nível — MVP

```mermaid
flowchart LR
    U[Usuário] --> FE[Frontend Web\nReact + Vite + TypeScript]
    FE -->|HTTPS / REST / JWT| BE[Backend API\nSpring Boot + Java 21]
    BE -->|JDBC / JPA| DB[(PostgreSQL)]

    subgraph Infraestrutura
        FE
        BE
        DB
    end
```

## Arquitetura com Integração Futura de IA

```mermaid
flowchart LR
    U[Usuário] --> FE[Frontend Web]
    FE -->|REST autenticado| BE[Backend Spring Boot]
    BE --> DB[(PostgreSQL)]
    BE -->|Requisições seguras| AI[OpenAI API]
    AI -->|Insights e recomendações| BE
    BE -->|Resposta processada| FE
```

## Componentes Principais

| Componente | Responsabilidade |
|---|---|
| Frontend | Interface do usuário, formulários, dashboards, gráficos, consumo de APIs e feedback visual. |
| Backend | Autenticação, autorização, regras de negócio, APIs REST, orquestração de analytics e integrações. |
| PostgreSQL | Persistência relacional de usuários, matérias, sessões, tarefas, metas, streaks e interações de IA. |
| OpenAI API | Geração futura de insights, recomendações e análises personalizadas. |
| Docker Compose | Orquestração local dos serviços de frontend, backend e banco durante desenvolvimento. |

## Camadas do Backend

```mermaid
flowchart TB
    C[Controllers REST] --> S[Services]
    S --> R[Repositories]
    R --> DB[(PostgreSQL)]
    S --> V[Validações e Regras de Negócio]
    S --> A[Serviços de Analytics]
    S --> I[Serviços de IA - Futuro]
```

### Controllers

Responsáveis por expor endpoints REST, validar contratos básicos de entrada, delegar processamento aos services e retornar respostas padronizadas.

### Services

Concentram regras de negócio, validações transacionais, cálculos de progresso, atualização de streaks e composição de dados para dashboard.

### Repositories

Responsáveis pelo acesso ao banco de dados por meio de Spring Data JPA, respeitando filtros por usuário autenticado.

### DTOs

Utilizados para separar contratos de API das entidades persistidas, reduzindo acoplamento e exposição indevida de campos internos.

## Segurança

```mermaid
sequenceDiagram
    actor User as Estudante
    participant FE as Frontend
    participant BE as Backend
    participant DB as PostgreSQL

    User->>FE: Informa e-mail e senha
    FE->>BE: POST /auth/login
    BE->>DB: Busca usuário por e-mail
    DB-->>BE: Retorna usuário
    BE->>BE: Valida senha e gera JWT
    BE-->>FE: Retorna token JWT
    FE->>BE: Requisições com Authorization Bearer
    BE->>BE: Valida token e autorização
```

## Princípios Arquiteturais

- Separação entre responsabilidades de apresentação, domínio e persistência.
- APIs REST como contrato principal entre frontend e backend.
- Segurança orientada por autenticação JWT e isolamento por usuário.
- Persistência relacional para consistência e rastreabilidade histórica.
- Evolução incremental para IA sem comprometer o core do produto.
- Observabilidade e documentação como partes do ciclo de engenharia.
