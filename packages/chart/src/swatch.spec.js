import { describe, it, expect } from 'vitest'
import { get } from 'svelte/store'
import { swatch } from './swatch'

describe('Swatch Store', () => {
	const { patterns, symbols, palette, keys } = get(swatch)

	it('should contain a swatch object', () => {
		expect(Object.keys(get(swatch))).toEqual([
			'palette',
			'patterns',
			'symbols',
			'keys'
		])
	})

	describe('symbols', () => {
		it('should contain a set of symbols', () => {
			expect(Object.keys(symbols)).toMatchSnapshot()
			expect(Object.keys(symbols)).toEqual(keys.symbol)
		})

		it.each(Object.keys(symbols))(
			'value for %s should be a function',
			(name) => {
				expect(typeof symbols[name]).toEqual('function')
			}
		)
		it.each(Object.keys(symbols))(
			'function for %s should generate different paths for different sizes',
			(name) => {
				expect(symbols[name](10)).toMatchSnapshot()
				expect(symbols[name](20)).toMatchSnapshot()
			}
		)
	})

	describe('patterns', () => {
		it('should contain a set of patterns', () => {
			const alphabets = Array.from({ length: 26 }).map((_, i) =>
				String.fromCharCode(i + 65)
			)
			expect(Object.keys(patterns)).toEqual([...alphabets, 'Z1'])
			expect(Object.keys(patterns)).toEqual(keys.pattern)
		})
		it.each(Object.keys(patterns))(
			'pattern for %s should match snapshot',
			(name) => {
				expect(patterns[name]).toMatchSnapshot()
			}
		)
	})

	describe('palette', () => {
		it('should contain a set of palettes', () => {
			expect(Object.keys(palette)).toMatchSnapshot()
			expect(keys.gray).toEqual(['gray'])
		})
	})
})
