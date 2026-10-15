import { Reveal } from '@/components/motion/reveal'
import { Badge } from '@/components/ui/badge'
import { TECH_STACK } from '@/lib/content'

export function StackTecnica() {
  return (
    <section
      id="tecnologia"
      aria-labelledby="tecnologia-heading"
      className="bg-muted/40 px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 id="tecnologia-heading" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Stack tecnológica
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Construído como um app mobile real, com banco local, API simulada e integração externa.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-8 flex flex-wrap gap-3" aria-label="Tecnologias utilizadas no projeto">
            {TECH_STACK.map((tech) => (
              <li key={tech.label}>
                <Badge variant="outline" className="bg-card px-4 py-2 text-sm">
                  {tech.label}
                </Badge>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
