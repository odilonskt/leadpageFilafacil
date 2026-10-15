import { Reveal } from '@/components/motion/reveal'
import { Card, CardContent } from '@/components/ui/card'
import { ADVISOR, TEAM } from '@/lib/content'

export function Equipe() {
  return (
    <section id="equipe" aria-labelledby="equipe-heading" className="bg-muted/40 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 id="equipe-heading" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Equipe do projeto
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Trabalho acadêmico desenvolvido para a disciplina de Desenvolvimento de uma Aplicação Móvel em um
            Ambiente de Negócio — curso de Análise e Desenvolvimento de Sistemas.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <CardContent className="pt-6">
                <h3 className="font-semibold">Integrantes</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {TEAM.map((member) => (
                    <li key={member}>{member}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="h-full">
              <CardContent className="pt-6">
                <h3 className="font-semibold">Orientador</h3>
                <p className="mt-3 text-sm text-muted-foreground">{ADVISOR}</p>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
