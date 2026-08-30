import type { useI18n } from 'vue-i18n'

import { formatChargingDuration } from '@/lib/format'

import { describe, expect, it } from 'vitest'

type TranslateFn = ReturnType<typeof useI18n>['t']

function t(key: string, _value?: unknown) {
  const units: Record<string, string> = {
    'time.hour': 'h',
    'time.minute': 'm',
  }
  return units[key] ?? key
}

const translate = t as unknown as TranslateFn

describe('formatChargingDuration', () => {
  it('formats only minutes when under an hour', () => {
    expect(formatChargingDuration(45 * 60, translate)).toBe('45m')
  })

  it('formats hours and minutes', () => {
    expect(formatChargingDuration(2 * 3600 + 30 * 60, translate)).toBe('2h 30m')
  })

  it('renders zero minutes for exactly whole hours', () => {
    expect(formatChargingDuration(3 * 3600, translate)).toBe('3h 0m')
  })

  it('handles zero', () => {
    expect(formatChargingDuration(0, translate)).toBe('0m')
  })
})
