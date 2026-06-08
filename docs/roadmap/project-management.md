# Gestão de Projeto

## Objetivo

Este documento define a abordagem de gestão do **NeuroFlow Analytics** utilizando GitHub Projects, Issues, Pull Requests, milestones, labels e épicos para coordenar uma equipe de **3 desenvolvedores** trabalhando em paralelo.

A estrutura proposta transforma o roadmap do MVP em trabalho executável, rastreável e revisável, mantendo alinhamento entre produto e engenharia durante as 4 semanas de desenvolvimento.

---

# GitHub Projects

## Board Kanban

O projeto deve utilizar um board Kanban no GitHub Projects para acompanhar o ciclo de vida das tarefas desde a priorização até a entrega.

## Colunas do board

### Backlog

Contém ideias, requisitos, melhorias e tarefas ainda não priorizadas para execução imediata.

Critérios de entrada:

- A necessidade foi identificada.
- O escopo ainda pode estar incompleto.
- A tarefa ainda não está pronta para desenvolvimento.

### Ready

Contém tarefas refinadas e prontas para desenvolvimento.

Critérios de entrada:

- A Issue possui descrição clara.
- A Issue possui critérios de aceite.
- A Issue está associada a um épico ou milestone, quando aplicável.
- A prioridade foi definida.

### In Progress

Contém tarefas em desenvolvimento ativo.

Critérios de entrada:

- A branch da tarefa foi criada.
- Um desenvolvedor assumiu a responsabilidade pela Issue.
- A implementação foi iniciada.

Boas práticas:

- Evitar excesso de tarefas simultâneas por pessoa.
- Manter a Issue atualizada com decisões ou impedimentos.
- Garantir que o trabalho esteja vinculado a uma branch e Pull Request.

### Review

Contém tarefas implementadas e aguardando revisão.

Critérios de entrada:

- O Pull Request foi aberto.
- A Issue correspondente foi referenciada.
- O escopo principal foi concluído.

Boas práticas:

- A revisão deve ser feita por outro membro da equipe.
- Comentários devem ser resolvidos antes do merge.
- Mudanças visuais relevantes devem incluir evidências ou screenshots.

### Testing

Contém tarefas em validação técnica ou funcional.

Critérios de entrada:

- O Pull Request foi revisado ou está pronto para validação final.
- Os testes aplicáveis foram definidos.
- O fluxo afetado pode ser validado em ambiente local ou integrado.

### Done

Contém tarefas concluídas.

Critérios de entrada:

- A implementação foi validada.
- O Pull Request foi aprovado e mergeado.
- A Issue foi encerrada.
- A funcionalidade está integrada à branch correta.

---

# Épicos

Os épicos agrupam Issues relacionadas por domínio funcional, facilitando divisão de trabalho entre os 3 desenvolvedores e acompanhamento do progresso do MVP.

## 🔐 Authentication

Objetivo:

- Implementar cadastro, login, autenticação JWT, proteção de rotas e regras de acesso por usuário.

Exemplos de Issues:

- `[AUTH] Implementar autenticação JWT`
- `[AUTH] Criar tela de login`
- `[AUTH] Criar tela de cadastro`
- `[AUTH] Proteger rotas privadas`

## 📚 Subject Management

Objetivo:

- Implementar gestão de matérias no frontend, backend e banco de dados.

Exemplos de Issues:

- `[SUBJECT] Criar CRUD de matérias`
- `[SUBJECT] Criar tela de listagem de matérias`
- `[SUBJECT] Validar propriedade da matéria por usuário`

## 📝 Task Management

Objetivo:

- Implementar gestão de tarefas acadêmicas e suas regras principais.

Exemplos de Issues:

- `[TASK] Criar CRUD de tarefas`
- `[TASK] Criar formulário de tarefas`
- `[TASK] Associar tarefas a matérias`

## ⏱ Study Sessions

Objetivo:

- Implementar registro e acompanhamento de sessões de estudo.

Exemplos de Issues:

- `[SESSION] Criar CRUD de sessões de estudo`
- `[SESSION] Registrar duração da sessão`
- `[SESSION] Relacionar sessão com matéria`

## 🎯 Goals

Objetivo:

- Implementar criação, acompanhamento e atualização de metas de estudo.

Exemplos de Issues:

- `[GOAL] Criar CRUD de metas`
- `[GOAL] Criar tela de metas`
- `[GOAL] Validar período da meta`

## 📊 Dashboard & Analytics

Objetivo:

- Implementar dashboard, métricas básicas, gráficos e heatmap de estudos.

Exemplos de Issues:

- `[DASHBOARD] Implementar gráficos principais`
- `[DASHBOARD] Criar cards de analytics`
- `[DASHBOARD] Implementar heatmap de estudos`

## 🚀 MVP Release

Objetivo:

- Preparar, testar e publicar a primeira versão pública do MVP.

Exemplos de Issues:

- `[DEPLOY] Publicar MVP`
- `[RELEASE] Criar release notes do MVP`
- `[RELEASE] Validar fluxo completo em produção`

---

# Milestones

## MVP Foundation

Objetivo:

- Concluir documentação, revisar requisitos, validar arquitetura, finalizar DER, configurar ambiente e criar a estrutura inicial do projeto.

Relacionamento com o cronograma:

- Semana 1 — Planejamento e Fundação.

## MVP Development

Objetivo:

- Implementar os casos de uso principais do MVP por funcionalidade.

Relacionamento com o cronograma:

