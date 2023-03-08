<script>
	const patternUnits = 'userSpaceOnUse'

	export let id
	export let path
	export let thickness = 0.5
	export let size = 10
	export let fill = '#fbb0bc'
</script>

<pattern id="p-{id}" {patternUnits} width={size} height={size}>
	{#if path}
		<path d={path} {fill} stroke="white" stroke-width={thickness} />
	{:else}
		<rect width={size} height={size} {fill} />
	{/if}
</pattern>
<mask {id}>
	<rect x="0" y="0" width="100%" height="100%" fill="url(#p-{id})" />
</mask>
