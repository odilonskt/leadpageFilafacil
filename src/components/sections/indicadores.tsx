import { Reveal } from '@/components/motion/reveal'
import { Card, CardContent } from '@/components/ui/card'
import { PERFORMANCE_INDICATORS } from '@/lib/content'

export function Indicadores() {
  return (
    <section id="indicadores" aria-labelledby="indicadores-heading" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 id="indicadores-heading" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Indicadores de desempenho
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Métricas usadas para avaliar se a solução realmente reduz a espera e organiza o atendimento.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {PERFORMANCE_INDICATORS.map((indicator, index) => (
            <Reveal key={indicator.label} delay={(index % 5) * 0.06}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <h3 className="text-sm font-semibold text-primary">{indicator.label}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{indicator.description}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