- Semana 2 — Desenvolvimento dos Casos de Uso.

## MVP Integration

Objetivo:

- Integrar frontend, backend e banco de dados, validar regras de negócio e corrigir inconsistências.

Relacionamento com o cronograma:

- Semana 3 — Integração.

## MVP Release

Objetivo:

- Finalizar dashboard, analytics, heatmap, responsividade, testes, correções finais e deploy.

Relacionamento com o cronograma:

- Semana 4 — Refinamento e Release MVP.

## V2 - Artificial Intelligence

Objetivo:

- Evoluir o produto com recursos inteligentes de recomendação, análise de desempenho e identificação de padrões de estudo.

## V3 - Gamification

Objetivo:

- Evoluir o produto com recursos de engajamento, conquistas, pontuação, badges e progressão.

---

# Labels

As labels devem ser aplicadas em Issues e Pull Requests para facilitar triagem, priorização e filtragem por área.

## Labels por área

### `frontend`

Tarefas relacionadas à interface, componentes, rotas, estilos, experiência do usuário, dashboard e responsividade.

### `backend`

Tarefas relacionadas à API, autenticação, serviços, controllers, regras de negócio e integrações.

### `database`

Tarefas relacionadas a DER, modelagem, migrações, scripts, relacionamentos, índices e persistência.

### `documentation`

Tarefas relacionadas a requisitos, regras de negócio, casos de uso, arquitetura, roadmap, guias e processos.

### `architecture`

Tarefas relacionadas a decisões técnicas, organização de camadas, padrões de projeto, integrações e ADRs.

## Labels por natureza

### `enhancement`

Melhorias, novas funcionalidades e evoluções planejadas.

### `bug`

Defeitos, comportamentos incorretos, inconsistências ou regressões.

## Labels por prioridade

### `high-priority`

Tarefas críticas, bloqueadoras ou essenciais para o MVP.

### `low-priority`

Tarefas desejáveis, mas não essenciais para a entrega atual.

## Labels de contribuição

### `good-first-issue`

Tarefas pequenas, bem definidas e adequadas para onboarding ou contribuição inicial.

---

# Organização das Issues

Cada funcionalidade deve possuir uma Issue própria. A Issue deve representar uma entrega clara, revisável e associada a um épico, milestone e conjunto de labels.

## Exemplos de Issues

```text
[AUTH] Implementar autenticação JWT
[SUBJECT] Criar CRUD de matérias
[TASK] Criar CRUD de tarefas
[GOAL] Criar CRUD de metas
[SESSION] Criar CRUD de sessões de estudo
[DASHBOARD] Implementar gráficos principais
[DEPLOY] Publicar MVP
```

## Prefixos recomendados

- `[AUTH]` para autenticação e usuários.
- `[SUBJECT]` para matérias.
- `[TASK]` para tarefas.
- `[GOAL]` para metas.
- `[SESSION]` para sessões de estudo.
- `[DASHBOARD]` para dashboard, métricas e analytics.
- `[DB]` para banco de dados.
- `[DOC]` para documentação.
- `[ARCH]` para arquitetura.
- `[DEPLOY]` para deploy.
- `[RELEASE]` para atividades de release.

## Estrutura recomendada de Issue

```markdown
## Descrição

Explique o objetivo da tarefa e o contexto da funcionalidade.

## Épico

Informe o épico relacionado, por exemplo: 🔐 Authentication.

## Escopo

- Item 1
- Item 2
- Item 3

## Critérios de aceite

- [ ] Critério 1
- [ ] Critério 2
- [ ] Critério 3

## Dependências

- Issue ou decisão relacionada, quando aplicável.

## Observações técnicas

Inclua decisões, restrições, contratos de API, regras de negócio ou referências relevantes.
```

## Boas práticas

- Criar uma Issue por funcionalidade ou entrega técnica clara.
- Evitar Issues grandes demais ou com múltiplos domínios sem relação direta.
- Vincular cada Issue ao épico correspondente.
- Vincular cada Issue à milestone correta.
- Aplicar labels no momento da criação ou refinamento.
- Criar Pull Request referenciando a Issue.
- Mover a Issue no board conforme o progresso real.
- Fechar a Issue somente após validação e merge.

---

# Rotina de Gestão Recomendada

## Planejamento semanal

No início de cada semana:

- Revisar a milestone ativa.
- Refinar as Issues do Backlog.
- Mover tarefas priorizadas para Ready.
- Distribuir responsabilidades entre os 3 desenvolvedores.
- Identificar dependências entre frontend, backend e banco de dados.
- Confirmar riscos, bloqueios e critérios de aceite.

## Acompanhamento diário

Durante a execução:

- Atualizar o board conforme o progresso.
- Manter Pull Requests pequenos e revisáveis.
- Registrar impedimentos diretamente nas Issues.
- Alinhar contratos de API entre frontend e backend.
- Resolver conflitos de integração rapidamente.

## Revisão e integração

Antes de concluir uma tarefa:

- Garantir que o Pull Request referencia a Issue.
- Solicitar revisão de outro membro da equipe.
- Executar testes aplicáveis.
- Validar se a funcionalidade atende aos critérios de aceite.
- Atualizar documentação quando necessário.

## Fechamento semanal

Ao final de cada semana:

- Revisar entregas concluídas.
- Identificar pendências para a próxima milestone.
- Atualizar riscos e bloqueios.
- Ajustar prioridades no GitHub Projects.
- Registrar decisões relevantes de produto ou engenharia.
