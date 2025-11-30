import Link from 'next/link'
import { HeroHeader } from '@/components/header'
import { Calendar, ArrowRight } from 'lucide-react'

const articles = [
  {
    id: 1,
    title: 'Como se preparar para um exame de sangue',
    description: 'Dicas importantes sobre jejum, horários e cuidados antes de realizar seus exames laboratoriais.',
    date: '15 de Janeiro, 2025',
    category: 'Preparação',
  },
  {
    id: 2,
    title: 'Entendendo seus resultados: Hemograma Completo',
    description: 'Aprenda a interpretar os principais valores do hemograma e o que cada parâmetro significa.',
    date: '10 de Janeiro, 2025',
    category: 'Educação',
  },
  {
    id: 3,
    title: 'A importância dos exames de rotina',
    description: 'Descubra por que os exames preventivos são fundamentais para manter sua saúde em dia.',
    date: '5 de Janeiro, 2025',
    category: 'Prevenção',
  },
  {
    id: 4,
    title: 'Diabetes: Sintomas e Diagnóstico',
    description: 'Conheça os principais sintomas da diabetes e como o diagnóstico precoce pode fazer a diferença.',
    date: '28 de Dezembro, 2024',
    category: 'Doenças',
  },
  {
    id: 5,
    title: 'Colesterol: Mito ou Verdade?',
    description: 'Desvendando os mitos sobre colesterol e a importância de manter os níveis adequados.',
    date: '20 de Dezembro, 2024',
    category: 'Educação',
  },
  {
    id: 6,
    title: 'Exames para gestantes: Guia Completo',
    description: 'Saiba quais exames são essenciais durante a gravidez para garantir a saúde da mãe e do bebê.',
    date: '15 de Dezembro, 2024',
    category: 'Saúde da Mulher',
  },
]

export default function ArtigosPage() {
  return (
    <>
      <HeroHeader />
      <main className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-medium md:text-5xl lg:text-6xl">
              Artigos e Notícias
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Informações e dicas sobre saúde, exames e cuidados preventivos.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.id}
                className="group rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {article.category}
                </span>
                <h2 className="mb-2 text-xl font-semibold group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="mb-4 text-muted-foreground">{article.description}</p>
                <Link
                  href={`/artigos/${article.id}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  Ler mais
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

