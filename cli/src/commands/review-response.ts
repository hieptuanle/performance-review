import { readFileSync } from 'node:fs'
import { Command } from 'commander'
import { apiGet, apiPost } from '../lib/api.js'
import {
  getOutputOptions,
  outputItem,
  outputList,
  outputSummary,
  type ReviewResponse,
} from '../lib/output.js'

export function registerReviewResponseCommand(program: Command): void {
  const rr = program
    .command('review-responses')
    .alias('rr')
    .description('Manage review responses')

  rr.command('list')
    .description('List review responses (GET /v1/review-responses)')
    .option('--reviewee <code>', 'Filter by revieweeCode')
    .option('--manager <code>', 'Filter by managerCode')
    .option('--employee <code>', 'Filter by employeeCode')
    .action(async (opts: { reviewee?: string; manager?: string; employee?: string }, cmd: Command) => {
      const items = await apiGet<ReviewResponse[]>('/v1/review-responses', {
        revieweeCode: opts.reviewee,
        managerCode: opts.manager,
        employeeCode: opts.employee,
      })
      outputList(items, getOutputOptions(cmd))
    })

  rr.command('get <id>')
    .description('Get review response by mongo id')
    .action(async (id: string, _opts: object, cmd: Command) => {
      const item = await apiGet<ReviewResponse>(`/v1/review-responses/${id}`, undefined, 'GET /v1/review-responses/:id')
      outputItem(item, getOutputOptions(cmd))
    })

  rr.command('by-slug <slug>')
    .description('Get review response by slug')
    .action(async (slug: string, _opts: object, cmd: Command) => {
      const item = await apiGet<ReviewResponse>(
        `/v1/review-responses/by-slug/${encodeURIComponent(slug)}`,
        undefined,
        'GET /v1/review-responses/by-slug/:slug',
      )
      outputItem(item, getOutputOptions(cmd))
    })

  rr.command('summary')
    .description('Get completion summary by slug')
    .option('--reviewee <code>', 'Filter slugs by reviewee code prefix (e.g. E09)')
    .action(async (opts: { reviewee?: string }, cmd: Command) => {
      const summary = await apiGet<Record<string, number>>('/v1/review-responses/summary')
      const filtered = opts.reviewee
        ? Object.fromEntries(
            Object.entries(summary).filter(([slug]) =>
              slug.toLowerCase().startsWith(`${opts.reviewee!.toLowerCase()}-`),
            ),
          )
        : summary
      outputSummary(filtered, getOutputOptions(cmd))
    })

  rr.command('submit')
    .description('Submit a review response payload (upsert by slug)')
    .option('-f, --file <path>', 'JSON file containing the payload')
    .option('--data <json>', 'Inline JSON payload')
    .action(async (opts: { file?: string; data?: string }, cmd: Command) => {
      const raw = opts.file
        ? readFileSync(opts.file, 'utf-8')
        : opts.data
      if (!raw) throw new Error('Provide --file <path> or --data <json>')
      let body: unknown
      try {
        body = JSON.parse(raw)
      } catch (e) {
        throw new Error(`Invalid JSON payload: ${(e as Error).message}`)
      }
      const item = await apiPost<ReviewResponse>('/v1/review-responses', body as object)
      outputItem(item, getOutputOptions(cmd))
    })
}
