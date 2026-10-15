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
        className="pointer-events-none absolute -top-40 right-[-15%] size-[26rem] rounded-full opacity-10 blur-[120px] brand-gradient"
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

        <div className="relative mx-auto flex max-w-md items-center justify-center py-10" aria-hidden="true">
          <div className="absolute bottom-2 h-10 w-56 rounded-full bg-foreground/10 blur-2xl" />

          <motion.img
            src={home}
            alt=""
            className="w-56 rounded-[2rem] border border-border/60 shadow-xl sm:w-64"
            animate={
              prefersReducedMotion
                ? undefined
                : { y: [0, -16, 0, 8, 0], rotate: [0, -1.5, 0, 1, 0] }
            }
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', times: [0, 0.3, 0.5, 0.8, 1] }}
          />
          <motion.img
            src={homeNotificacao}
            alt=""
            className="absolute -right-4 -top-6 w-40 rounded-[1.5rem] border border-border/60 shadow-xl sm:w-48"
            initial={{ rotate: 6 }}
            animate={
              prefersReducedMotion
                ? undefined
                : { y: [0, 14, 0, -6, 0], rotate: [6, 3, 7, 5, 6] }
            }
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 0.6, times: [0, 0.3, 0.55, 0.8, 1] }}
          />
        </div>
      </div>
    </section>
  )
}
