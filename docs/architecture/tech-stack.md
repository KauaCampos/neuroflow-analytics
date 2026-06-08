# Stack Tecnológica

Este documento descreve as tecnologias planejadas para o NeuroFlow Analytics e a motivação de cada escolha.

## Resumo da Stack

| Camada | Tecnologia | Finalidade |
|---|---|---|
| Frontend | React | Construção de interfaces reativas e componentizadas. |
| Frontend | Vite | Build rápido, ambiente moderno de desenvolvimento e integração com TypeScript. |
| Frontend | TypeScript | Tipagem estática para maior segurança e manutenção. |
| Frontend | Tailwind CSS | Estilização utilitária, responsiva e consistente. |
| Frontend | Shadcn/UI | Componentes acessíveis, customizáveis e alinhados a boas práticas modernas. |
| Backend | Spring Boot | Criação de APIs robustas, seguras e escaláveis. |
| Backend | Java 21 | Linguagem madura, performática e com recursos modernos de desenvolvimento. |
| Backend | JWT | Autenticação stateless para APIs REST. |
| Banco | PostgreSQL | Banco relacional consistente, extensível e adequado para analytics. |
| Infraestrutura | Docker | Padronização de ambientes e empacotamento de serviços. |
| Infraestrutura | Docker Compose | Orquestração local de múltiplos serviços. |
| IA | OpenAI API | Geração futura de insights e recomendações personalizadas. |

## Frontend

### React

React foi escolhido pela maturidade do ecossistema, ampla adoção de mercado e capacidade de construir interfaces componentizadas. A plataforma terá dashboards, cards, formulários e gráficos que se beneficiam de uma arquitetura de componentes reutilizáveis.

### Vite

Vite oferece inicialização rápida, hot module replacement eficiente e integração direta com TypeScript. Essa escolha reduz atrito no desenvolvimento e melhora produtividade da equipe.

### TypeScript

TypeScript reduz erros em tempo de desenvolvimento, melhora documentação implícita do código e facilita evolução do produto conforme os contratos de API se tornam mais complexos.

### Tailwind CSS

Tailwind CSS permite criar layouts responsivos com consistência visual e menor dependência de estilos globais. É adequado para prototipação rápida do MVP e evolução para design system.

### Shadcn/UI

Shadcn/UI fornece componentes modernos e customizáveis, permitindo que o produto tenha uma interface profissional sem depender de um pacote fechado e pouco flexível.

## Backend

### Spring Boot

Spring Boot foi escolhido por sua robustez para APIs corporativas, integração com segurança, validação, persistência e testes. A plataforma precisa de autenticação segura, regras de negócio claras e endpoints escaláveis.

### Java 21

Java 21 oferece estabilidade de longo prazo, desempenho e recursos modernos da linguagem. É uma escolha adequada para sistemas SaaS que exigem manutenção e confiabilidade.

### JWT Authentication

JWT permite autenticação stateless entre frontend e backend, sendo adequado para APIs REST e futuras implantações distribuídas. O token será utilizado para identificar o usuário e proteger rotas privadas.

## Banco de Dados

### PostgreSQL

PostgreSQL foi escolhido por sua confiabilidade, suporte a relacionamentos, constraints, índices e consultas analíticas. O domínio do NeuroFlow Analytics depende de histórico, métricas por período e integridade entre usuários, matérias, sessões, tarefas e metas.

## Infraestrutura

### Docker e Docker Compose

Docker padroniza ambientes, reduz problemas de configuração local e facilita integração entre serviços. Docker Compose será usado inicialmente para executar frontend, backend e PostgreSQL em desenvolvimento.

## Inteligência Artificial

### OpenAI API

A OpenAI API será integrada em versão futura para gerar recomendações, análises de produtividade, resumos semanais e alertas inteligentes. A integração deve ser isolada em uma camada específica para reduzir acoplamento e permitir substituição ou expansão de provedores.
