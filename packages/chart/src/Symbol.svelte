<script>
	// import { namedShapes } from '../lib/shape'
	import { swatch } from './swatch'

	export let cx = 0
	export let cy = 0
	export let size = 10
	export let fill = 'none'
	export let stroke = 'currentColor'
	export let thickness = 0.5

	export let name = 'circle'
	// export let shape = null

	$: x = cx - size / 2
	$: y = cy - size / 2

	$: d = $swatch.symbols[name](size)
	// typeof shape === 'function'
	// 	? shape(size)
	// 	: (shape || name) in namedShapes
	// 	? namedShapes[shape || name](size)
	// 	: namedShapes.circle(size)
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<path
	{d}
	{fill}
	{stroke}
	transform="translate({x},{y})"
	stroke-width={thickness}
	fill-rule="evenodd"
	on:click
	on:mouseover
	on:mouseleave
	on:focus
/>
