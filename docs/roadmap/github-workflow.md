# Fluxo Git e GitHub Workflow

## Objetivo

Este documento define o fluxo Git profissional para o desenvolvimento colaborativo do **NeuroFlow Analytics**, considerando uma equipe de **3 desenvolvedores** trabalhando em paralelo por funcionalidades e casos de uso.

O objetivo é garantir rastreabilidade, revisão técnica, integração segura, padronização de commits e preparação do projeto para releases controladas do MVP.

---

# Branch Strategy

## Branches principais

### `main`

Branch principal de produção.

Finalidade:

- Representar a versão estável, publicada ou pronta para publicação.
- Receber apenas código validado e promovido para release.
- Servir como referência para tags e versões oficiais.

Regras:

- Nenhum desenvolvedor pode realizar commits diretamente na `main`.
- A `main` deve receber alterações somente por Pull Request.
- Releases do MVP devem ser promovidas para `main` a partir de `develop`.
- Hotfixes críticos podem partir de `main`, mas também devem ser sincronizados de volta para `develop`.

### `develop`

Branch de integração do desenvolvimento.

Finalidade:

- Centralizar funcionalidades concluídas durante o ciclo do MVP.
- Servir como base para branches `feature/*` e `bugfix/*`.
- Permitir integração contínua entre frontend, backend e banco de dados.
- Preparar versões candidatas para promoção à `main`.

Regras:

- Todo desenvolvimento deve ser integrado primeiro em `develop`.
- Pull Requests de funcionalidades devem ter como destino inicial a `develop`.
- A branch deve permanecer executável e suficientemente estável para testes integrados.

---

## Branches de trabalho

### `feature/*`

Branches utilizadas para desenvolvimento de novas funcionalidades.

Todo desenvolvimento funcional deve ocorrer em feature branches.

Exemplos:

```text
feature/authentication
feature/tasks
feature/dashboard
feature/goals
feature/subjects
feature/study-sessions
```

Finalidade:

- Isolar o desenvolvimento de uma funcionalidade ou caso de uso.
- Permitir que os 3 desenvolvedores trabalhem em paralelo com menor risco de conflito.
- Facilitar revisão, testes e rastreabilidade por Issue.

Quando usar:

- Implementação de autenticação.
- Implementação de CRUDs.
- Criação de telas.
- Criação de endpoints.
- Implementação de dashboard, analytics ou heatmap.

### `bugfix/*`

Branches utilizadas para correções identificadas durante o desenvolvimento ou integração.

Exemplos:

```text
bugfix/task-status-update
bugfix/dashboard-chart-rendering
bugfix/session-date-validation
```

Finalidade:

- Corrigir problemas encontrados em `develop`.
- Manter correções isoladas de novas funcionalidades.
- Permitir revisão e testes antes do merge.

### `hotfix/*`

Branches utilizadas para correções urgentes em produção.

Exemplos:

```text
hotfix/login-token-expiration
hotfix/production-database-config
```

Finalidade:

- Corrigir falhas críticas identificadas na `main`.
- Reduzir tempo de resposta para problemas em produção.
- Garantir que a correção também seja aplicada em `develop`.

---

# Fluxo de trabalho para equipe

## Fluxo padrão de desenvolvimento

1. Criar ou selecionar uma Issue no GitHub Projects.
2. Criar uma branch a partir de `develop`.
3. Implementar a funcionalidade em commits pequenos e padronizados.
4. Atualizar a branch com `develop` quando necessário.
5. Executar testes e validações locais.
6. Abrir Pull Request para `develop`.
7. Referenciar a Issue correspondente no Pull Request.
8. Solicitar revisão de outro membro da equipe.
9. Corrigir comentários de revisão, se houver.
10. Realizar merge em `develop` após aprovação.
11. Mover a Issue no board conforme o status final.

## Fluxo de release

1. Validar que `develop` contém o escopo planejado para o MVP.
2. Executar testes integrados e validações finais.
3. Abrir Pull Request de `develop` para `main`.
4. Revisar riscos, notas de release e evidências de teste.
5. Realizar merge em `main` após aprovação.
6. Criar tag ou release do MVP.
7. Publicar a versão em ambiente público ou homologação.

---

# Estratégia de Commits

## Conventional Commits

