import cadastro from '@/assets/screens/cadastro.png'
import homeNotificacao from '@/assets/screens/home-notificacao.png'
import home from '@/assets/screens/home.png'
import login from '@/assets/screens/login.png'
import painelAtendente from '@/assets/screens/painel-atendente.png'
import { Reveal } from '@/components/motion/reveal'
import { GALLERY } from '@/lib/content'

const IMAGES: Record<string, string> = {
  home,
  homeNotificacao,
  login,
  cadastro,
  painelAtendente,
}

export function Galeria() {
  return (
    <section id="telas" aria-labelledby="telas-heading" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 id="telas-heading" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Conheça as telas do app
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Protótipos criados no Figma mostrando a jornada do cliente e o painel do atendente.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {GALLERY.map((shot, index) => (
            <Reveal key={shot.src} delay={(index % 5) * 0.06}>
              <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <img src={IMAGES[shot.src]} alt={shot.alt} className="w-full" loading="lazy" />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
