import logo from '@/assets/logo.png'
import { REPO_URL } from '@/lib/content'

export function Footer() {
  return (
    <footer className="border-t border-border px-4 pb-28 pt-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-muted-foreground sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-2 font-semibold text-foreground">
          <img src={logo} alt="" aria-hidden="true" className="size-6 rounded-md" />
          Fila Fácil
        </div>

        <div className="max-w-xl space-y-2">
          <p>
            Análise e Desenvolvimento de Sistemas — Desenvolvimento de uma Aplicação Móvel em um Ambiente de
            Negócio.
          </p>
          <p>
            MAISTER, David H. <em>The psychology of waiting lines</em>. In: CZEPIEL, J. A.; SOLOMON, M. R.;
            SURPRENANT, C. F. (org.). <em>The service encounter</em>. Lexington, MA: Lexington Books, 1985. p.
            113-123.
          </p>
          <a href={REPO_URL} className="font-medium text-primary hover:underline">
            Repositório do projeto no GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
