# Roadmap — MVP

## Objetivo do MVP

O MVP do NeuroFlow Analytics tem como objetivo validar a proposta central do produto: permitir que estudantes organizem sua rotina acadêmica, registrem atividades de estudo e acompanhem indicadores básicos de produtividade em um dashboard simples e confiável.

## Funcionalidades Obrigatórias

| Funcionalidade | Descrição | Resultado Esperado |
|---|---|---|
| Cadastro de usuário | Criação de conta com nome, e-mail e senha. | Usuário consegue acessar a plataforma. |
| Login com JWT | Autenticação segura para APIs privadas. | Sessão autenticada no frontend. |
| CRUD de matérias | Gerenciamento de disciplinas ou áreas de estudo. | Organização básica por matéria. |
| Registro de sessões | Cadastro de sessões com duração, data e matéria. | Base de dados para métricas. |
| Gestão de tarefas | Criação, atualização e conclusão de tarefas. | Controle de pendências acadêmicas. |
| Metas básicas | Definição de metas de horas ou tarefas. | Acompanhamento de progresso. |
| Dashboard inicial | Cards e gráficos simples. | Visão consolidada da produtividade. |
| Streak básico | Cálculo de dias consecutivos com estudo. | Estímulo à consistência. |
| Docker Compose | Ambiente local com serviços principais. | Desenvolvimento reprodutível. |

## Funcionalidades Fora do Escopo Inicial

| Funcionalidade | Motivo |
|---|---|
| Recomendações com IA | Depende de maturidade dos dados e refinamento de prompts. |
| Ranking entre usuários | Exige regras de privacidade, moderação e gamificação mais maduras. |
| Notificações automáticas | Requer configuração adicional de canais e preferências. |
| PWA | Pode ser implementado após estabilização da experiência web. |
| Assinaturas premium | Depende de validação de valor e estratégia comercial. |
| Integração com calendário | Recurso útil, mas não essencial para validação inicial. |

## Critérios de Sucesso

| Critério | Indicador |
|---|---|
| Registro recorrente de sessões | Usuários conseguem registrar estudos sem fricção. |
| Clareza do dashboard | Usuários entendem rapidamente horas estudadas, tarefas e metas. |
| Consistência de dados | Sessões, tarefas e metas geram indicadores corretos. |
| Segurança básica | Usuários acessam apenas seus próprios dados. |
| Ambiente reprodutível | Projeto executa localmente via Docker Compose. |
| Base evolutiva | Arquitetura suporta adição futura de IA e gamificação. |

## Entregáveis Técnicos do MVP

- Aplicação frontend com rotas protegidas.
- Backend com APIs REST documentáveis.
- Banco PostgreSQL com schema inicial.
- Autenticação e autorização com JWT.
- Testes automatizados para regras críticas.
- Documentação inicial do produto e arquitetura.
