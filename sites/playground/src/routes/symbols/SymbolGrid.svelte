<script>
	import { swatch, Symbol } from '@rokkit/chart'
	import { swatchGrid } from '$lib/grid'

	export let base = 'teal'
	export let size = 100
	export let shade = 500
	$: grid = swatchGrid(Object.keys($swatch.symbols).length, size, 10)
	$: console.log($swatch)
</script>

<svg viewBox="0 0 {grid.width} {grid.height}">
	{#each grid.data as { cx, cy, r }, index}
		<Symbol
			{cx}
			{cy}
			size={r * 2}
			name={$swatch.keys.symbol[index]}
			fill={$swatch.palette[base][shade]}
			stroke={$swatch.palette[base][shade]}
		/>
	{/each}
</svg>
