import { Link } from 'react-router-dom';
import { Brain, ChartNoAxesCombined, CheckCircle2, Target, Timer } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/ui/button';
const features = [
  [
    'Organização acadêmica',
    'Centralize matérias, tarefas, metas e sessões em uma experiência clara.',
    Brain,
  ],
  [
    'Dashboard inteligente',
    'Acompanhe horas estudadas, pendências, foco e evolução semanal.',
    ChartNoAxesCombined,
  ],
  [
    'Rotina consistente',
    'Use streaks e metas para transformar estudo em hábito mensurável.',
    Timer,
  ],
];
const benefits = [
  'Menos dispersão na rotina acadêmica',
  'Dados confiáveis para decidir o que estudar',
  'Base pronta para futuras recomendações com IA',
];
export function LandingPage() {
  return (
    <>
      <section className="container grid gap-12 py-20 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 font-semibold text-indigo-600">
            Produtividade acadêmica orientada por dados
          </p>
          <h1 className="text-5xl font-black tracking-tight md:text-6xl">
            Estude com clareza, consistência e visão de progresso.
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            O NeuroFlow Analytics ajuda estudantes a organizar matérias, registrar sessões e
            acompanhar indicadores essenciais em um SaaS moderno.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild size="lg">
              <Link to="/cadastro">Criar conta gratuita</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/login">Acessar plataforma</Link>
            </Button>
          </div>
        </div>
        <div className="rounded-[2rem] border bg-white p-6 shadow-2xl">
          <div className="grid gap-4">
            <div className="rounded-2xl bg-indigo-600 p-6 text-white">
              <p className="text-sm opacity-80">Horas estudadas na semana</p>
              <strong className="text-4xl">18h 40min</strong>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm text-muted-foreground">Tarefas concluídas</p>
                <strong className="text-2xl">12</strong>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm text-muted-foreground">Streak atual</p>
                <strong className="text-2xl">9 dias</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-16">
        <SectionHeading
          eyebrow="Recursos"
          title="Fundação para uma rotina acadêmica escalável"
          description="Componentes essenciais para o MVP e prontos para evoluir com analytics e IA."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map(([title, desc, Icon]) => (
            <article key={title as string} className="rounded-3xl border bg-white p-6 shadow-sm">
              <Icon className="h-10 w-10 text-indigo-600" />
              <h3 className="mt-5 text-xl font-bold">{title as string}</h3>
              <p className="mt-3 text-muted-foreground">{desc as string}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="container py-16">
        <div className="rounded-[2rem] bg-slate-950 p-10 text-white md:p-14">
          <SectionHeading
            eyebrow="Benefícios"
            title="Decisões melhores para cada semana de estudo"
            description="Transforme atividades acadêmicas em indicadores simples, acionáveis e seguros."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {benefits.map((b) => (
              <div className="flex gap-3" key={b}>
                <CheckCircle2 className="text-emerald-400" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container py-16 text-center">
        <Target className="mx-auto h-12 w-12 text-indigo-600" />
        <h2 className="mt-4 text-4xl font-bold">Pronto para construir sua rotina com dados?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Comece pelo essencial: organize, registre, acompanhe e evolua.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link to="/cadastro">Começar o MVP</Link>
        </Button>
      </section>
      <footer className="border-t bg-white py-8">
        <div className="container flex flex-col justify-between gap-3 text-sm text-muted-foreground md:flex-row">
          <span>© 2026 NeuroFlow Analytics.</span>
          <span>Produto acadêmico SaaS em evolução.</span>
        </div>
      </footer>
    </>
  );
}
