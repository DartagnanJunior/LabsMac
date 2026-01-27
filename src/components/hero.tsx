"use client"

import { useState } from "react"
import { twMerge } from "tailwind-merge"
import type { ComponentProps } from "react"
import { ArrowRight, Menu, X } from "lucide-react"

export interface HeroProps extends ComponentProps<"section"> {}

export function Hero({ className, ...props }: HeroProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <section
      data-slot="hero"
      className={twMerge(
        "relative overflow-hidden bg-foreground text-background",
        className
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -bottom-40 right-[-10%] h-96 w-96 rounded-full bg-chart-2/30 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-background/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-background/10 to-transparent" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col px-6 pb-16 pt-6 md:min-h-screen md:pb-20">
        <nav
          data-slot="hero-nav"
          className="flex items-center justify-between gap-6 border-b border-background/10 pb-4"
        >
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-background/80">
            LabsMac
          </div>
          <div className="hidden items-center gap-8 text-sm text-background/70 md:flex">
            <a className="transition-colors hover:text-background" href="#laboratorio">
              Laboratório
            </a>
            <a className="transition-colors hover:text-background" href="#linhas">
              Linhas de pesquisa
            </a>
            <a className="transition-colors hover:text-background" href="#servicos">
              Serviços
            </a>
            <a className="transition-colors hover:text-background" href="#contato">
              Contato
            </a>
          </div>
          <div className="flex items-center gap-3">
            <button
              data-slot="hero-nav-toggle"
              type="button"
              aria-label="Abrir menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex items-center justify-center rounded-lg border border-background/20 bg-background/5 p-2 text-background transition-colors hover:border-background/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
            >
              {isMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
            <a
              data-slot="hero-nav-secondary"
              className="hidden items-center justify-center rounded-lg border border-background/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-background/80 transition-colors hover:border-background/40 hover:text-background md:inline-flex"
              href="#projetos"
            >
              Projetos
            </a>
            <a
              data-slot="hero-nav-primary"
              className="hidden items-center justify-center rounded-lg bg-background px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-foreground transition-colors hover:bg-background/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:inline-flex"
              href="#contato"
            >
              Agendar visita
            </a>
          </div>
        </nav>
        {isMenuOpen ? (
          <div
            data-slot="hero-nav-mobile"
            className="mt-3 flex flex-col gap-4 rounded-2xl border border-background/10 bg-background/5 p-4 text-sm text-background/80 md:hidden"
          >
            <a className="transition-colors hover:text-background" href="#laboratorio">
              Laboratório
            </a>
            <a className="transition-colors hover:text-background" href="#linhas">
              Linhas de pesquisa
            </a>
            <a className="transition-colors hover:text-background" href="#servicos">
              Serviços
            </a>
            <a className="transition-colors hover:text-background" href="#contato">
              Contato
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <a
                data-slot="hero-nav-mobile-secondary"
                className="inline-flex items-center justify-center rounded-lg border border-background/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-background/80 transition-colors hover:border-background/40 hover:text-background"
                href="#projetos"
              >
                Projetos
              </a>
              <a
                data-slot="hero-nav-mobile-primary"
                className="inline-flex items-center justify-center rounded-lg bg-background px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-foreground transition-colors hover:bg-background/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                href="#contato"
              >
                Agendar visita
              </a>
            </div>
          </div>
        ) : null}

        <div className="grid flex-1 items-start gap-10 pt-6 md:items-center md:gap-12 md:pt-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-8">
            <div className="flex w-fit items-center gap-2 rounded-full border border-background/20 bg-background/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-background/70">
              Laboratório de Ciência e Materiais
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="text-4xl font-semibold leading-[1.1] text-background sm:text-5xl lg:text-6xl">
                Inovação em materiais com ciência aplicada e impacto real.
              </h1>
              <p className="max-w-xl text-base leading-7 text-background/70 sm:text-lg">
                Integramos pesquisa, ensaios e desenvolvimento para apoiar
                indústrias e universidades. Da caracterização ao protótipo,
                entregamos dados confiáveis para decisões estratégicas.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                data-slot="hero-primary"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:bg-background/90"
                href="#contato"
              >
                Solicitar análise
                <ArrowRight className="size-4" />
              </a>
              <a
                data-slot="hero-secondary"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-background/20 bg-background/5 px-5 py-3 text-sm font-semibold text-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:border-background/40"
                href="#servicos"
              >
                Ver serviços
              </a>
            </div>

            <div className="flex flex-wrap gap-3 text-xs font-medium text-background/60">
              <span className="rounded-full border border-background/15 bg-background/5 px-3 py-1">
                Microscopia e caracterização
              </span>
              <span className="rounded-full border border-background/15 bg-background/5 px-3 py-1">
                Materiais avançados
              </span>
              <span className="rounded-full border border-background/15 bg-background/5 px-3 py-1">
                Ensaios mecânicos e térmicos
              </span>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute -inset-8 rounded-full bg-gradient-to-tr from-primary/50 via-chart-2/30 to-transparent blur-3xl" />
            <div className="relative h-80 w-72 rounded-[2.5rem] border border-background/20 bg-gradient-to-br from-background/10 via-background/5 to-background/0 shadow-2xl sm:h-96 sm:w-80">
              <div className="absolute inset-3 rounded-[2.1rem] border border-background/20 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_60%)]" />
              <div className="absolute -right-4 top-10 h-32 w-32 rounded-2xl border border-background/20 bg-gradient-to-br from-chart-2/60 via-primary/60 to-transparent blur-[2px]" />
              <div className="absolute -left-6 bottom-10 h-24 w-40 rounded-2xl border border-background/10 bg-background/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
