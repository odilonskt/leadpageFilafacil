import carlos from '@/assets/personas/carlos.jpg'
import juliana from '@/assets/personas/juliana.jpg'
import mariana from '@/assets/personas/mariana.jpg'
import { Reveal } from '@/components/motion/reveal'
import { Card, CardContent } from '@/components/ui/card'
import { PERSONAS } from '@/lib/content'

const PERSONA_IMAGES: Record<string, string> = {
  mariana,
  carlos,
  juliana,
}

export function Personas() {
  return (
    <section id="personas" aria-labelledby="personas-heading" className="bg-muted/40 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 id="personas-heading" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Feito para pessoas reais
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            As personas do projeto representam os dois públicos do Fila Fácil: quem aguarda o atendimento e quem
            administra a fila.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PERSONAS.map((persona, index) => (
            <Reveal key={persona.name} delay={index * 0.1}>
              <Card className="h-full text-center">
                <CardContent className="flex flex-col items-center pt-6">
                  <img
                    src={PERSONA_IMAGES[persona.image]}
                    alt={`Foto ilustrativa de ${persona.name}`}
                    className="size-24 rounded-full border border-border object-cover"
                    loading="lazy"
                  />
                  <h3 className="mt-4 font-semibold">{persona.name}</h3>
                  <p className="text-xs font-medium uppercase tracking-wide text-primary">{persona.role}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{persona.summary}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
