import { useEffect, useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function NavbarDefault() {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)

  const links = useMemo(
    () => [
      { href: "#home", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#skills", label: "Skills" },
      { href: "#projects", label: "Projects" },
      { href: "#contact", label: "Contact" },
    ],
    []
  )

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (isDark) root.classList.add("dark")
    else root.classList.remove("dark")
  }, [isDark])

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 py-3">
      <nav
        className={`relative w-full max-w-6xl rounded-2xl border border-white/10 bg-white/60 backdrop-blur-xl transition-all dark:border-white/10 dark:bg-neutral-900/60 ${
          isScrolled ? "shadow-xl ring-1 ring-black/5 dark:ring-white/5" : ""
        }`}
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
          <a href="#home" className="group inline-flex items-center gap-2">
            <span className="inline-grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-500 via-pink-500 to-rose-500 text-white shadow-md">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-95">
                <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-lg font-extrabold tracking-tight text-transparent dark:from-white dark:via-neutral-200 dark:to-white">
              Aniket
            </span>
            <span className="ml-1 hidden text-sm text-neutral-600 transition-colors group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-white sm:inline">
              • Developer
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <NavItem key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </NavItem>
            ))}

            <a
              href="#contact"
              className="ml-2 inline-flex items-center rounded-xl border border-black/5 bg-gradient-to-r from-gray-900 to-black px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:translate-y-[-1px] hover:shadow-md active:translate-y-0 dark:border-white/10"
            >
              <span>Hire Me</span>
            </a>

            <button
              onClick={() => setIsDark((d) => !d)}
              aria-label="Toggle theme"
              className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/5 bg-white/70 text-neutral-900 shadow-sm transition hover:bg-white dark:border-white/10 dark:bg-neutral-800 dark:text-white"
            >
              <ThemeIcon isDark={isDark} />
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsDark((d) => !d)}
              aria-label="Toggle theme"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/5 bg-white/70 text-neutral-900 shadow-sm transition hover:bg-white dark:border-white/10 dark:bg-neutral-800 dark:text-white"
            >
              <ThemeIcon isDark={isDark} />
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/5 bg-white/70 text-neutral-900 shadow-sm transition hover:bg-white dark:border-white/10 dark:bg-neutral-800 dark:text-white"
            >
              <BurgerIcon open={open} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
              className="overflow-hidden border-t border-white/10 bg-white/70 px-4 pb-4 pt-2 dark:bg-neutral-900/70 sm:px-6"
            >
              <div className="flex flex-col gap-2 py-2">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group inline-flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-neutral-700 transition hover:bg-white hover:shadow-sm dark:text-neutral-200 dark:hover:bg-neutral-800"
                  >
                    <span>{link.label}</span>
                    <span className="opacity-0 transition-opacity group-hover:opacity-100">→</span>
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-1 inline-flex items-center justify-center rounded-xl border border-black/5 bg-gradient-to-r from-gray-900 to-black px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:translate-y-[-1px] hover:shadow-md active:translate-y-0 dark:border-white/10"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/40 to-transparent" />
      </nav>
    </header>
  )
}

function NavItem({ href, children, onClick }) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const handle = () => setActive(location.hash === href)
    handle()
    window.addEventListener("hashchange", handle)
    return () => window.removeEventListener("hashchange", handle)
  }, [href])

  return (
    <a
      href={href}
      onClick={onClick}
      className="group relative inline-flex items-center rounded-xl px-3 py-2 text-sm font-medium text-neutral-700 transition hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
    >
      <span>{children}</span>
      <span
        className={`absolute inset-x-2 -bottom-0.5 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-fuchsia-500 via-pink-500 to-rose-500 transition-transform duration-300 ease-out group-hover:scale-x-100 ${
          active ? "scale-x-100" : ""
        }`}
      />
    </a>
  )
}

function BurgerIcon({ open }) {
  return (
    <span className="relative block h-4 w-5">
      <span
        className={`absolute left-0 top-0 h-[2px] w-full rounded-full bg-current transition-transform duration-300 ${
          open ? "translate-y-[7px] rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-current transition-opacity duration-300 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-current transition-transform duration-300 ${
          open ? "-translate-y-[7px] -rotate-45" : ""
        }`}
      />
    </span>
  )
}

function ThemeIcon({ isDark }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
      {isDark ? (
        <path
          fill="currentColor"
          d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-16a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm0 18a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Zm9-9a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1ZM5 12a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm12.657 7.071a1 1 0 0 1-1.414 0l-.707-.707a1 1 0 1 1 1.414-1.414l.707.707a1 1 0 0 1 0 1.414ZM7.05 6.343a1 1 0 0 1-1.414 0l-.707-.707A1 1 0 1 1 6.343 3.95l.707.707a1 1 0 0 1 0 1.414Zm10.607-2.121a1 1 0 0 1 0 1.414l-.707.707A1 1 0 1 1 15.536 4.93l.707-.707a1 1 0 0 1 1.414 0ZM4.93 15.536a1 1 0 0 1 0 1.414l-.707.707A1 1 0 1 1 2.808 16.243l.707-.707a1 1 0 0 1 1.414 0Z"
        />
      ) : (
        <path
          fill="currentColor"
          d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
        />
      )}
    </svg>
  )
}
