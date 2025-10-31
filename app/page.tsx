import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Atom,
  FlaskConical,
  GraduationCap,
  Leaf,
  Microscope,
  Sparkles,
  Users,
  Zap
} from "lucide-react";
import Link from "next/link";

/**
 * Render the LabSMaC homepage composed of hero, services, collaboration CTA, and latest publications sections.
 *
 * This component uses in-file mock data for `services` and `recentArticles` to populate the services grid and article cards.
 * It builds a responsive, interactive layout with CTA links for navigation.
 *
 * @returns A JSX element containing the complete homepage UI (hero, services, collaboration CTA, and latest articles).
 */
export default function Home() {
  // Mock data for articles - replace with real data laterß
  const recentArticles = [
    {
      id: 1,
      title: "Síntese Verde de Nanopartículas Magnéticas para Aplicações Biomédicas",
      authors: "Silva, A. et al.",
      journal: "Materials Science Journal",
      year: 2024,
      link: "#"
    },
    {
      id: 2,
      title: "Hidroxiapatita com Propriedades Controladas para Sistemas de Liberação de Fármacos",
      authors: "Santos, B. et al.",
      journal: "Biomaterials Research",
      year: 2024,
      link: "#"
    },
    {
      id: 3,
      title: "Utilização de Resíduos de Rochas Ornamentais na Produção de Biocombustíveis",
      authors: "Costa, C. et al.",
      journal: "Sustainable Energy Journal",
      year: 2023,
      link: "#"
    },
  ];

  const services = [
    {
      icon: FlaskConical,
      title: "Síntese por Combustão",
      description: "Planta piloto para síntese por combustão em escala laboratorial e piloto com capacidade de produzir até 60 kg/mês de pós cerâmicos pelo processo patenteado de reação de combustão (BR 10 2012 002181-346)."
    },
    {
      icon: Microscope,
      title: "Caracterização de Materiais",
      description: "FTIR, DRX, analisadores de área superficial, analisadores de tamanho de partícula, cromatógrafos a gás e VSM para análise completa de materiais."
    },
    {
      icon: Atom,
      title: "Nanopartículas e Biomateriais",
      description: "Desenvolvimento de materiais avançados incluindo síntese verde de nanopartículas, sistemas de liberação controlada de fármacos e materiais para engenharia de tecidos."
    },
    {
      icon: Leaf,
      title: "Tecnologias Sustentáveis",
      description: "Pesquisa em síntese verde, aproveitamento de resíduos de rochas ornamentais e óleos vegetais para produção de biocombustíveis e economia circular."
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-14 lg:py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-8">

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-fade-in-up">
              <span className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                LabSMaC
              </span>
            </h1>

            <p className="text-2xl md:text-3xl font-light text-foreground animate-fade-in-up delay-100">
              Laboratório de Síntese de Materiais Cerâmicos
            </p>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Liderando pesquisa e inovação em materiais avançados, com foco em
              aplicações biomédicas, biotecnológicas e biocombustíveis na UFCG.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-fade-in-up delay-300">
              <Button
                size="lg"
                className="group hover:scale-105 transition-transform shadow-lg hover:shadow-xl bg-primary text-primary-foreground"
                asChild
              >
                <Link href="/services" className="flex items-center gap-2">
                  Explorar Serviços
                  <Zap className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                asChild
              >
                <Link href="/contact">Entre em Contato</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-10 lg:py-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50 bg-card/50 backdrop-blur-sm"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <CardHeader className="relative">
                    <div className="w-14 h-14 bg-linear-to-br from-primary to-accent/80 rounded-xl flex items-center justify-center text-primary-foreground mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <Icon className="w-7 h-7" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <CardDescription className="text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Oferecemos infraestrutura completa para síntese, processamento e caracterização de materiais cerâmicos com tecnologia de ponta
            </p>
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="group border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all shadow-lg hover:shadow-xl"
              asChild
            >
              <Link href="/services" className="flex items-center gap-2">
                Ver Todos os Serviços
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-10 lg:py-14 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-linear-to-r from-primary via-primary/90 to-accent rounded-3xl p-12 lg:p-16 text-primary-foreground text-center shadow-2xl">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-72 h-72 bg-secondary rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20 mb-6">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">Colaboração Científica</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Pronto para Colaborar?
              </h2>
              <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-95 leading-relaxed">
                Junte-se a nós no avanço da pesquisa em materiais cerâmicos. Entre em contato para discutir
                seu projeto ou necessidades de pesquisa e explore as possibilidades de colaboração.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
                  asChild
                >
                  <Link href="/contact" className="text-lg px-8">
                    Entre em Contato
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                  asChild
                >
                  <Link href="/about" className="text-lg px-8">
                    Conheça Nossa Equipe
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="relative py-10 lg:py-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3">
                Últimas Publicações
              </h2>
              <p className="text-lg text-muted-foreground">
                Mantenha-se atualizado com nossas descobertas mais recentes
              </p>
            </div>
            <Button
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all shadow-lg hover:shadow-xl"
              asChild
            >
              <Link href="/articles">Ver Todos os Artigos</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentArticles.map((article) => (
              <Card
                key={article.id}
                className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50 bg-card/80 backdrop-blur-sm"
              >
                {/* Decorative gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-accent to-secondary"></div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardHeader className="relative pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {article.year}
                    </Badge>
                    <Microscope className="w-5 h-5 text-primary/60 group-hover:text-primary group-hover:rotate-12 transition-all" />
                  </div>
                  <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-3">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Users className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                      <CardDescription className="text-sm">
                        {article.authors}
                      </CardDescription>
                    </div>
                    <div className="flex items-start gap-2">
                      <GraduationCap className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                      <CardDescription className="text-sm">
                        {article.journal}
                      </CardDescription>
                    </div>
                  </div>
                  <Link
                    href={article.link}
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 font-medium text-sm transition-all group-hover:underline"
                  >
                    Leia mais
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}