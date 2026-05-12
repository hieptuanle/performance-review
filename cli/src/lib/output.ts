import chalk from 'chalk'
import type { Command } from 'commander'

export interface OutputOptions {
  json: boolean
  full: boolean
  raw: boolean
}

export function getOutputOptions(cmd: Command): OutputOptions {
  const opts = cmd.optsWithGlobals()
  return {
    json: Boolean(opts.json),
    full: Boolean(opts.full),
    raw: Boolean(opts.raw),
  }
}

function color(opts: OutputOptions, fn: (s: string) => string, s: string): string {
  return opts.raw ? s : fn(s)
}

function formatDate(iso?: string): string {
  if (!iso) return '-'
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toISOString().replace('T', ' ').slice(0, 19)
}

type ReviewResponseQuestion = {
  group?: string
  content?: string
  layout?: string
  okrs?: unknown[]
  mark?: number
  answer?: string
}

export type ReviewResponse = {
  _id?: string
  slug?: string
  reviewDepartment?: string
  revieweeCode?: string
  revieweeName?: string
  revieweeDepartment?: string
  anonymous?: boolean
  reviewType?: number
  reviewerName?: string
  reviewerCode?: string
  positions?: string[]
  questions?: ReviewResponseQuestion[]
  createdAt?: string
  updatedAt?: string
}

function essentialFields(r: ReviewResponse): Record<string, unknown> {
  return {
    _id: r._id,
    slug: r.slug,
    reviewType: r.reviewType,
    revieweeCode: r.revieweeCode,
    revieweeName: r.revieweeName,
    reviewerCode: r.reviewerCode,
    reviewerName: r.reviewerName,
    anonymous: r.anonymous,
    questionCount: r.questions?.length ?? 0,
    createdAt: r.createdAt,
    updatedAt: r.updatedAt,
  }
}

export function outputItem<T extends ReviewResponse>(item: T, opts: OutputOptions): void {
  if (opts.json) {
    console.log(JSON.stringify(opts.full ? item : essentialFields(item), null, 2))
    return
  }
  printReviewResponse(item, opts)
}

export function outputList<T extends ReviewResponse>(items: T[], opts: OutputOptions): void {
  if (opts.json) {
    console.log(JSON.stringify(opts.full ? items : items.map(essentialFields), null, 2))
    return
  }
  if (items.length === 0) {
    console.log(color(opts, chalk.dim, '(no review responses)'))
    return
  }
  for (const it of items) {
    const id = it._id ?? '-'
    const slug = it.slug ?? '-'
    const reviewee = `${it.revieweeName ?? '-'} (${it.revieweeCode ?? '-'})`
    const reviewer = `${it.reviewerName ?? '-'} (${it.reviewerCode ?? '-'})`
    const anon = it.anonymous ? color(opts, chalk.yellow, ' [anon]') : ''
    const created = formatDate(it.createdAt)
    console.log(
      `${color(opts, chalk.gray, created)}  ${color(opts, chalk.cyan, id)}  ${color(
        opts,
        chalk.bold,
        slug,
      )}${anon}`,
    )
    console.log(`  reviewee: ${reviewee}   reviewer: ${reviewer}`)
  }
}

function printReviewResponse(r: ReviewResponse, opts: OutputOptions): void {
  const line = (k: string, v: unknown) =>
    `${color(opts, chalk.bold, k.padEnd(18))}${v ?? '-'}`
  console.log(line('_id', r._id))
  console.log(line('slug', r.slug))
  console.log(line('reviewType', r.reviewType))
  console.log(line('reviewDepartment', r.reviewDepartment))
  console.log(line('reviewee', `${r.revieweeName ?? '-'} (${r.revieweeCode ?? '-'})`))
  console.log(line('revieweeDept', r.revieweeDepartment))
  console.log(line('reviewer', `${r.reviewerName ?? '-'} (${r.reviewerCode ?? '-'})`))
  console.log(line('anonymous', r.anonymous ? 'yes' : 'no'))
  console.log(line('positions', (r.positions ?? []).join(', ') || '-'))
  console.log(line('createdAt', formatDate(r.createdAt)))
  console.log(line('updatedAt', formatDate(r.updatedAt)))
  const questions = r.questions ?? []
  console.log(line('questions', `${questions.length} total`))
  for (const [i, q] of questions.entries()) {
    const header = `  [${i + 1}] ${q.group ?? '-'} / ${q.layout ?? '-'}`
    console.log(color(opts, chalk.gray, header))
    if (q.content) console.log(`      ${q.content}`)
    if (q.mark !== undefined) console.log(`      mark: ${q.mark}`)
    if (q.answer) console.log(`      answer: ${q.answer}`)
    if (q.okrs && q.okrs.length) console.log(`      okrs: ${q.okrs.length} entries`)
  }
}

export function outputSummary(summary: Record<string, number>, opts: OutputOptions): void {
  if (opts.json) {
    console.log(JSON.stringify(summary, null, 2))
    return
  }
  const entries = Object.entries(summary)
  if (entries.length === 0) {
    console.log(color(opts, chalk.dim, '(no completed responses)'))
    return
  }
  for (const [slug, count] of entries.sort((a, b) => b[1] - a[1])) {
    console.log(`${color(opts, chalk.cyan, slug.padEnd(40))} ${count}`)
  }
}
