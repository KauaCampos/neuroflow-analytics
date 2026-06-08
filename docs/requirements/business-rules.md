# Regras de Negócio

Este documento descreve as regras de negócio iniciais do NeuroFlow Analytics, identificadas com o prefixo **RN**.

| ID | Regra | Justificativa |
|---|---|---|
| RN-01 | Sessões de estudo devem possuir duração maior que zero. | Impede registros inválidos e distorções nos indicadores. |
| RN-02 | Usuários só podem visualizar, criar, alterar ou excluir seus próprios dados. | Garante privacidade e isolamento em ambiente SaaS. |
| RN-03 | Metas não podem possuir valores negativos. | Mantém consistência de cálculo e interpretação. |
| RN-04 | O streak só aumenta quando existe ao menos uma sessão válida registrada no dia. | Garante que consistência reflita atividade real. |
| RN-05 | Uma tarefa concluída deve registrar data de conclusão. | Permite cálculo de produtividade e histórico. |
| RN-06 | Uma tarefa atrasada é aquela com prazo vencido e status diferente de concluída ou cancelada. | Define critério objetivo para dashboard. |
| RN-07 | Uma sessão de estudo deve estar associada a uma matéria ativa ou historicamente existente. | Preserva rastreabilidade do estudo. |
| RN-08 | A exclusão de matéria não deve apagar sessões históricas já registradas. | Protege analytics histórico. |
| RN-09 | Metas devem possuir período de início e fim. | Permite cálculo de progresso por janela temporal. |
| RN-10 | O progresso de metas deve considerar apenas dados do usuário proprietário. | Evita mistura de dados entre contas. |
| RN-11 | Recomendações de IA devem ser baseadas em dados autorizados do próprio usuário. | Garante conformidade com privacidade e segurança. |
| RN-12 | Interações com IA devem registrar contexto mínimo para auditoria e melhoria do produto. | Apoia rastreabilidade e análise de qualidade. |
| RN-13 | O e-mail de usuário deve ser único. | Evita conflito de autenticação e identidade. |
| RN-14 | Uma sessão não pode possuir término anterior ao início. | Mantém consistência temporal. |
| RN-15 | Prioridades de tarefas devem estar dentro de valores controlados. | Evita inconsistência na ordenação e filtros. |
| RN-16 | O melhor streak histórico deve ser atualizado somente quando o streak atual superar o valor anterior. | Preserva métrica de recorde pessoal. |
| RN-17 | Dados de analytics devem considerar filtros de período de forma explícita. | Evita interpretações ambíguas em relatórios. |
| RN-18 | Contas inativas não devem conseguir registrar novos dados. | Permite controle operacional e administrativo futuro. |

## Observações

As regras de negócio devem ser implementadas preferencialmente na camada de serviço do backend, com validações complementares no frontend para melhorar a experiência do usuário. Validações no frontend não substituem as validações server-side.
