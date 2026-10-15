import logo from '@/assets/logo.png'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'

const NAV_LINKS = [
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#funcionalidades', label: 'Funcionalidades' },
  { href: '#telas', label: 'Telas' },
  { href: '#equipe', label: 'Equipe' },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2 font-extrabold tracking-tight">
          <img src={logo} alt="" className="size-8 rounded-lg" aria-hidden="true" />
          <span>Fila Fácil</span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-6 text-sm font-medium md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-foreground/80 transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button size="sm" onClick={() => document.getElementById('como-rodar')?.scrollIntoView()}>
            Baixar app
          </Button>
        </div>
      </div>
    </header>
  )
}
