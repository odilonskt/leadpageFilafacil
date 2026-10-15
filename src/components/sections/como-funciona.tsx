import { Reveal } from '@/components/motion/reveal'
import { HOW_IT_WORKS_CLIENT, HOW_IT_WORKS_ESTABLISHMENT } from '@/lib/content'

function Steps({ steps }: { steps: typeof HOW_IT_WORKS_CLIENT | typeof HOW_IT_WORKS_ESTABLISHMENT }) {
  return (
    <ol className="grid gap-6 sm:grid-cols-2">
      {steps.map((item, index) => (
        <Reveal key={item.step} delay={index * 0.08}>
          <li className="flex h-full gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <span
              aria-hidden="true"
              className="flex size-9 shrink-0 items-center justify-center rounded-full brand-gradient text-sm font-bold text-accent-foreground"
            >
              {item.step}
            </span>
            <div>
              <h4 className="font-semibold">{item.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
            </div>
          </li>
        </Reveal>
      ))}
    </ol>
  )
}

export function ComoFunciona() {
  return (
    <section id="como-funciona" aria-labelledby="como-funciona-heading" className="bg-muted/40 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 id="como-funciona-heading" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Como funciona
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Dois lados, um só fluxo: o cliente acompanha a fila de onde estiver, e o estabelecimento controla o
            atendimento e as ausências em tempo real.
          </p>
        </Reveal>

        <div className="mt-10 space-y-12">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">Para o cliente</h3>
            <Steps steps={HOW_IT_WORKS_CLIENT} />
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">Para o estabelecimento</h3>
            <Steps steps={HOW_IT_WORKS_ESTABLISHMENT} />
          </div>
        </div>
      </div>
    </section>
  )
}
