# Visão Geral das APIs REST

Este documento apresenta a visão inicial dos recursos REST planejados para o NeuroFlow Analytics. Os contratos exatos serão definidos durante a implementação.

## Convenções Gerais

- Base path sugerido: `/api/v1`.
- Autenticação: JWT via header `Authorization: Bearer <token>`.
- Formato de dados: JSON.
- Datas e horários: ISO 8601.
- Rotas privadas devem filtrar dados pelo usuário autenticado.

## Recursos Planejados

| Recurso | Endpoint Base | Responsabilidade |
|---|---|---|
| Autenticação | `/auth` | Cadastro, login e emissão de JWT. |
| Usuários | `/users` | Perfil e preferências do usuário autenticado. |
| Matérias | `/subjects` | CRUD de matérias. |
| Sessões de estudo | `/study-sessions` | Registro e consulta de sessões. |
| Tarefas | `/tasks` | Gestão de tarefas acadêmicas. |
| Metas | `/goals` | Criação e acompanhamento de metas. |
| Analytics | `/analytics` | Indicadores, agregações e dashboards. |
| Streaks | `/streaks` | Consulta de streak atual e histórico. |
| IA | `/ai` | Recomendações e insights futuros. |

## Endpoints Iniciais

### `/auth`

| Método | Endpoint | Descrição | Autenticação |
|---|---|---|---|
| POST | `/api/v1/auth/register` | Cadastra novo usuário. | Não |
| POST | `/api/v1/auth/login` | Autentica usuário e retorna JWT. | Não |
| POST | `/api/v1/auth/refresh` | Renova token, se estratégia for adotada. | Sim |

### `/users`

| Método | Endpoint | Descrição | Autenticação |
|---|---|---|---|
| GET | `/api/v1/users/me` | Retorna perfil do usuário autenticado. | Sim |
| PUT | `/api/v1/users/me` | Atualiza dados básicos do perfil. | Sim |

### `/subjects`

| Método | Endpoint | Descrição | Autenticação |
|---|---|---|---|
| GET | `/api/v1/subjects` | Lista matérias do usuário. | Sim |
| POST | `/api/v1/subjects` | Cria nova matéria. | Sim |
| GET | `/api/v1/subjects/{id}` | Consulta matéria específica. | Sim |
| PUT | `/api/v1/subjects/{id}` | Atualiza matéria. | Sim |
| DELETE | `/api/v1/subjects/{id}` | Remove ou inativa matéria. | Sim |

### `/study-sessions`

| Método | Endpoint | Descrição | Autenticação |
|---|---|---|---|
| GET | `/api/v1/study-sessions` | Lista sessões com filtros por período e matéria. | Sim |
| POST | `/api/v1/study-sessions` | Registra sessão de estudo. | Sim |
| GET | `/api/v1/study-sessions/{id}` | Consulta sessão específica. | Sim |
| PUT | `/api/v1/study-sessions/{id}` | Atualiza sessão. | Sim |
| DELETE | `/api/v1/study-sessions/{id}` | Remove sessão, quando permitido. | Sim |

### `/tasks`

| Método | Endpoint | Descrição | Autenticação |
|---|---|---|---|
| GET | `/api/v1/tasks` | Lista tarefas com filtros por status, prazo e matéria. | Sim |
| POST | `/api/v1/tasks` | Cria tarefa. | Sim |
| PUT | `/api/v1/tasks/{id}` | Atualiza tarefa. | Sim |
| PATCH | `/api/v1/tasks/{id}/complete` | Marca tarefa como concluída. | Sim |
| DELETE | `/api/v1/tasks/{id}` | Remove ou cancela tarefa. | Sim |

### `/goals`

| Método | Endpoint | Descrição | Autenticação |
|---|---|---|---|
| GET | `/api/v1/goals` | Lista metas do usuário. | Sim |
| POST | `/api/v1/goals` | Cria meta. | Sim |
| GET | `/api/v1/goals/{id}/progress` | Consulta progresso da meta. | Sim |
| PUT | `/api/v1/goals/{id}` | Atualiza meta. | Sim |
| DELETE | `/api/v1/goals/{id}` | Cancela ou remove meta. | Sim |

### `/analytics`

| Método | Endpoint | Descrição | Autenticação |
|---|---|---|---|
| GET | `/api/v1/analytics/dashboard` | Retorna indicadores consolidados para o dashboard. | Sim |
| GET | `/api/v1/analytics/study-time` | Retorna evolução de tempo de estudo. | Sim |
| GET | `/api/v1/analytics/subjects` | Retorna distribuição por matéria. | Sim |
| GET | `/api/v1/analytics/tasks` | Retorna métricas de tarefas. | Sim |

### `/ai` — Futuro

| Método | Endpoint | Descrição | Autenticação |
|---|---|---|---|
| POST | `/api/v1/ai/insights` | Gera insights personalizados. | Sim |
| GET | `/api/v1/ai/interactions` | Lista histórico de interações de IA. | Sim |

## Padrão de Resposta de Erro

```json
{
  "timestamp": "2026-01-01T10:00:00Z",
  "status": 400,
  "error": "Bad Request",
  "message": "Sessão de estudo deve possuir duração maior que zero.",
  "path": "/api/v1/study-sessions"
}
```
