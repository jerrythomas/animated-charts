<script>
	import Texture from './Texture.svelte'
	const size = 10

	export let thickness = 0.5
	export let patterns = []
</script>

<defs>
	{#each patterns as { id, path, fill, stroke }}
		<Texture {id} {path} {fill} {stroke} {thickness} {size} />
	{/each}
</defs>
