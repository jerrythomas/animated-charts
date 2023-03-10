import { writable, get } from 'svelte/store'
import { palette } from './colors'
import { symbols } from './symbols'
import { patterns } from './patterns'

export const swatch = writable({
	palette,
	patterns,
	symbols,
	keys: {
		gray: ['gray'],
		color: Object.keys(palette).filter((name) => name !== 'gray'),
		symbol: Object.keys(symbols),
		pattern: Object.keys(patterns)
	}
})
