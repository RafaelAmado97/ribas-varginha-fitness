import { createFileRoute } from "@tanstack/react-router";
import { Dumbbell, UserCheck, Swords, Activity, Star, MapPin, Clock, MessageCircle, Menu, X, Heart, TrendingUp, Users, Quote } from "lucide-react";
import { useState } from "react";
import hero from "@/assets/hero-gym.jpg";
import fight from "@/assets/fight.jpg";
import conditioning from "@/assets/conditioning.jpg";

const WA = "https://wa.me/5535998719850?text=" + encodeURIComponent("Olá! Quero agendar uma aula experimental na Ribas Family.");
const MAPS = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Academia Ribas Family, Av. Celina Ferreira Ottoni, 3875 - Padre Vitor, Varginha - MG");
const MAPS_EMBED = "https://www.google.com/maps?q=" + encodeURIComponent("Av. Celina Ferreira Ottoni, 3875 - Padre Vitor, Varginha - MG") + "&output=embed";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Academia Ribas Family | Treine com propósito em Varginha-MG" },
      { name: "description", content: "Musculação, personal trainer, lutas e condicionamento em um ambiente familiar em Varginha-MG. Agende sua aula experimental." },
      { property: "og:title", content: "Academia Ribas Family | Varginha-MG" },
      { property: "og:description", content: "Treine com propósito. Evolua todos os dias. Agende sua aula experimental pelo WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["Sobre", "#sobre"], ["Modalidades", "#modalidades"], ["Lutas", "#lutas"], ["Galeria", "#galeria"], ["Horários", "#horarios"], ["Localização", "#localizacao"],
];

