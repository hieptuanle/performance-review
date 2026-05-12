import chalk from 'chalk'
import type { Command } from 'commander'
import {
  clearConfig,
  getBaseUrl,
  getUserIdSource,
  saveBaseUrl,
  saveConfig,
} from '../lib/auth.js'

export function registerAuthCommand(program: Command): void {
  const auth = program.command('auth').description('Manage authentication')

  auth
    .command('login <userId>')
    .description('Save user id (Mongo ObjectId, sent as x-user-id header)')
    .option('--base-url <url>', 'Override base URL')
    .action((userId: string, opts: { baseUrl?: string }) => {
      saveConfig(userId, opts.baseUrl)
      console.log(chalk.green('Saved.'))
      console.log(`base_url: ${getBaseUrl()}`)
      console.log(`user_id:  ${userId}`)
    })

  auth
    .command('status')
    .description('Show current auth state')
    .action(() => {
      const source = getUserIdSource()
      console.log(`base_url: ${getBaseUrl()}`)
      if (source === 'env') {
        console.log(`user_id:  ${chalk.yellow('(from PR_USER_ID env var)')}`)
      } else if (source === 'config') {
        console.log(`user_id:  ${chalk.green('(from config file)')}`)
      } else {
        console.log(`user_id:  ${chalk.red('(not set)')}`)
      }
    })

  auth
    .command('set-url <url>')
    .description('Set base URL (keeps existing user id)')
    .action((url: string) => {
      saveBaseUrl(url)
      console.log(chalk.green('Saved.'))
      console.log(`base_url: ${getBaseUrl()}`)
    })

  auth
    .command('logout')
    .description('Remove saved config')
    .action(() => {
      clearConfig()
      console.log(chalk.green('Logged out.'))
    })
}
