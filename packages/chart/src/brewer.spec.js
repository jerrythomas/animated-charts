import { describe, it, expect } from 'vitest'
import { get } from 'svelte/store'
import { swatch } from './swatch'
import { getFillPatterns } from './brewer'

describe('brewer', () => {
	const baseSwatch = get(swatch)
	it('should generate a set of patterns for given values', () => {
		let values = ['a', 'b', 'c', 'd']
		let result = getFillPatterns(values, baseSwatch)
		expect(result).toEqual({
			a: { color: 'gold', pattern: 'A' },
			b: { color: 'lavender', pattern: 'B' },
			c: { color: 'orange', pattern: 'C' },
			d: { color: 'sky', pattern: 'D' }
		})
	})
})
