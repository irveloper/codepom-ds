/**
 * Guards the class-name contract between components and stylesheets.
 *
 * - Every literal `pom-*` class a component emits must be styled in styles.css.
 * - Every template prefix (e.g. `pom-btn--${variant}`) must match at least one styled class.
 * - Theme files may only target classes that exist in styles.css (no orphan selectors).
 */
import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const root = join(__dirname, '..')
const read = (p: string) => readFileSync(join(root, p), 'utf8')

const cssClasses = (css: string) =>
  new Set([...css.replace(/\/\*[\s\S]*?\*\//g, '').matchAll(/\.(pom-[a-z0-9_-]+)/g)].map((m) => m[1]))

const styled = cssClasses(read('styles.css'))

const components: string[] = readdirSync(join(root, 'components')).filter((f: string) => f.endsWith('.tsx'))

describe('styles contract', () => {
  it.each(components)('%s only emits classes defined in styles.css', (file) => {
    const src = read(`components/${file}`)
    // Literal classes: not preceded by `-` (skips CSS vars like var(--pom-border)) or `$`.
    const literal = [...src.matchAll(/(?<![-\w$])(pom-[a-z0-9_-]*[a-z0-9])(?![a-z0-9_-]*\$\{)/g)].map((m) => m[1])
    // Template prefixes like `pom-btn--${...}` or `${prefix}__link` are checked by prefix.
    const prefixes = [...src.matchAll(/(?<![-\w])(pom-[a-z0-9_-]*?)\$\{/g)].map((m) => m[1])
    const suffixes = [...src.matchAll(/\$\{prefix\}(__[a-z0-9_-]+)/g)].map((m) => m[1])

    const missing = literal.filter((c) => !styled.has(c))
    const badPrefixes = prefixes.filter((p) => ![...styled].some((c) => c.startsWith(p)))
    const badSuffixes = suffixes.filter((s) => ![...styled].some((c) => c.endsWith(s)))

    expect({ missing, badPrefixes, badSuffixes }).toEqual({ missing: [], badPrefixes: [], badSuffixes: [] })
  })

  const themes: string[] = readdirSync(join(root, 'themes')).filter((f: string) => f.endsWith('.css'))
  it.each(themes)('themes/%s only targets classes defined in styles.css', (file) => {
    const orphans = [...cssClasses(read(`themes/${file}`))].filter((c) => !styled.has(c))
    expect(orphans).toEqual([])
  })
})