O projeto deve manter o padrão **Conventional Commits** para que o histórico seja claro, consistente e automatizável.

Formato recomendado:

```text
<tipo>(escopo): <descrição>
```

Exemplos:

```text
feat(auth): implement jwt authentication
feat(tasks): create task crud
feat(subjects): add subject management
fix(dashboard): resolve chart rendering issue
docs(requirements): update business rules
refactor(user): simplify user service
test(auth): add authentication tests
chore(docker): update compose configuration
```

## Benefícios da padronização

- Facilita entender rapidamente o propósito de cada alteração.
- Melhora a rastreabilidade entre commits, Issues e Pull Requests.
- Reduz ruído em revisões de código.
- Ajuda a organizar changelogs e notas de release.
- Permite automações futuras de versionamento e geração de release notes.
- Torna o histórico do Git mais profissional e pesquisável.

## Tipos de commit

### `feat`

Usado para novas funcionalidades.

Exemplos:

- `feat(auth): implement jwt authentication`
- `feat(tasks): create task crud`
- `feat(subjects): add subject management`

### `fix`

Usado para correção de bugs.

Exemplos:

- `fix(dashboard): resolve chart rendering issue`
- `fix(tasks): correct task deletion behavior`

### `docs`

Usado para alterações em documentação.

Exemplos:

- `docs(requirements): update business rules`
- `docs(roadmap): update mvp planning`

### `style`

Usado para ajustes de formatação, aparência ou espaçamento que não alteram comportamento de negócio.

Exemplos:

- `style(ui): adjust dashboard spacing`
- `style(forms): improve input alignment`

### `refactor`

Usado para melhorias internas sem alteração de comportamento externo.

Exemplos:

- `refactor(user): simplify user service`
- `refactor(auth): reorganize token validation`

### `test`

Usado para criação ou alteração de testes.

Exemplos:

- `test(auth): add authentication tests`
- `test(tasks): cover task update scenarios`

### `chore`

Usado para tarefas operacionais, configurações e manutenção.

Exemplos:

- `chore(docker): update compose configuration`
- `chore(deps): update frontend dependencies`

## Boas práticas para commits

- Fazer commits pequenos e coesos.
- Evitar commits com múltiplos assuntos não relacionados.
- Usar escopos consistentes, como `auth`, `tasks`, `subjects`, `goals`, `sessions`, `dashboard`, `docker` e `requirements`.
- Escrever descrições objetivas no imperativo.
- Garantir que cada commit represente uma unidade lógica de trabalho.

---

# Pull Requests

## Regras obrigatórias

- Nenhum desenvolvedor pode realizar commits diretamente na `main`.
- Todo desenvolvimento deve ocorrer em feature branches.
- Toda funcionalidade deve possuir Issue associada.
- Todo Pull Request deve referenciar uma Issue.
- Nenhum Pull Request deve ser aprovado sem revisão de outro membro da equipe.
- O merge deve ocorrer primeiro para `develop`.
- Releases do MVP devem ser promovidas para `main`.
- Pull Requests devem descrever claramente as mudanças realizadas.
- Pull Requests devem conter evidências de teste ou validação.

## Estrutura recomendada de Pull Request

### Título

O título deve ser claro e seguir o padrão do commit principal.

Exemplos:

- `feat(auth): implement jwt authentication`
- `feat(tasks): create task crud`
- `fix(dashboard): resolve chart rendering issue`

### Descrição

A descrição deve conter:

- Resumo das alterações.
- Contexto ou motivação.
- Issue relacionada.
- Como foi testado.
- Riscos ou pontos de atenção.
- Screenshots, quando houver mudança visual relevante.

Modelo recomendado:

```markdown
## Summary

- Added ...
- Updated ...
- Fixed ...

## Related Issue

Closes #123

## Testing

- [ ] Manual validation
- [ ] Unit tests
- [ ] Integration tests

## Review Notes

- Highlight relevant architectural decisions, risks or trade-offs.
```

## Critérios mínimos para aprovação

Antes do merge, o Pull Request deve atender aos seguintes critérios:

- Issue relacionada informada.
- Escopo compatível com a Issue.
- Revisão realizada por outro membro da equipe.
- Conflitos resolvidos.
- Testes aplicáveis executados.
- Sem regressões conhecidas no fluxo principal.
- Documentação atualizada, quando necessário.
