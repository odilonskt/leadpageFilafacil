import { Reveal } from '@/components/motion/reveal'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { REPO_URL } from '@/lib/content'

const STEPS = [
  { command: 'npm run setup', description: 'primeira vez: instala tudo' },
  { command: 'npm run dev', description: 'sobe o JSON Server (porta 3334) e o app Expo (QR code) via Nx' },
]

export function ComoRodar() {
  return (
    <section id="como-rodar" aria-labelledby="como-rodar-heading" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 id="como-rodar-heading" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Como baixar e rodar o Fila Fácil
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            O app ainda está em desenvolvimento acadêmico e roda via Expo. Para testar agora, clone o repositório e
            siga os passos abaixo.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="mt-8">
            <CardContent className="space-y-4 pt-6">
              {STEPS.map((step) => (
                <div key={step.command} className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
                  <code className="w-fit rounded-md bg-muted px-3 py-1.5 font-mono text-sm text-foreground">
                    {step.command}
                  </code>
                  <span className="text-sm text-muted-foreground">{step.description}</span>
                </div>
              ))}

              <p className="pt-2 text-sm text-muted-foreground">
                Abra o <strong>Expo Go</strong> no celular (mesma Wi-Fi) e escaneie o QR code, ou aperte{' '}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono">w</code> para abrir no navegador.
              </p>

              <div className="rounded-xl border border-border bg-muted/50 p-4 text-sm">
                <p className="font-semibold">Usuários de teste</p>
                <p className="mt-1 text-muted-foreground">admin@filafacil.com / admin123</p>
                <p className="text-muted-foreground">cliente@filafacil.com / cliente123</p>
              </div>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={REPO_URL}
              {...(REPO_URL.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
              className={buttonVariants({ size: 'lg' })}
            >
              Ver repositório no GitHub
            </a>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Guia completo de configuração, WSL e problemas comuns: <code>COMO_RODAR.md</code> no repositório.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
