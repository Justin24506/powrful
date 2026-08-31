import type { useI18n } from 'vue-i18n'

import { formatChargingDuration } from '@/lib/format'

import { describe, expect, it, vi } from 'vitest'

type TranslateFn = ReturnType<typeof useI18n>['t']

const units: Record<string, string> = {
  'time.hour': 'h',
  'time.minute': 'm',
}

function makeTranslate(): TranslateFn {
  const fn = vi.fn((key: string, _count?: unknown) => units[key] ?? key)
  return fn as unknown as TranslateFn
}

describe('formatChargingDuration', () => {
  it('formats only minutes when under an hour', () => {
    const translate = makeTranslate()
    expect(formatChargingDuration(45 * 60, translate)).toBe('45m')
    expect(translate).toHaveBeenCalledWith('time.minute', 45)
  })

  it('formats hours and minutes', () => {
    const translate = makeTranslate()
    expect(formatChargingDuration(2 * 3600 + 30 * 60, translate)).toBe('2h 30m')
    expect(translate).toHaveBeenCalledWith('time.hour', 2)
    expect(translate).toHaveBeenCalledWith('time.minute', 30)
  })

  it('renders zero minutes for exactly whole hours', () => {
    const translate = makeTranslate()
    expect(formatChargingDuration(3 * 3600, translate)).toBe('3h 0m')
    expect(translate).toHaveBeenCalledWith('time.minute', 0)
  })

  it('handles zero', () => {
    const translate = makeTranslate()
    expect(formatChargingDuration(0, translate)).toBe('0m')
    expect(translate).toHaveBeenCalledWith('time.minute', 0)
  })
})
