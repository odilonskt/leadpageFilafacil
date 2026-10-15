import homeNotificacao from '@/assets/screens/home-notificacao.png'
import home from '@/assets/screens/home.png'
import { Reveal } from '@/components/motion/reveal'
import { Button } from '@/components/ui/button'
import { motion, useReducedMotion } from 'framer-motion'

export function Hero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="inicio"
      aria-label="Apresentação do Fila Fácil"
      className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pt-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] size-[28rem] rounded-full opacity-20 blur-3xl brand-gradient"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">
            Gerenciamento de filas virtuais
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Chega de esperar <span className="brand-gradient-text">em pé</span> na fila
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            O Fila Fácil deixa você retirar uma senha virtual, acompanhar sua posição em tempo real e chegar ao
            estabelecimento só quando for a sua vez — sem perder tempo parado em uma recepção lotada.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" onClick={() => document.getElementById('como-rodar')?.scrollIntoView()}>
              Baixar o app
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('como-funciona')?.scrollIntoView()}
            >
              Ver como funciona
            </Button>
          </div>
        </Reveal>

        <div className="relative mx-auto flex max-w-md items-center justify-center" aria-hidden="true">
          <motion.img
            src={home}
            alt=""
            className="w-56 rounded-[2rem] border border-border shadow-2xl sm:w-64"
            animate={prefersReducedMotion ? undefined : { y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.img
            src={homeNotificacao}
            alt=""
            className="absolute -right-4 -top-6 w-40 rotate-6 rounded-[1.5rem] border border-border shadow-2xl sm:w-48"
            animate={prefersReducedMotion ? undefined : { y: [0, 12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          />
        </div>
      </div>
    </section>
  )
}
