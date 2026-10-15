import logo from '@/assets/logo.png'
import { ThemeToggle } from '@/components/theme-toggle'

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-background/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2 font-semibold tracking-tight">
          <img src={logo} alt="" className="size-7" aria-hidden="true" />
          <span>Fila Fácil</span>
        </a>

        <ThemeToggle />
      </div>
    </header>
  )
}
