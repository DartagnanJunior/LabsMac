import Link from 'next/link'
import { HeroHeader } from '@/components/header'
import { Button } from '@/components/ui/button'
import { TestTube, Microscope, Activity, Heart, Droplet, FileCheck } from 'lucide-react'

const services = [
  {
    icon: TestTube,
    title: 'Análises de Sangue',
    description: 'Hemograma completo, glicemia, colesterol e triglicerídeos com resultados rápidos e precisos.',
  },
  {
    icon: Microscope,
    title: 'Análises Microbiológicas',
    description: 'Exames para identificação de bactérias, fungos e outros microorganismos.',
  },
  {
    icon: Activity,
    title: 'Exames Hormonais',
    description: 'Análise completa do perfil hormonal para diagnóstico preciso.',
  },
  {
    icon: Heart,
    title: 'Cardiologia',
    description: 'Exames cardiológicos especializados para prevenção e diagnóstico.',
  },
  {
    icon: Droplet,
    title: 'Sorologia',
    description: 'Testes sorológicos para diversas doenças com tecnologia avançada.',
  },
  {
    icon: FileCheck,
    title: 'Check-up Completo',
    description: 'Pacotes completos de exames para avaliação geral da saúde.',
  },
]

export default function ServicosPage() {
  return (
    <>
      <HeroHeader />
      <main className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-medium md:text-5xl lg:text-6xl">
              Nossos Serviços
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos uma ampla gama de análises clínicas com tecnologia de ponta e equipe especializada.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="mb-2 text-xl font-semibold">{service.title}</h2>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-16 text-center">
            <Button asChild size="lg">
              <Link href="/contato">
                Entre em Contato
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}

