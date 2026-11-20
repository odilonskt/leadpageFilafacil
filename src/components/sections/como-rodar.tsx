import { Reveal } from '@/components/motion/reveal'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { APK_URL } from '@/lib/content'

const STEPS = [
  'Baixe o arquivo fila-facil.apk pelo botão abaixo (se vier compactado em .zip, extraia antes).',
  'No Android, abra o arquivo e permita "Instalar apps de fontes desconhecidas" quando o sistema pedir.',
  'Abra o Fila Fácil e entre com um dos usuários de teste.',
]

export function ComoRodar() {
  return (
    <section id="como-rodar" aria-labelledby="como-rodar-heading" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 id="como-rodar-heading" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Baixe o Fila Fácil
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            O app está disponível para Android. Baixe o APK e instale em poucos passos.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="mt-8">
            <CardContent className="space-y-4 pt-6">
              <ol className="list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
                {STEPS.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>

              <div className="rounded-xl border border-border bg-muted/50 p-4 text-sm">
                <p className="font-semibold">Usuários de teste</p>
                <p className="mt-1 text-muted-foreground">admin@filafacil.com / admin123</p>
                <p className="text-muted-foreground">cliente@filafacil.com / cliente123</p>
              </div>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8">
            <a href={APK_URL} download className={buttonVariants({ size: 'lg' })}>
              Baixar APK (Android)
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
