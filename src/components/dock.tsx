import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import { Download, GalleryHorizontalEnd, Home, Sparkles, Users, Workflow } from 'lucide-react'
import { useRef, type ElementType } from 'react'
import { cn } from '@/lib/utils'

const DOCK_ITEMS = [
  { href: '#inicio', label: 'Início', icon: Home },
  { href: '#como-funciona', label: 'Como funciona', icon: Workflow },
  { href: '#funcionalidades', label: 'Funcionalidades', icon: Sparkles },
  { href: '#telas', label: 'Telas', icon: GalleryHorizontalEnd },
  { href: '#equipe', label: 'Equipe', icon: Users },
  { href: '#como-rodar', label: 'Baixar o app', icon: Download, primary: true },
] as const

const BASE_SIZE = 44
const MAX_SIZE = 64
const DISTANCE = 140

function DockItem({
  href,
  label,
  icon: Icon,
  primary,
  mouseX,
}: {
  href: string
  label: string
  icon: ElementType
  primary?: boolean
  mouseX: MotionValue<number>
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const distance = useTransform(mouseX, (value) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return DISTANCE
    return value - (rect.left + rect.width / 2)
  })

  const sizeTarget = useTransform(distance, [-DISTANCE, 0, DISTANCE], [BASE_SIZE, MAX_SIZE, BASE_SIZE])
  const size = useSpring(sizeTarget, { mass: 0.15, stiffness: 180, damping: 14 })

  return (
    <motion.a
      ref={ref}
      href={href}
      aria-label={label}
      title={label}
      style={prefersReducedMotion ? undefined : { width: size, height: size }}
      className={cn(
        'group relative flex shrink-0 items-center justify-center rounded-full transition-colors',
        prefersReducedMotion && 'size-11',
        primary ? 'bg-primary text-primary-foreground' : 'bg-card text-foreground hover:bg-muted',
      )}
    >
      <Icon className="size-5" aria-hidden="true" />
      <span
        role="tooltip"
        className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs font-medium text-background opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        {label}
      </span>
    </motion.a>
  )
}

export function Dock() {
  const mouseX = useMotionValue(Infinity)

  return (
    <nav
      aria-label="Navegação rápida"
      onMouseMove={(event) => mouseX.set(event.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="fixed inset-x-0 bottom-5 z-50 mx-auto flex w-fit max-w-[calc(100%-2rem)] items-end gap-2 rounded-full border border-border bg-card/80 px-3 py-2 shadow-lg backdrop-blur"
    >
      {DOCK_ITEMS.map((item) => (
        <DockItem key={item.href} mouseX={mouseX} {...item} />
      ))}
    </nav>
  )
}
