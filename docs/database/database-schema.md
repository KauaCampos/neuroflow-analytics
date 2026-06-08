# Proposta Inicial de Esquema Relacional

Este documento apresenta uma proposta inicial para o banco de dados PostgreSQL do NeuroFlow Analytics. O esquema poderá evoluir conforme decisões de implementação e requisitos futuros.

## Convenções

- Chaves primárias: `UUID`.
- Datas de auditoria: `created_at` e `updated_at` quando aplicável.
- Relacionamentos com usuário devem utilizar `user_id`.
- Exclusões lógicas podem ser adotadas para entidades com impacto histórico.

## Tabela `users`

| Coluna | Tipo | Restrições | Descrição |
|---|---|---|---|
| id | UUID | PK | Identificador do usuário. |
| name | VARCHAR(120) | NOT NULL | Nome do estudante. |
| email | VARCHAR(160) | NOT NULL, UNIQUE | E-mail de autenticação. |
| password_hash | VARCHAR(255) | NOT NULL | Senha protegida por hash. |
| status | VARCHAR(30) | NOT NULL | Status da conta, como active ou inactive. |
| created_at | TIMESTAMP | NOT NULL | Data de criação. |
| updated_at | TIMESTAMP | NOT NULL | Data de atualização. |

## Tabela `subjects`

| Coluna | Tipo | Restrições | Descrição |
|---|---|---|---|
| id | UUID | PK | Identificador da matéria. |
| user_id | UUID | FK users(id), NOT NULL | Proprietário da matéria. |
| name | VARCHAR(120) | NOT NULL | Nome da matéria. |
| description | TEXT | NULL | Descrição opcional. |
| color | VARCHAR(20) | NULL | Cor para identificação visual. |
| status | VARCHAR(30) | NOT NULL | Status ativo/inativo. |
| created_at | TIMESTAMP | NOT NULL | Data de criação. |
| updated_at | TIMESTAMP | NOT NULL | Data de atualização. |

## Tabela `study_sessions`

| Coluna | Tipo | Restrições | Descrição |
|---|---|---|---|
| id | UUID | PK | Identificador da sessão. |
| user_id | UUID | FK users(id), NOT NULL | Proprietário da sessão. |
| subject_id | UUID | FK subjects(id), NULL | Matéria associada. |
| session_date | DATE | NOT NULL | Data da sessão. |
| start_time | TIMESTAMP | NULL | Início da sessão. |
| end_time | TIMESTAMP | NULL | Fim da sessão. |
| duration_minutes | INTEGER | NOT NULL, CHECK > 0 | Duração total em minutos. |
| study_type | VARCHAR(40) | NOT NULL | Tipo de estudo. |
| focus_level | SMALLINT | CHECK BETWEEN 1 AND 5 | Percepção de foco. |
| notes | TEXT | NULL | Observações. |
| created_at | TIMESTAMP | NOT NULL | Data de criação. |
| updated_at | TIMESTAMP | NOT NULL | Data de atualização. |

## Tabela `tasks`

| Coluna | Tipo | Restrições | Descrição |
|---|---|---|---|
| id | UUID | PK | Identificador da tarefa. |
| user_id | UUID | FK users(id), NOT NULL | Proprietário da tarefa. |
| subject_id | UUID | FK subjects(id), NULL | Matéria relacionada. |
| title | VARCHAR(160) | NOT NULL | Título da tarefa. |
| description | TEXT | NULL | Descrição detalhada. |
| priority | VARCHAR(20) | NOT NULL | Baixa, média, alta ou urgente. |
| status | VARCHAR(30) | NOT NULL | Pendente, em andamento, concluída ou cancelada. |
| due_date | DATE | NULL | Prazo da tarefa. |
| completed_at | TIMESTAMP | NULL | Data de conclusão. |
| created_at | TIMESTAMP | NOT NULL | Data de criação. |
| updated_at | TIMESTAMP | NOT NULL | Data de atualização. |

## Tabela `goals`

| Coluna | Tipo | Restrições | Descrição |
|---|---|---|---|
| id | UUID | PK | Identificador da meta. |
| user_id | UUID | FK users(id), NOT NULL | Proprietário da meta. |
| subject_id | UUID | FK subjects(id), NULL | Matéria foco, quando aplicável. |
| goal_type | VARCHAR(50) | NOT NULL | Tipo da meta. |
| target_value | NUMERIC(10,2) | NOT NULL, CHECK >= 0 | Valor alvo. |
| unit | VARCHAR(30) | NOT NULL | Unidade, como horas ou tarefas. |
| start_date | DATE | NOT NULL | Início do período. |
| end_date | DATE | NOT NULL | Fim do período. |
| status | VARCHAR(30) | NOT NULL | Ativa, concluída, cancelada ou expirada. |
| created_at | TIMESTAMP | NOT NULL | Data de criação. |
| updated_at | TIMESTAMP | NOT NULL | Data de atualização. |

## Tabela `streaks`

| Coluna | Tipo | Restrições | Descrição |
|---|---|---|---|
| id | UUID | PK | Identificador do streak. |
| user_id | UUID | FK users(id), NOT NULL, UNIQUE | Usuário proprietário. |
| current_streak | INTEGER | NOT NULL, DEFAULT 0 | Streak atual em dias. |
| best_streak | INTEGER | NOT NULL, DEFAULT 0 | Melhor streak histórico. |
| last_study_date | DATE | NULL | Última data com sessão válida. |
| updated_at | TIMESTAMP | NOT NULL | Data da última atualização. |

## Tabela `ai_interactions`

| Coluna | Tipo | Restrições | Descrição |
|---|---|---|---|
| id | UUID | PK | Identificador da interação. |
| user_id | UUID | FK users(id), NOT NULL | Proprietário da interação. |
| interaction_type | VARCHAR(50) | NOT NULL | Tipo de insight solicitado. |
| context_summary | TEXT | NOT NULL | Resumo do contexto enviado. |
| response_text | TEXT | NOT NULL | Resposta gerada pela IA. |
| model | VARCHAR(80) | NULL | Modelo utilizado. |
| created_at | TIMESTAMP | NOT NULL | Data da interação. |

## Relacionamentos

| Origem | Destino | Cardinalidade |
|---|---|---|
| users | subjects | 1:N |
| users | study_sessions | 1:N |
| users | tasks | 1:N |
| users | goals | 1:N |
| users | streaks | 1:1 |
| users | ai_interactions | 1:N |
| subjects | study_sessions | 1:N opcional |
| subjects | tasks | 1:N opcional |
| subjects | goals | 1:N opcional |

## Índices Recomendados

| Tabela | Índice | Objetivo |
|---|---|---|
| users | `idx_users_email` | Otimizar login por e-mail. |
| subjects | `idx_subjects_user_id` | Listar matérias por usuário. |
| study_sessions | `idx_study_sessions_user_date` | Consultas de analytics por período. |
| study_sessions | `idx_study_sessions_subject` | Filtros por matéria. |
| tasks | `idx_tasks_user_status_due_date` | Consultas de tarefas por status e prazo. |
| goals | `idx_goals_user_period` | Cálculo de progresso por período. |
| ai_interactions | `idx_ai_interactions_user_created_at` | Histórico de IA por usuário. |
