<script>
	import { swatch, PatternDefs } from '@rokkit/chart'
	import { swatchGrid } from '$lib/grid'

	export let shade = 500
	$: colors = [...$swatch.keys.color, 'gray']
	$: grid = swatchGrid(colors.length, 100, 10)
</script>

<svg viewBox="0 0 {grid.width} {grid.height}">
	{#each grid.data as { cx, cy, r }, index}
		<rect
			x={cx - r}
			y={cy - r}
			width={r * 2}
			height={r * 2}
			fill={$swatch.palette[colors[index]][shade]}
		/>
	{/each}
</svg>
