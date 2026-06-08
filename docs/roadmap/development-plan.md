# Plano de Desenvolvimento Colaborativo do MVP

## Visão geral

Este documento atualiza o planejamento do MVP do **NeuroFlow Analytics** para um modelo colaborativo, considerando uma equipe de **3 desenvolvedores** trabalhando em paralelo por funcionalidades e casos de uso.

O MVP terá duração estimada de **4 semanas**. A execução será organizada por entregas semanais, com divisão de responsabilidades por domínios funcionais, integração contínua via Pull Requests e acompanhamento por GitHub Projects.

## Premissas de planejamento

- O desenvolvimento será realizado por uma equipe de 3 desenvolvedores.
- O trabalho será dividido por funcionalidades, casos de uso e épicos de produto.
- Cada funcionalidade deve possuir Issue própria, branch dedicada e Pull Request associado.
- O desenvolvimento de frontend, backend e banco de dados poderá ocorrer em paralelo, desde que contratos, modelos e critérios de aceite estejam alinhados.
- A integração deve ser tratada como atividade contínua, não apenas como etapa final.
- A branch `develop` será o ponto de integração do MVP antes da promoção para `main`.
- Decisões técnicas relevantes devem ser documentadas para reduzir desalinhamento entre integrantes.

## Estrutura sugerida da equipe

A divisão abaixo é uma referência inicial e pode ser ajustada conforme disponibilidade, senioridade e prioridades da sprint.

### Desenvolvedor 1 — Autenticação, Usuários e Arquitetura Backend

Responsabilidades principais:

- Autenticação JWT.
- Cadastro e login.
- Gestão de usuários.
- Segurança das rotas privadas.
- Estrutura base do backend.
- Validação das regras de acesso por usuário.

### Desenvolvedor 2 — Domínio Acadêmico e Banco de Dados

Responsabilidades principais:

- Matérias.
- Tarefas.
- Sessões de estudo.
- Metas.
- Modelagem do banco de dados.
- Integração Backend + PostgreSQL.

### Desenvolvedor 3 — Frontend, Dashboard e Experiência do Usuário

Responsabilidades principais:

- Estrutura React.
- Design System.
- Layout base.
- Telas principais.
- Dashboard.
- Analytics visuais.
- Heatmap.
- Responsividade.

## Objetivos do MVP

O MVP deve permitir que um usuário:

- Crie uma conta e realize login.
- Visualize um dashboard com indicadores básicos de estudo.
- Cadastre, consulte, atualize e remova matérias.
- Cadastre, consulte, atualize e remova tarefas.
- Registre sessões de estudo.
- Defina e acompanhe metas.
- Visualize métricas básicas de produtividade, consistência e progresso.
- Acesse uma primeira versão pública da aplicação com fluxo principal funcional.

---

# Cronograma do MVP

## Semana 1 — Planejamento e Fundação

**Objetivo da semana:** alinhar produto, arquitetura, requisitos, banco de dados, ambiente de desenvolvimento e organização do trabalho da equipe.

### Objetivos

- Finalizar documentação.
- Revisar requisitos funcionais e não funcionais.
- Revisar regras de negócio.
- Revisar casos de uso.
- Validar arquitetura da solução.
- Finalizar DER.
- Criar GitHub Projects.
- Criar Issues iniciais.
- Configurar ambiente de desenvolvimento.

### Atividades por frente

#### Produto e documentação

- Revisar visão de produto, requisitos, regras de negócio e casos de uso.
- Confirmar escopo exato do MVP.
- Identificar funcionalidades que ficam fora do MVP.
- Transformar requisitos em Issues executáveis.

#### Arquitetura e engenharia

- Validar arquitetura frontend, backend e banco de dados.
- Definir contratos iniciais entre frontend e backend.
- Definir padrões de pastas, nomenclatura e responsabilidades por camada.
- Revisar decisões técnicas já documentadas.

#### Banco de dados

- Finalizar DER.
- Validar entidades principais.
- Confirmar relacionamentos, chaves e restrições.
- Preparar estratégia de migração ou scripts iniciais.

#### Gestão de projeto

