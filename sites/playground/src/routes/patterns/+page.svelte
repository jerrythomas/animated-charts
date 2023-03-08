<script>
	import PatternGrid from './PatternGrid.svelte'
</script>

<div class="grid h-full w-full grid-cols-3 grid-rows-2 gap-0">
	<PatternGrid />
	<PatternGrid base="gray" />
	<PatternGrid base="sky" fill={500} stroke={100} outline={300} />
	<PatternGrid base="pink" fill={800} stroke={200} outline={300} />
</div>
