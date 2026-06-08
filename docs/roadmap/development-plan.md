# Plano de Desenvolvimento Colaborativo do MVP

## Visão geral

Este documento atualiza o planejamento do MVP do **NeuroFlow Analytics** para um modelo colaborativo, considerando uma equipe de **3 desenvolvedores** trabalhando em paralelo por funcionalidades e casos de uso.

O MVP terá duração estimada de **4 semanas**. A execução será organizada por entregas semanais, com divisão de responsabilidades por domínios funcionais, integração contínua via Pull Requests e acompanhamento por GitHub Projects.

## Premissas de planejamento

- O desenvolvimento será realizado por uma equipe de 3 desenvolvedores.
- O trabalho será dividido por funcionalidades, casos de uso e épicos de produto.
- O projeto seguirá uma abordagem feature-based.
- Cada funcionalidade deve possuir Issue própria, branch dedicada e Pull Request associado.
- Cada desenvolvedor será responsável pelo ciclo completo das funcionalidades sob sua responsabilidade.
- Sempre que possível, uma funcionalidade deverá ser implementada ponta a ponta pelo mesmo desenvolvedor.
- Cada integrante deverá implementar frontend, backend, banco de dados quando necessário, testes e integração da própria funcionalidade.
- A divisão do trabalho deve minimizar dependências entre integrantes.
- O compartilhamento de responsabilidades ocorrerá apenas em infraestrutura comum, arquitetura global, deploy e integração final.
- A integração deve ser tratada como atividade contínua, não apenas como etapa final.
- A branch `develop` será o ponto de integração do MVP antes da promoção para `main`.
- Decisões técnicas relevantes devem ser documentadas para reduzir desalinhamento entre integrantes.

## Estrutura baseada em Casos de Uso

A equipe será organizada por funcionalidades de negócio e não por tecnologias.

Cada desenvolvedor será responsável por implementar suas funcionalidades de forma completa.

Isso inclui:

- Modelagem necessária.
- Endpoints.
- Regras de negócio.
- Telas.
- Componentes.
- Testes.
- Integração.

### Desenvolvedor 1

Responsável por:

#### UC-01 Cadastro de Usuário

- Registro.
- Autenticação.
- Login.
- Logout.
- Perfil.

#### UC-02 Gestão de Metas

- CRUD de metas.
- Acompanhamento de progresso.

### Desenvolvedor 2

Responsável por:

#### UC-03 Gestão de Matérias

- CRUD de matérias.

#### UC-04 Sessões de Estudo

- Registro.
- Histórico.
- Edição.
- Exclusão.

### Desenvolvedor 3

Responsável por:

#### UC-05 Gestão de Tarefas

- CRUD de tarefas.

#### UC-06 Dashboard e Analytics

- Dashboard.
- Gráficos.
- Métricas.
- Heatmap.

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

## Semana 2 — Implementação dos Casos de Uso

**Objetivo da semana:** cada integrante desenvolve suas funcionalidades ponta a ponta, com foco em entregar casos de uso utilizáveis de forma isolada.

### Objetivo principal

Concluir a maior parte dos casos de uso atribuídos.

### Abordagem de execução

Cada desenvolvedor deve conduzir o ciclo completo das funcionalidades sob sua responsabilidade, evitando repasses constantes entre integrantes para finalizar uma entrega.

Cada caso de uso deve entregar:

- Banco de dados necessário.
- Backend.
- Frontend.
- Validações.
- Testes básicos.
- Integração da própria funcionalidade.

### Casos de uso por responsável

#### Desenvolvedor 1

- **UC-01 Cadastro de Usuário:** registro, autenticação, login, logout e perfil.
- **UC-02 Gestão de Metas:** CRUD de metas e acompanhamento de progresso.

#### Desenvolvedor 2

- **UC-03 Gestão de Matérias:** CRUD de matérias.
- **UC-04 Sessões de Estudo:** registro, histórico, edição e exclusão.

#### Desenvolvedor 3

- **UC-05 Gestão de Tarefas:** CRUD de tarefas.
- **UC-06 Dashboard e Analytics:** dashboard, gráficos, métricas e heatmap.

### Entregáveis

- Casos de uso implementados ponta a ponta em branches próprias.
- Modelagem, migrações ou scripts necessários para cada funcionalidade.
- Endpoints, regras de negócio e validações de cada caso de uso.
- Telas, componentes e estados de interface de cada funcionalidade.
- Testes básicos associados às funcionalidades implementadas.
- Pull Requests abertos por caso de uso ou incremento funcional.

### Critérios de aceite

- Cada caso de uso possui um responsável definido.
- Cada caso de uso pode ser executado independentemente.
- As funcionalidades não dependem da implementação de outro desenvolvedor para serem concluídas.
- As dependências entre módulos foram reduzidas ao mínimo necessário.
- Cada funcionalidade possui branch, Issue e Pull Request associado.
- A maior parte dos casos de uso atribuídos está implementada ou em estado demonstrável.
- Ao final da semana, cada funcionalidade está utilizável de forma isolada.

---

## Semana 3 — Integração

**Objetivo da semana:** integrar os casos de uso desenvolvidos individualmente, validar regras de negócio entre módulos e corrigir conflitos identificados durante o uso do fluxo completo.

### Integração entre Casos de Uso

Objetivos:

