import { HeroHeader } from '@/components/header'
import { Award, Users, Target, Clock } from 'lucide-react'

const values = [
  {
    icon: Award,
    title: 'Excelência',
    description: 'Compromisso com a qualidade e precisão em todos os nossos exames.',
  },
  {
    icon: Users,
    title: 'Equipe Especializada',
    description: 'Profissionais altamente qualificados e em constante atualização.',
  },
  {
    icon: Target,
    title: 'Tecnologia Avançada',
    description: 'Equipamentos de última geração para resultados confiáveis.',
  },
  {
    icon: Clock,
    title: 'Agilidade',
    description: 'Resultados rápidos sem comprometer a qualidade dos exames.',
  },
]

export default function SobrePage() {
  return (
    <>
      <HeroHeader />
      <main className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-medium md:text-5xl lg:text-6xl">
              Sobre Nós
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Um laboratório dedicado à sua saúde desde 2010.
            </p>
          </div>

          <div className="mb-16 rounded-lg border bg-card p-8 md:p-12">
            <h2 className="mb-4 text-2xl font-semibold">Nossa História</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                O LabsMac foi fundado em 2010 com a missão de oferecer serviços de análises clínicas
                de alta qualidade, acessíveis e com resultados confiáveis. Ao longo dos anos, nos
                tornamos referência na região, investindo constantemente em tecnologia e capacitação
                de nossa equipe.
              </p>
              <p>
                Nosso compromisso é fornecer resultados precisos e rápidos, sempre priorizando o
                bem-estar e a saúde de nossos pacientes. Trabalhamos com equipamentos modernos e
                seguimos rigorosos protocolos de qualidade para garantir a confiabilidade de cada
                exame realizado.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </>
  )
}

