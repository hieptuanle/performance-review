import { getBaseUrl, getUserId } from './auth.js'
import { type SpinnerOptions, withSpinner } from './spinner.js'

const API_SPINNER_CONFIG: Record<string, SpinnerOptions> = {
  'GET /v1/review-responses': { text: 'Loading review responses...', color: 'blue' },
  'GET /v1/review-responses/summary': { text: 'Loading summary...', color: 'blue' },
  'GET /v1/review-responses/by-slug/:slug': { text: 'Loading review response...', color: 'blue' },
  'GET /v1/review-responses/:id': { text: 'Loading review response...', color: 'blue' },
  'POST /v1/review-responses': { text: 'Submitting review response...', color: 'green' },
}

interface ApiError {
  message: string
}

async function rawRequest<T>(
  method: string,
  path: string,
  body?: object,
  query?: Record<string, string | string[] | undefined>,
): Promise<T> {
  const baseUrl = getBaseUrl()
  const userId = getUserId()

  const url = new URL(`${baseUrl}${path}`)
  if (query) {
    for (const [key, value] of Object.entries(query)) {
      if (value === undefined || value === '') continue
      const values = Array.isArray(value) ? value : [value]
      for (const v of values) {
        if (v !== undefined && v !== '') {
          url.searchParams.append(key, v)
        }
      }
    }
  }

  const headers: Record<string, string> = {
    'x-user-id': userId,
  }

  const options: RequestInit = { method, headers }

  if (body) {
    headers['Content-Type'] = 'application/json'
    options.body = JSON.stringify(body)
  }

  const res = await fetch(url.toString(), options)

  if (!res.ok) {
    let message = `API error: ${res.status} ${res.statusText}`
    try {
      const err = (await res.json()) as ApiError
      if (err.message) message = `API error: ${err.message}`
    } catch {}
    throw new Error(message)
  }

  return (await res.json()) as T
}

export async function apiGet<T>(
  path: string,
  query?: Record<string, string | string[] | undefined>,
  spinnerKey?: string,
): Promise<T> {
  const key = spinnerKey ?? `GET ${path}`
  const spinnerConfig = API_SPINNER_CONFIG[key] ?? {
    text: 'Loading...',
    color: 'blue' as const,
  }
  return withSpinner(spinnerConfig, () => rawRequest<T>('GET', path, undefined, query))
}

export async function apiPost<T>(path: string, body?: object, spinnerKey?: string): Promise<T> {
  const key = spinnerKey ?? `POST ${path}`
  const spinnerConfig = API_SPINNER_CONFIG[key] ?? {
    text: 'Sending...',
    color: 'green' as const,
  }
  return withSpinner(spinnerConfig, () => rawRequest<T>('POST', path, body))
}
