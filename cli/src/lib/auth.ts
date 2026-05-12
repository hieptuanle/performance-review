import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { homedir } from 'node:os'
import { join } from 'node:path'

interface Config {
  user_id?: string
  base_url?: string
}

const CONFIG_DIR = join(homedir(), '.config', 'performance-review-cli')
const CONFIG_PATH = join(CONFIG_DIR, 'config.json')
const DEFAULT_BASE_URL = 'http://localhost:3667'

function readConfig(): Config {
  if (!existsSync(CONFIG_PATH)) return {}
  try {
    return JSON.parse(readFileSync(CONFIG_PATH, 'utf-8'))
  } catch {
    return {}
  }
}

export function getUserId(): string {
  const envId = process.env.PR_USER_ID
  if (envId) return envId

  const config = readConfig()
  if (config.user_id) return config.user_id

  throw new Error('No user id found. Set PR_USER_ID env var or run: fhd-360 auth login <user-id>')
}

export function getBaseUrl(): string {
  const envUrl = process.env.PR_URL
  if (envUrl) return envUrl.replace(/\/$/, '')

  const config = readConfig()
  if (config.base_url) return config.base_url.replace(/\/$/, '')

  return DEFAULT_BASE_URL
}

export function getUserIdSource(): 'env' | 'config' | null {
  if (process.env.PR_USER_ID) return 'env'
  const config = readConfig()
  if (config.user_id) return 'config'
  return null
}

export function saveConfig(userId: string, baseUrl?: string): void {
  mkdirSync(CONFIG_DIR, { recursive: true })
  const existing = readConfig()
  const config: Config = {
    ...existing,
    user_id: userId,
  }
  if (baseUrl) {
    config.base_url = baseUrl.replace(/\/$/, '')
  }
  writeFileSync(CONFIG_PATH, `${JSON.stringify(config, null, 2)}\n`)
}

export function saveBaseUrl(baseUrl: string): void {
  mkdirSync(CONFIG_DIR, { recursive: true })
  const existing = readConfig()
  const config: Config = {
    ...existing,
    base_url: baseUrl.replace(/\/$/, ''),
  }
  writeFileSync(CONFIG_PATH, `${JSON.stringify(config, null, 2)}\n`)
}

export function clearConfig(): void {
  if (existsSync(CONFIG_PATH)) {
    rmSync(CONFIG_PATH)
  }
}
