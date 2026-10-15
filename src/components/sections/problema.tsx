import { Reveal } from '@/components/motion/reveal'
import { Card, CardContent } from '@/components/ui/card'

const PROBLEMS = [
  {
    title: 'Espera presencial excessiva',
    description:
      'Clientes precisam permanecer fisicamente no local durante todo o período de espera, mesmo quando o atendimento ainda está distante.',
  },
  {
    title: 'Aglomeração e desorganização',
    description:
      'Recepções lotadas geram desconforto, ambientes estressantes e prejudicam a percepção de qualidade do atendimento.',
  },
  {
    title: 'Faltas sem controle',
    description:
      'Sistemas de fila sem restrições sofrem com alto índice de no-show: clientes retiram senha e não comparecem, prejudicando os demais.',
  },
]

export function Problema() {
  return (
    <section id="problema" aria-labelledby="problema-heading" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 id="problema-heading" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            O problema das filas presenciais
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Segundo a teoria das filas aplicada à experiência do consumidor, o tempo de espera não ocupado tende a
            parecer mais longo que o tempo ocupado (MAISTER, 1985). O Fila Fácil nasce para reduzir essa percepção
            negativa e organizar o atendimento.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PROBLEMS.map((problem, index) => (
            <Reveal key={problem.title} delay={index * 0.1}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold">{problem.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{problem.description}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
