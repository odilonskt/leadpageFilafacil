import { Reveal } from '@/components/motion/reveal'
import { Card, CardContent } from '@/components/ui/card'
import { FEATURES } from '@/lib/content'

export function Funcionalidades() {
  return (
    <section id="funcionalidades" aria-labelledby="funcionalidades-heading" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 id="funcionalidades-heading" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Funcionalidades principais
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Recursos pensados tanto para quem aguarda o atendimento quanto para quem administra a fila.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <Reveal key={feature.title} delay={(index % 4) * 0.08}>
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardContent className="pt-6">
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
