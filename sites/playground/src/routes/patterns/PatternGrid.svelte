<script>
	import { swatch, PatternDefs } from '@rokkit/chart'
	import { swatchGrid } from '$lib/grid'

	export let base = 'teal'
	export let fill = 100
	export let stroke = 500
	export let outline = 600

	$: patterns = $swatch.keys.pattern.map((id) => ({
		id: `${base}-${fill}-${id}`,
		path: $swatch.patterns[id],
		fill: $swatch.palette[base][fill],
		stroke: $swatch.palette[base][stroke]
	}))
	$: grid = swatchGrid(Object.keys($swatch.patterns).length, 100, 10)
</script>

<svg viewBox="0 0 {grid.width} {grid.height}">
	<PatternDefs {patterns} />
	{#each grid.data as { cx, cy, r }, index}
		<rect
			x={cx - r}
			y={cy - r}
			width={r * 2}
			height={r * 2}
			fill="url(#{patterns[index].id})"
			stroke={$swatch.palette[base][outline]}
		/>
	{/each}
</svg>
