<script>
	const patternUnits = 'userSpaceOnUse'

	export let id
	export let path
	export let thickness = 0.5
	export let size = 10
</script>

<pattern id="p-{id}" {patternUnits} width={100} height={100}>
	<rect x="0" y="0" width={size} height={size} fill="white" opacity="0.5" />
	<path d={path} fill="none" stroke="white" stroke-width={thickness} />
</pattern>
<mask {id}>
	<rect x="0" y="0" width="100%" height="100%" fill="url(#p-{id})" />
</mask>