- Criar board no GitHub Projects.
- Criar milestones do MVP.
- Criar labels.
- Criar Issues iniciais por funcionalidade.
- Associar Issues aos épicos e milestones correspondentes.

#### Ambiente

- Configurar ambiente frontend.
- Configurar ambiente backend.
- Configurar PostgreSQL.
- Configurar Docker, quando aplicável.
- Validar execução local por todos os integrantes.

### Entregáveis

- Documentação concluída e revisada.
- Banco modelado.
- Estrutura inicial dos projetos criada.
- GitHub Projects configurado.
- Issues iniciais criadas e priorizadas.
- Ambiente local validado pela equipe.

### Critérios de aceite

- Todos os integrantes conseguem executar o ambiente local mínimo.
- O escopo do MVP está documentado e acordado.
- As principais Issues estão criadas, priorizadas e vinculadas a milestones.
- O DER representa as entidades essenciais do MVP.
- A arquitetura foi revisada e não possui bloqueios críticos conhecidos.

---

## Semana 2 — Desenvolvimento dos Casos de Uso

**Objetivo da semana:** implementar os principais casos de uso do MVP em paralelo, com foco nos CRUDs essenciais e na base funcional da aplicação.

### Objetivo principal

Ter os CRUDs principais implementados e prontos para integração.

### Casos de uso prioritários

- Autenticação.
- Matérias.
- Tarefas.
- Metas.
- Sessões de estudo.

### Divisão sugerida por funcionalidade

#### Autenticação

Escopo esperado:

- Cadastro de usuário.
- Login.
- Geração de token JWT.
- Proteção de rotas privadas.
- Associação de dados ao usuário autenticado.

#### Matérias

Escopo esperado:

- Criar matéria.
- Listar matérias do usuário.
- Atualizar matéria.
- Remover matéria.
- Validar obrigatoriedade e propriedade dos dados.

#### Tarefas

Escopo esperado:

- Criar tarefa.
- Listar tarefas do usuário.
- Atualizar tarefa.
- Remover tarefa.
- Associar tarefas a matérias, quando aplicável.

#### Metas

Escopo esperado:

- Criar meta.
- Listar metas do usuário.
- Atualizar meta.
- Remover meta.
- Validar metas por período e tipo.

#### Sessões de estudo

Escopo esperado:

- Registrar sessão de estudo.
- Listar sessões por usuário.
- Atualizar sessão.
- Remover sessão.
- Relacionar sessões com matérias, tarefas ou metas, quando aplicável.

### Entregáveis

- Endpoints principais implementados.
- Telas e componentes principais em desenvolvimento ou prontos para integração.
- Persistência dos dados principais funcionando.
- Pull Requests abertos por funcionalidade.
- Testes iniciais de serviços, controllers ou componentes críticos.

### Critérios de aceite

- Cada funcionalidade possui branch, Issue e Pull Request associado.
- Os CRUDs principais estão implementados ou em estado integrável.
- As regras de propriedade por usuário foram consideradas.
- Os contratos entre frontend e backend estão claros.
- Não existem conflitos estruturais relevantes entre as frentes de desenvolvimento.

---

## Semana 3 — Integração

**Objetivo da semana:** integrar as frentes de frontend, backend e banco de dados, validar regras de negócio e corrigir inconsistências identificadas durante o uso do fluxo completo.

### Objetivos

- Integração Frontend + Backend.
- Integração Backend + Banco.
- Validação das regras de negócio.
- Correção de inconsistências.

### Atividades

- Conectar telas aos endpoints reais.
- Validar autenticação em rotas protegidas.
- Validar persistência dos dados por usuário.
- Testar fluxos de criação, listagem, atualização e remoção.
- Corrigir divergências entre contratos de API e consumo no frontend.
- Ajustar mensagens de erro, estados vazios e estados de carregamento.
- Revisar regras de negócio implementadas contra a documentação.
- Resolver bugs bloqueadores para o fluxo principal.

### Entregáveis

- Fluxo completo funcionando.
- Frontend consumindo APIs reais.
- Backend persistindo dados no PostgreSQL.
- Regras de negócio essenciais validadas.
- Issues de inconsistência registradas ou corrigidas.

### Critérios de aceite

