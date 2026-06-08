# Requisitos Não Funcionais

Este documento descreve os requisitos não funcionais do NeuroFlow Analytics, identificados com o prefixo **RNF**.

| ID | Categoria | Requisito | Métrica ou Diretriz |
|---|---|---|---|
| RNF-01 | Desempenho | O sistema deve responder rapidamente às operações principais. | Consultas de dashboard devem responder preferencialmente em até 2 segundos em ambiente produtivo. |
| RNF-02 | Segurança | Dados de usuários devem ser protegidos por autenticação e autorização. | Rotas privadas devem exigir JWT válido. |
| RNF-03 | Segurança | Senhas nunca devem ser armazenadas em texto puro. | Utilizar algoritmo de hash seguro, como BCrypt. |
| RNF-04 | Escalabilidade | A arquitetura deve permitir separação entre frontend, backend e banco. | Serviços independentes via Docker Compose no MVP. |
| RNF-05 | Responsividade | A interface deve funcionar adequadamente em desktop, tablet e mobile. | Layout responsivo com Tailwind CSS. |
| RNF-06 | Disponibilidade | A aplicação deve ser projetada para operação contínua em ambiente SaaS. | Redução de pontos únicos de falha em versões futuras. |
| RNF-07 | Observabilidade | O backend deve fornecer logs estruturados para eventos relevantes. | Logs para autenticação, erros, criação de sessões e falhas de integração. |
| RNF-08 | Manutenção | O código deve seguir organização modular e princípios de baixo acoplamento. | Separação entre controllers, services, repositories e DTOs. |
| RNF-09 | Testabilidade | Regras de negócio devem ser testáveis de forma automatizada. | Testes unitários para services e testes de integração para APIs críticas. |
| RNF-10 | Integridade | O banco deve garantir consistência referencial entre entidades. | Uso de chaves estrangeiras, constraints e transações. |
| RNF-11 | Usabilidade | Fluxos principais devem ser simples e orientados à produtividade. | Registro de sessão e criação de tarefa devem exigir poucos passos. |
| RNF-12 | Privacidade | Dados acadêmicos devem ser acessíveis somente pelo proprietário. | Filtros por usuário autenticado em todas as consultas sensíveis. |
| RNF-13 | Evolutividade | A solução deve permitir introdução futura de IA sem reescrever o core. | Isolar integrações de IA em serviços específicos. |
| RNF-14 | Portabilidade | O ambiente de desenvolvimento deve ser reprodutível. | Uso de Docker e Docker Compose. |
| RNF-15 | Documentabilidade | APIs e decisões técnicas devem ser documentadas continuamente. | Manutenção de documentação Markdown e ADRs. |

## Diretrizes por Categoria

### Desempenho

O sistema deve priorizar consultas eficientes para dashboards e analytics, pois esses recursos dependem de agregações frequentes sobre sessões, tarefas e metas. Estratégias futuras podem incluir índices, materialização de métricas e cache seletivo.

### Segurança

A autenticação será baseada em JWT. Toda operação que manipule dados acadêmicos deverá validar a identidade do usuário autenticado e restringir acesso aos registros pertencentes a ele.

### Escalabilidade

O MVP será estruturado com componentes independentes para permitir evolução gradual. A separação entre frontend, backend e banco de dados facilitará deploys independentes e futura adoção de serviços adicionais.

### Observabilidade

Eventos relevantes devem ser rastreáveis para apoiar diagnóstico e evolução. No MVP, logs estruturados serão suficientes; em versões futuras, métricas, tracing distribuído e dashboards operacionais poderão ser adicionados.