- Integrar funcionalidades desenvolvidas individualmente.
- Validar navegação entre módulos.
- Validar consistência visual.
- Validar autenticação em todos os fluxos.
- Corrigir conflitos entre implementações.

### Atividades

- Validar a comunicação entre casos de uso que possuem dependências reais.
- Testar o fluxo de autenticação como base para os demais módulos.
- Validar a navegação entre cadastro, matérias, tarefas, metas, sessões de estudo e dashboard.
- Confirmar que cada funcionalidade mantém sua autonomia operacional.
- Revisar consistência visual entre telas criadas por desenvolvedores diferentes.
- Corrigir conflitos de rotas, contratos, componentes compartilhados, migrações e nomenclaturas.
- Revisar regras de negócio implementadas contra a documentação.
- Resolver bugs bloqueadores para o fluxo principal.

### Entregáveis

- Fluxo completo funcionando com os casos de uso integrados.
- Funcionalidades individuais conectadas ao fluxo geral da aplicação.
- Navegação entre módulos validada.
- Consistência visual e comportamental revisada.
- Issues de inconsistência registradas ou corrigidas.

### Critérios de aceite

- Um usuário consegue se cadastrar, autenticar e acessar a aplicação.
- Um usuário consegue navegar entre os módulos do MVP sem bloqueios críticos.
- Cada caso de uso possui um responsável definido.
- Cada caso de uso pode ser executado independentemente.
- As funcionalidades não dependem da implementação de outro desenvolvedor para serem concluídas.
- As dependências entre módulos foram reduzidas ao mínimo necessário.
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
- Cada caso de uso possui um responsável definido.
- Cada caso de uso pode ser executado independentemente dentro do fluxo do MVP.
- As funcionalidades não dependem da implementação de outro desenvolvedor para serem concluídas.
- As dependências entre módulos foram reduzidas ao mínimo necessário.
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
- [ ] Todos os casos de uso possuem responsável definido.
- [ ] Cada caso de uso foi implementado ponta a ponta pelo responsável sempre que possível.
- [ ] Dependências entre integrantes foram reduzidas ao mínimo necessário.
- [ ] Todas as alterações relevantes passaram por Pull Request.
- [ ] Pull Requests foram revisados por outro membro da equipe.
- [ ] Releases foram promovidas de `develop` para `main`.

## Produto

- [ ] Escopo do MVP validado.
- [ ] Requisitos revisados.
- [ ] Regras de negócio revisadas.
- [ ] Casos de uso revisados.
- [ ] Fluxo principal validado de ponta a ponta.

## Casos de uso

### UC-01 Cadastro de Usuário

- [ ] Modelagem necessária implementada.
- [ ] Endpoints de registro, autenticação, login, logout e perfil implementados.
- [ ] Telas e componentes de autenticação implementados.
- [ ] Validações de entrada e regras de autenticação implementadas.
- [ ] Testes básicos executados.
- [ ] Funcionalidade integrada ao fluxo geral da aplicação.

### UC-02 Gestão de Metas

- [ ] Modelagem necessária implementada.
- [ ] CRUD de metas implementado.
- [ ] Acompanhamento de progresso implementado.
- [ ] Telas e componentes de metas implementados.
- [ ] Validações e regras de negócio implementadas.
- [ ] Testes básicos executados.
- [ ] Funcionalidade integrada ao fluxo geral da aplicação.

### UC-03 Gestão de Matérias

- [ ] Modelagem necessária implementada.
- [ ] CRUD de matérias implementado.
- [ ] Telas e componentes de matérias implementados.
- [ ] Validações e regras de propriedade por usuário implementadas.
- [ ] Testes básicos executados.
- [ ] Funcionalidade integrada ao fluxo geral da aplicação.

### UC-04 Sessões de Estudo

- [ ] Modelagem necessária implementada.
- [ ] Registro, histórico, edição e exclusão de sessões implementados.
- [ ] Telas e componentes de sessões de estudo implementados.
- [ ] Validações e regras de negócio implementadas.
- [ ] Testes básicos executados.
- [ ] Funcionalidade integrada ao fluxo geral da aplicação.

### UC-05 Gestão de Tarefas

- [ ] Modelagem necessária implementada.
- [ ] CRUD de tarefas implementado.
- [ ] Telas e componentes de tarefas implementados.
- [ ] Validações e regras de negócio implementadas.
- [ ] Testes básicos executados.
- [ ] Funcionalidade integrada ao fluxo geral da aplicação.

### UC-06 Dashboard e Analytics

- [ ] Métricas básicas implementadas.
- [ ] Dashboard implementado.
- [ ] Gráficos principais implementados.
- [ ] Heatmap implementado.
- [ ] Responsividade validada.
- [ ] Testes básicos executados.
- [ ] Funcionalidade integrada ao fluxo geral da aplicação.

## Infraestrutura técnica comum

- [ ] Projeto React configurado.
- [ ] Projeto Spring Boot configurado.
- [ ] PostgreSQL configurado.
- [ ] Docker configurado, quando aplicável.
- [ ] DER finalizado.
- [ ] Migrações ou scripts versionados.
- [ ] Design System inicial aplicado.
- [ ] Layout base implementado.
- [ ] Estados de loading, erro e vazio padronizados.
- [ ] Regras globais de acesso por usuário implementadas.

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
