# Casos de Uso

Este documento descreve os principais casos de uso do NeuroFlow Analytics para o MVP e sua evolução.

## UC-01 — Cadastrar Usuário

| Campo | Descrição |
|---|---|
| Objetivo | Permitir que um estudante crie uma conta para utilizar a plataforma. |
| Ator | Estudante não autenticado. |
| Pré-condições | O e-mail informado não deve estar cadastrado. |
| Pós-condições | Conta criada e disponível para autenticação. |

### Fluxo Principal

1. O estudante acessa a tela de cadastro.
2. O estudante informa nome, e-mail e senha.
3. O sistema valida os dados informados.
4. O sistema cria a conta com senha protegida por hash.
5. O sistema confirma o cadastro.

## UC-02 — Realizar Login

| Campo | Descrição |
|---|---|
| Objetivo | Autenticar o estudante e permitir acesso às funcionalidades protegidas. |
| Ator | Estudante cadastrado. |
| Pré-condições | O usuário deve possuir conta ativa. |
| Pós-condições | JWT emitido e sessão iniciada no frontend. |

### Fluxo Principal

1. O estudante informa e-mail e senha.
2. O sistema valida as credenciais.
3. O sistema gera um token JWT.
4. O frontend armazena o token conforme estratégia segura definida.
5. O estudante é redirecionado ao dashboard.

## UC-03 — Cadastrar Matéria

| Campo | Descrição |
|---|---|
| Objetivo | Permitir que o estudante organize estudos por matéria. |
| Ator | Estudante autenticado. |
| Pré-condições | O usuário deve estar autenticado. |
| Pós-condições | Matéria criada e disponível para sessões, tarefas e metas. |

### Fluxo Principal

1. O estudante acessa a área de matérias.
2. O estudante informa nome, descrição opcional e cor.
3. O sistema valida os dados.
4. O sistema cria a matéria vinculada ao usuário.
5. A matéria passa a aparecer nas listas e filtros.

## UC-04 — Registrar Sessão de Estudo

| Campo | Descrição |
|---|---|
| Objetivo | Registrar uma atividade de estudo realizada pelo estudante. |
| Ator | Estudante autenticado. |
| Pré-condições | Deve existir ao menos uma matéria disponível. |
| Pós-condições | Sessão registrada, analytics atualizados e streak recalculado. |

### Fluxo Principal

1. O estudante acessa o formulário de sessão de estudo.
2. O estudante seleciona a matéria.
3. O estudante informa data, duração, tipo de estudo e observações opcionais.
4. O sistema valida duração e vínculo com o usuário.
5. O sistema salva a sessão.
6. O sistema atualiza métricas derivadas, metas e streak.

## UC-05 — Gerenciar Tarefa Acadêmica

| Campo | Descrição |
|---|---|
| Objetivo | Controlar atividades acadêmicas pendentes, em andamento ou concluídas. |
| Ator | Estudante autenticado. |
| Pré-condições | O usuário deve estar autenticado. |
| Pós-condições | Tarefa criada, atualizada, concluída ou removida conforme ação. |

### Fluxo Principal

1. O estudante acessa a área de tarefas.
2. O estudante cria uma tarefa com título, prazo, prioridade e matéria opcional.
3. O sistema salva a tarefa vinculada ao usuário.
4. O estudante altera status conforme evolução.
5. Ao concluir, o sistema registra a data de conclusão.

## UC-06 — Definir Meta de Estudo

| Campo | Descrição |
|---|---|
| Objetivo | Permitir que o estudante estabeleça metas mensuráveis. |
| Ator | Estudante autenticado. |
| Pré-condições | O usuário deve estar autenticado. |
| Pós-condições | Meta criada e monitorada pelo sistema. |

### Fluxo Principal

1. O estudante acessa a área de metas.
2. O estudante escolhe tipo, valor alvo e período.
3. O sistema valida que valores e datas são consistentes.
4. O sistema cria a meta.
5. O dashboard passa a exibir progresso da meta.

## UC-07 — Visualizar Dashboard

| Campo | Descrição |
|---|---|
| Objetivo | Apresentar uma visão consolidada da produtividade acadêmica. |
| Ator | Estudante autenticado. |
| Pré-condições | O usuário deve estar autenticado. |
| Pós-condições | Indicadores exibidos conforme dados disponíveis e filtros aplicados. |

### Fluxo Principal

1. O estudante acessa o dashboard.
2. O sistema busca sessões, tarefas, metas e streaks do usuário.
3. O sistema calcula indicadores do período selecionado.
4. O frontend apresenta cards, gráficos e listas resumidas.

## UC-08 — Receber Insight de IA

| Campo | Descrição |
|---|---|
| Objetivo | Gerar recomendações personalizadas para melhoria da rotina de estudos. |
| Ator | Estudante autenticado. |
| Pré-condições | Integração com OpenAI habilitada e dados suficientes para análise. |
| Pós-condições | Insight gerado, exibido e registrado para histórico. |

### Fluxo Principal

1. O estudante solicita análise inteligente.
2. O sistema coleta dados acadêmicos autorizados do usuário.
3. O backend monta um contexto seguro para a IA.
4. O sistema chama a OpenAI API.
5. O insight é retornado ao frontend.
6. A interação é registrada para auditoria e melhoria futura.
