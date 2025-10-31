import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Atom,
  Beaker,
  FlaskConical,
  GraduationCap,
  Leaf,
  Microscope,
  Sparkles,
  TestTube,
  Users
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  // Mock data for articles - replace with real data later
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
      <section className="bg-gradient-to-br from-primary via-primary/90 to-accent text-primary-foreground py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              Bem-vindo ao LabSMaC
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90">
              Laboratório de Síntese de Materiais Cerâmicos e Caracterização de Materiais
            </p>
            <p className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto leading-relaxed">
              Liderando pesquisa e inovação em materiais avançados, com foco em
              aplicações biomédicas, biotecnológicas e biocombustíveis na UFCG.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/services">Explorar Serviços</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/contact">Entre em Contato</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nossos Serviços
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Oferecemos infraestrutura completa para síntese, processamento e caracterização de materiais cerâmicos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                      <Icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
              <Link href="/services">Ver Todos os Serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary via-primary/90 to-accent rounded-2xl p-12 text-primary-foreground text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pronto para Colaborar?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Junte-se a nós no avanço da pesquisa em materiais cerâmicos. Entre em contato para discutir
              seu projeto ou necessidades de pesquisa.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Entre em Contato</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                Últimas Publicações
              </h2>
              <p className="text-muted-foreground">
                Mantenha-se atualizado com nossas descobertas mais recentes
              </p>
            </div>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
              <Link href="/articles">Ver Todos os Artigos</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">
                    {article.year}
                  </div>
                  <CardTitle className="text-xl leading-tight">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    <span className="font-semibold">Autores:</span> {article.authors}
                  </CardDescription>
                  <CardDescription className="mb-4">
                    <span className="font-semibold">Revista:</span> {article.journal}
                  </CardDescription>
                  <Link
                    href={article.link}
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Leia mais →
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