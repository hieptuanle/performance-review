#!/usr/bin/env node
import { Command } from 'commander'
import { registerAuthCommand } from './commands/auth.js'
import { registerReviewResponseCommand } from './commands/review-response.js'
import { setSpinnerDisabled } from './lib/spinner.js'

const program = new Command()

program
  .name('fhd-360')
  .version('0.1.0')
  .description('CLI client for performance-review backend')
  .option('--json', 'Emit JSON output (essential fields)')
  .option('--full', 'With --json, emit all fields')
  .option('--raw', 'Plain text without colors')
  .option('--no-spinner', 'Disable loading animations')
  .hook('preAction', (thisCommand) => {
    const opts = thisCommand.opts<{ json?: boolean; raw?: boolean; spinner?: boolean }>()
    if (opts.json || opts.raw || opts.spinner === false) {
      setSpinnerDisabled(true)
    }
  })
  .addHelpText(
    'after',
    `
Auth:
  Backend reads x-user-id (Mongo ObjectId) from the request header.
  Run: fhd-360 auth login <userId> [--base-url http://localhost:3667]
  Env overrides: PR_USER_ID, PR_URL

Output modes:
  Default:       colored human-readable
  --json:        pretty-printed JSON (essential fields)
  --json --full: pretty-printed JSON (all fields)
  --raw:         plain text without colors
`,
  )

registerAuthCommand(program)
registerReviewResponseCommand(program)

program.parseAsync().catch((err: Error) => {
  console.error(err.message)
  process.exit(1)
})