function Btn({ href, children, ghost }: { href: string; children: React.ReactNode; ghost?: boolean }) {
  const ext = href.startsWith("http");
  return (
    <a href={href} target={ext ? "_blank" : undefined} rel={ext ? "noopener noreferrer" : undefined}
      className={ghost
        ? "inline-flex items-center justify-center gap-2 rounded-full border border-foreground/30 px-7 py-4 text-sm font-bold uppercase tracking-wider text-foreground transition hover:border-primary hover:text-primary"
        : "glow-lime inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-extrabold uppercase tracking-wider text-primary-foreground transition hover:scale-[1.03]"}>
      {children}
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-primary"><span className="h-px w-8 bg-primary" />{children}</p>;
}

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border bg-graphite/85 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <a href="#topo" className="font-display text-2xl">RIBAS <span className="text-primary">FAMILY</span></a>
          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map(([l, h]) => <a key={h} href={h} className="text-sm font-semibold text-muted-foreground transition hover:text-primary">{l}</a>)}
          </nav>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="hidden rounded-full bg-primary px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-primary-foreground lg:inline-flex">Aula experimental</a>
          <button aria-label="Menu" onClick={() => setOpen(!open)} className="lg:hidden">{open ? <X /> : <Menu />}</button>
        </div>
        {open && (
          <nav className="flex flex-col gap-1 border-t border-border px-5 py-4 lg:hidden">
            {nav.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="py-2 font-semibold">{l}</a>)}
            <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-2 rounded-full bg-primary py-3 text-center text-sm font-extrabold uppercase text-primary-foreground">Aula experimental</a>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="topo" className="relative isolate flex min-h-[92vh] items-center overflow-hidden">
        <img src={hero} alt="Atleta treinando levantamento terra (imagem ilustrativa)" width={1600} height={1008} className="absolute inset-0 -z-20 h-full w-full object-cover object-right" />
        <div className="hero-overlay absolute inset-0 -z-10" />
        <div className="mx-auto w-full max-w-7xl px-5 py-24">
          <div className="max-w-3xl animate-rise">
            <Eyebrow>Academia em Varginha-MG</Eyebrow>
            <h1 className="font-display text-6xl leading-[0.95] sm:text-7xl lg:text-8xl">Treine com propósito.<br /><span className="text-brasil">Evolua todos os dias.</span></h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">Um lugar para você se sentir em casa, ser acompanhado de perto e perceber sua evolução — no seu ritmo, com quem entende de treino.</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Btn href={WA}><MessageCircle className="h-5 w-5" />Quero fazer uma aula experimental</Btn>
              <Btn href="#sobre" ghost>Conheça a academia</Btn>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <div className="overflow-hidden border-y border-border bg-graphite py-4"><div className="animate-marquee flex w-max gap-10 font-display text-2xl text-foreground/15">{Array.from({length:2}).flatMap((_,k)=>["Força","Disciplina","Família","Combate","Evolução","Varginha","Respeito","Superação"].map(w=><span key={k+w}>{w} <span className="text-gold">✦</span></span>))}</div></div>
      <section className="bg-brasil text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 py-8 sm:grid-cols-3">
          <div className="flex items-center gap-3"><div className="flex">{[0,1,2,3,4].map(i => <Star key={i} className="h-5 w-5 fill-current" />)}</div><span className="font-display text-3xl">4,5/5</span></div>
          <div className="flex items-center gap-3"><Users className="h-6 w-6" /><span className="font-bold">Mais de 200 avaliações no perfil público</span></div>
          <div className="flex items-center gap-3"><MapPin className="h-6 w-6" /><span className="font-bold">Padre Vitor · Varginha-MG</span></div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="grid-lines py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Sobre a Ribas Family</Eyebrow>
            <h2 className="font-display text-5xl leading-none sm:text-6xl">Mais que academia.<br /><span className="text-primary">Uma família</span> que treina junto.</h2>
            <p className="mt-6 text-lg text-muted-foreground">Na Ribas Family, cada aluno é recebido pelo nome. Aqui o treino é levado a sério, mas o clima é leve, acolhedor e motivador — do iniciante a quem já treina há anos.</p>
          </div>
          <div className="grid gap-4">
            {[
              [Heart, "Ambiente familiar", "Um espaço onde você se sente bem-vindo, sem julgamentos, todos os dias."],
              [UserCheck, "Acompanhamento", "Orientação próxima para você treinar com segurança e confiança."],
              [TrendingUp, "Evolução", "Foco em constância e progresso real, passo a passo."],
            ].map(([I, t, d]) => {
              const Icon = I as typeof Heart;
              return (
                <div key={t as string} className="flex gap-5 rounded-2xl border border-border bg-card p-6 transition hover:border-primary/60">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary"><Icon /></div>
                  <div><h3 className="text-xl font-extrabold">{t as string}</h3><p className="mt-1 text-muted-foreground">{d as string}</p></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MODALIDADES */}
      <section id="modalidades" className="bg-graphite py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Eyebrow>O que você encontra</Eyebrow>
          <h2 className="font-display text-5xl sm:text-6xl">Escolha seu <span className="text-primary">caminho</span></h2>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [Dumbbell, "Musculação", "Força, saúde e estética com treinos orientados para o seu objetivo."],
              [UserCheck, "Personal Trainer", "Atenção individual para acelerar resultados com segurança."],
              [Swords, "Lutas", "Técnica, disciplina e condicionamento inspirados nos esportes de combate."],
              [Activity, "Condicionamento", "Mais fôlego, disposição e energia para o dia a dia."],
            ].map(([I, t, d], n) => {
              const Icon = I as typeof Heart;
              return (
                <div key={t as string} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-primary">
                  <span className="font-display absolute right-5 top-4 text-5xl text-foreground/5">0{n + 1}</span>
                  <Icon className="h-10 w-10 text-primary" />
                  <h3 className="font-display mt-8 text-3xl">{t as string}</h3>
                  <p className="mt-3 text-muted-foreground">{d as string}</p>
                  <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-sm font-bold uppercase tracking-wider text-primary">Saiba mais →</a>
                </div>
              );
            })}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">Consulte valores, disponibilidade e detalhes de cada modalidade pelo WhatsApp.</p>
        </div>
      </section>

      {/* LUTAS */}
      <section id="lutas" className="relative overflow-hidden py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <img src={fight} alt="Treino de boxe no saco de pancadas (imagem ilustrativa)" loading="lazy" width={1200} height={1200} className="aspect-square w-full rounded-3xl object-cover" />
            <div className="absolute -bottom-6 -right-4 bg-brasil rounded-2xl px-6 py-4 text-primary-foreground sm:-right-6">
              <p className="font-display text-2xl">DNA de combate</p>
            </div>
          </div>
          <div>
            <Eyebrow>Equipe Ribas</Eyebrow>
            <h2 className="font-display text-5xl leading-none sm:text-6xl">Uma família com <span className="text-brasil">história nos esportes de combate</span></h2>
            <p className="mt-6 text-lg text-muted-foreground">A equipe Ribas carrega uma trajetória ligada às lutas — disciplina, respeito e superação que fazem parte da cultura da casa.</p>
            <p className="mt-4 text-lg text-muted-foreground"><strong className="text-foreground">Amanda Ribas</strong>, lutadora do UFC nascida em Varginha e faixa-preta em jiu-jítsu e judô, começou nos tatames com o pai, o professor Marcelo Ribas. Uma história de dedicação, bandeira verde e amarela e muito orgulho mineiro que inspira quem treina aqui.</p>
            <p className="mt-6 border-l-2 border-primary pl-4 text-xs text-muted-foreground">Menção de caráter histórico e inspiracional. Não indica patrocínio, endosso ou presença atual da atleta na academia.</p>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="bg-graphite py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Eyebrow>Galeria</Eyebrow>
          <h2 className="font-display text-5xl sm:text-6xl">Energia que <span className="text-primary">contagia</span></h2>
          <div className="mt-14 grid gap-4 md:grid-cols-3 md:grid-rows-2">
            <div className="relative overflow-hidden rounded-2xl border-2 border-dashed border-primary/40 bg-card md:row-span-2">
              <div className="flex h-full min-h-80 flex-col items-center justify-center gap-3 p-8 text-center">
                <MapPin className="h-10 w-10 text-primary" />
                <p className="font-display text-2xl">Fachada Ribas Family</p>
                <p className="text-sm text-muted-foreground">Espaço reservado para a foto real da fachada da academia.</p>
              </div>
            </div>
            <figure className="relative overflow-hidden rounded-2xl md:col-span-2">
              <img src={hero} alt="Treino de força (imagem ilustrativa)" loading="lazy" width={1600} height={1008} className="h-72 w-full object-cover transition duration-700 hover:scale-105" />
            </figure>
            <figure className="overflow-hidden rounded-2xl"><img src={conditioning} alt="Treino com cordas (imagem ilustrativa)" loading="lazy" width={1200} height={1200} className="h-72 w-full object-cover transition duration-700 hover:scale-105" /></figure>
            <figure className="overflow-hidden rounded-2xl"><img src={fight} alt="Treino de luta (imagem ilustrativa)" loading="lazy" width={1200} height={1200} className="h-72 w-full object-cover transition duration-700 hover:scale-105" /></figure>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Imagens ilustrativas, exceto quando indicado como foto da academia.</p>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Eyebrow>O que os alunos destacam</Eyebrow>
          <h2 className="font-display text-5xl sm:text-6xl">Temas frequentes <span className="text-primary">nas avaliações</span></h2>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              ["Atendimento acolhedor", "Alunos costumam mencionar o clima familiar e a recepção atenciosa da equipe."],
              ["Profissionais atenciosos", "Elogios recorrentes à orientação e ao cuidado durante os treinos."],
              ["Ambiente motivador", "Um espaço que dá vontade de voltar, com energia boa todos os dias."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-8">
                <Quote className="h-8 w-8 text-primary" />
                <h3 className="mt-5 text-xl font-extrabold">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">Resumo geral baseado em temas de avaliações públicas, sem reprodução literal.</p>
        </div>
      </section>

      {/* HORÁRIOS + LOCAL */}
      <section id="horarios" className="bg-graphite py-28">
        <div id="localizacao" className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-10">
            <Clock className="h-10 w-10 text-primary" />
            <h2 className="font-display mt-6 text-5xl">Horários</h2>
            <ul className="mt-8 divide-y divide-border">
              {[["Segunda a sexta", "06h – 22h"], ["Sábado", "07h – 12h"], ["Domingo", "Fechado"]].map(([d, h]) => (
                <li key={d} className="flex justify-between py-4 text-lg"><span className="text-muted-foreground">{d}</span><span className="font-extrabold">{h}</span></li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted-foreground">Horários informativos e sujeitos a alteração. Confirme pelo WhatsApp.</p>
          </div>
          <div className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card">
            <iframe title="Mapa Ribas Family" src={MAPS_EMBED} loading="lazy" className="h-64 w-full grayscale invert-[.9]" />
            <div className="p-10">
              <h2 className="font-display text-5xl">Localização</h2>
              <p className="mt-4 text-lg text-muted-foreground">Av. Celina Ferreira Ottoni, 3875<br />Padre Vitor · Varginha-MG</p>
              <div className="mt-8"><Btn href={MAPS}><MapPin className="h-5 w-5" />Abrir no Google Maps</Btn></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-32">
        <div className="bg-brasil absolute inset-0 -z-10" />
        <div className="mx-auto max-w-4xl px-5 text-center text-primary-foreground">
          <h2 className="font-display text-5xl leading-none sm:text-7xl">Sua evolução começa com uma aula.</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg font-medium">Venha conhecer a Ribas Family. Fale com a gente e agende sua aula experimental.</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-full bg-graphite px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-foreground transition hover:scale-[1.03]">
            <MessageCircle className="h-5 w-5" />Chamar no WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-graphite py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-2xl">RIBAS <span className="text-primary">FAMILY</span></p>
            <p className="mt-1 text-sm text-muted-foreground">Av. Celina Ferreira Ottoni, 3875 - Padre Vitor, Varginha-MG</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="hover:text-primary">WhatsApp (35) 99871-9850</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Google Maps</a>
            <a href="#topo" className="hover:text-primary">Voltar ao topo ↑</a>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-7xl px-5 text-xs text-muted-foreground/60">© {new Date().getFullYear()} Academia Ribas Family · Protótipo demonstrativo</p>
      </footer>
    </div>
  );
}