- Um usuário consegue se cadastrar, autenticar e acessar a aplicação.
- Um usuário consegue gerenciar matérias, tarefas, metas e sessões de estudo com dados reais.
- Os dados são segregados corretamente por usuário autenticado.
- O fluxo principal funciona em ambiente local integrado.
- Bugs críticos de integração foram corrigidos ou priorizados para a Semana 4.

---

## Semana 4 — Refinamento e Release MVP

**Objetivo da semana:** concluir o refinamento da experiência, implementar indicadores principais, executar testes finais e publicar a primeira versão pública do MVP.

### Objetivos

- Dashboard.
- Analytics básicos.
- Heatmap.
- Responsividade.
- Testes.
- Correções finais.
- Deploy.

### Atividades

- Implementar ou finalizar cards do dashboard.
- Implementar métricas básicas de produtividade e progresso.
- Implementar heatmap de consistência de estudos.
- Ajustar responsividade das telas principais.
- Executar testes de interface, backend e integração.
- Corrigir bugs críticos e inconsistências visuais.
- Revisar documentação de execução e deploy.
- Preparar release do MVP.
- Publicar a aplicação em ambiente público ou homologação acessível.

### Entregável

Primeira versão pública do MVP.

### Critérios de aceite

- Dashboard exibe métricas básicas com dados reais ou calculados pelo backend.
- Heatmap representa a consistência de estudos do usuário.
- A aplicação é utilizável nos principais tamanhos de tela definidos para o MVP.
- Testes e validações críticas foram executados.
- O deploy foi realizado com sucesso.
- A release do MVP foi documentada.

---

# Checklist de Conclusão do MVP

## Gestão e colaboração

- [ ] GitHub Projects criado.
- [ ] Board Kanban configurado.
- [ ] Milestones do MVP criadas.
- [ ] Labels criadas.
- [ ] Issues iniciais criadas por funcionalidade.
- [ ] Todas as funcionalidades possuem Issue associada.
- [ ] Todas as alterações relevantes passaram por Pull Request.
- [ ] Pull Requests foram revisados por outro membro da equipe.
- [ ] Releases foram promovidas de `develop` para `main`.

## Produto

- [ ] Escopo do MVP validado.
- [ ] Requisitos revisados.
- [ ] Regras de negócio revisadas.
- [ ] Casos de uso revisados.
- [ ] Fluxo principal validado de ponta a ponta.

## Frontend

- [ ] Projeto React configurado.
- [ ] Design System inicial aplicado.
- [ ] Layout base implementado.
- [ ] Telas de autenticação implementadas.
- [ ] Telas de matérias implementadas.
- [ ] Telas de tarefas implementadas.
- [ ] Telas de metas implementadas.
- [ ] Telas de sessões de estudo implementadas.
- [ ] Dashboard implementado.
- [ ] Heatmap implementado.
- [ ] Responsividade validada.
- [ ] Estados de loading, erro e vazio implementados.

## Backend

- [ ] Projeto Spring Boot configurado.
- [ ] Autenticação JWT implementada.
- [ ] Cadastro implementado.
- [ ] Login implementado.
- [ ] CRUD de matérias implementado.
- [ ] CRUD de tarefas implementado.
- [ ] CRUD de metas implementado.
- [ ] CRUD de sessões de estudo implementado.
- [ ] Analytics básicos implementados.
- [ ] Regras de acesso por usuário implementadas.

## Banco de Dados

- [ ] DER finalizado.
- [ ] PostgreSQL configurado.
- [ ] Tabela de usuários criada.
- [ ] Tabela de matérias criada.
- [ ] Tabela de tarefas criada.
- [ ] Tabela de metas criada.
- [ ] Tabela de sessões de estudo criada.
- [ ] Relacionamentos principais definidos.
- [ ] Migrações ou scripts versionados.

## Qualidade e release

- [ ] Testes de interface executados.
- [ ] Testes de backend executados.
- [ ] Testes de integração executados.
- [ ] Bugs críticos corrigidos.
- [ ] Documentação de execução atualizada.
- [ ] Documentação de deploy atualizada.
- [ ] Build de produção validado.
- [ ] Deploy realizado.
- [ ] Release notes do MVP criadas.
