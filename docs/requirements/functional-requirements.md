# Requisitos Funcionais

Este documento descreve os requisitos funcionais iniciais do NeuroFlow Analytics. Os requisitos estão numerados com o prefixo **RF** para rastreabilidade durante análise, implementação e testes.

## Lista de Requisitos

| ID | Requisito | Prioridade | Versão Planejada |
|---|---|---|---|
| RF-01 | Cadastro de usuário | Alta | MVP |
| RF-02 | Login e autenticação | Alta | MVP |
| RF-03 | Gerenciamento de matérias | Alta | MVP |
| RF-04 | Registro de sessões de estudo | Alta | MVP |
| RF-05 | Gestão de tarefas | Alta | MVP |
| RF-06 | Dashboard inicial | Alta | MVP |
| RF-07 | Analytics acadêmico | Média | MVP/V2 |
| RF-08 | Definição e acompanhamento de metas | Alta | MVP |
| RF-09 | Streaks e gamificação básica | Média | MVP/V3 |
| RF-10 | IA para recomendações | Média | V2 |
| RF-11 | Histórico de produtividade | Média | MVP |
| RF-12 | Configurações de perfil | Baixa | V2 |

## RF-01 — Cadastro de Usuário

O sistema deve permitir que novos estudantes criem uma conta informando dados essenciais para identificação e autenticação.

### Dados previstos

- nome;
- e-mail;
- senha;
- data de criação;
- status da conta.

### Critérios funcionais

- O e-mail deve ser único na plataforma.
- A senha deve ser armazenada de forma segura por meio de hash.
- Após cadastro válido, o usuário deve poder autenticar-se no sistema.
- Contas futuras poderão suportar verificação de e-mail.

## RF-02 — Login e Autenticação

O sistema deve permitir autenticação de usuários cadastrados por meio de e-mail e senha.

### Critérios funcionais

- O login deve retornar um token JWT válido.
- O token deve ser usado para acesso às rotas protegidas.
- Credenciais inválidas devem retornar erro apropriado sem expor informações sensíveis.
- O sistema deve permitir logout no frontend por descarte do token.

## RF-03 — Gerenciamento de Matérias

O sistema deve permitir que o usuário cadastre, visualize, edite e remova matérias de estudo.

### Dados previstos

- nome da matéria;
- descrição opcional;
- cor ou identificador visual;
- data de criação;
- status ativo/inativo.

### Critérios funcionais

- Cada matéria deve pertencer a um único usuário.
- Matérias removidas não devem afetar indevidamente históricos já registrados.
- O sistema deve permitir filtrar sessões e tarefas por matéria.

## RF-04 — Registro de Sessões de Estudo

O sistema deve permitir que o estudante registre sessões de estudo associadas a uma matéria.

### Dados previstos

- matéria;
- data;
- horário de início;
- horário de término ou duração;
- observações;
- nível de foco percebido;
- tipo de estudo, como teoria, revisão, exercícios ou simulado.

### Critérios funcionais

- A duração deve ser maior que zero.
- A sessão deve ser vinculada ao usuário autenticado.
- Sessões devem alimentar dashboards, analytics, metas e streaks.

## RF-05 — Gestão de Tarefas

O sistema deve permitir criação, edição, conclusão e exclusão de tarefas acadêmicas.

### Dados previstos

- título;
- descrição;
- matéria relacionada;
- prazo;
- prioridade;
- status;
- data de conclusão.

### Critérios funcionais

- Tarefas podem estar pendentes, em andamento, concluídas ou canceladas.
- Tarefas atrasadas devem ser identificáveis no dashboard.
- O usuário deve visualizar apenas suas próprias tarefas.

## RF-06 — Dashboard Inicial

O sistema deve apresentar uma visão consolidada da rotina acadêmica do usuário.

### Indicadores mínimos

- total de horas estudadas no período;
- quantidade de sessões registradas;
- tarefas pendentes e atrasadas;
- metas em progresso;
- streak atual;
- distribuição de tempo por matéria.

## RF-07 — Analytics Acadêmico

O sistema deve gerar análises sobre comportamento de estudo e produtividade acadêmica.

### Métricas previstas

- tempo médio diário de estudo;
- evolução semanal e mensal;
- matérias mais e menos estudadas;
- taxa de conclusão de tarefas;
- comparação entre metas planejadas e realizadas.

## RF-08 — Definição e Acompanhamento de Metas

O sistema deve permitir que o usuário defina metas acadêmicas mensuráveis.

### Tipos iniciais

- horas de estudo por dia;
- horas de estudo por semana;
- sessões por semana;
- tarefas concluídas por período;
- foco em uma matéria específica.

### Critérios funcionais

- Metas devem possuir período de validade.
- O progresso deve ser calculado automaticamente a partir dos registros do usuário.
- Metas concluídas devem ser destacadas visualmente.

## RF-09 — Streaks e Gamificação Básica

O sistema deve acompanhar a consistência do usuário por meio de streaks de estudo.

### Critérios funcionais

- O streak deve aumentar quando houver pelo menos uma sessão válida no dia.
- O streak deve ser reiniciado quando um dia sem sessão válida for detectado.
- O dashboard deve exibir streak atual e melhor streak histórico.

## RF-10 — IA para Recomendações

O sistema deverá, em versão futura, gerar recomendações personalizadas por meio da OpenAI API.

### Recomendações previstas

- sugestão de prioridades para a semana;
- identificação de matérias negligenciadas;
- análise de risco de metas não cumpridas;
- recomendações para melhorar consistência;
- resumo semanal de produtividade.

## RF-11 — Histórico de Produtividade

O sistema deve permitir consulta ao histórico de sessões, tarefas, metas e indicadores por período.

### Critérios funcionais

- O usuário deve poder filtrar dados por data, matéria e tipo de atividade.
- O histórico deve apoiar geração de gráficos e relatórios.
- Registros históricos não devem ser apagados automaticamente.

## RF-12 — Configurações de Perfil

O sistema deverá permitir que o usuário atualize dados básicos de perfil e preferências.

### Preferências futuras

- carga horária alvo;
- dias preferenciais de estudo;
- fuso horário;
- idioma;
- preferências de notificação.
