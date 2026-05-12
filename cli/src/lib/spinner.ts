import yoctoSpinner from 'yocto-spinner'

export interface SpinnerOptions {
  text: string
  color?: 'blue' | 'green' | 'yellow' | 'red' | 'cyan' | 'magenta' | 'white' | 'gray'
}

let spinnerDisabled = false

export function setSpinnerDisabled(disabled: boolean): void {
  spinnerDisabled = disabled
}

function isSpinnerEnabled(): boolean {
  if (spinnerDisabled) return false
  if (process.env.PR_SPINNER === 'false') return false
  if (process.env.CI === 'true') return false
  if (!process.stdout.isTTY) return false
  return true
}

export async function withSpinner<T>(options: SpinnerOptions, fn: () => Promise<T>): Promise<T> {
  if (!isSpinnerEnabled()) return fn()

  const spinner = yoctoSpinner({ text: options.text, color: options.color ?? 'blue' })
  spinner.start()
  try {
    const result = await fn()
    spinner.stop()
    return result
  } catch (err) {
    spinner.stop()
    throw err
  }
}
