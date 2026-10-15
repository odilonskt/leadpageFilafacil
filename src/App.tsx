import { Dock } from '@/components/dock'
import { Navbar } from '@/components/navbar'
import { ComoFunciona } from '@/components/sections/como-funciona'
import { ComoRodar } from '@/components/sections/como-rodar'
import { Equipe } from '@/components/sections/equipe'
import { Footer } from '@/components/sections/footer'
import { Funcionalidades } from '@/components/sections/funcionalidades'
import { Galeria } from '@/components/sections/galeria'
import { Hero } from '@/components/sections/hero'
import { Indicadores } from '@/components/sections/indicadores'
import { Personas } from '@/components/sections/personas'
import { Problema } from '@/components/sections/problema'
import { StackTecnica } from '@/components/sections/stack-tecnica'
import { ThemeProvider } from '@/components/theme-provider'

function App() {
  return (
    <ThemeProvider>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <Problema />
        <ComoFunciona />
        <Funcionalidades />
        <Personas />
        <Galeria />
        <StackTecnica />
        <Indicadores />
        <Equipe />
        <ComoRodar />
      </main>
      <Footer />
      <Dock />
    </ThemeProvider>
  )
}

export default App
