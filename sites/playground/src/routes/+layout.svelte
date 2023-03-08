<script>
	import { page } from '$app/stores'
	import 'uno.css'
	import '../app.css'

	let pages = [
		{ path: '/patterns', label: 'Patterns' },
		{ path: '/symbols', label: 'Symbols' },
		{ path: '/palette', label: 'Palette' },
		{ path: '/bar', label: 'Bar' }
	]
</script>

<header class="h-12 w-full bg-zinc-200 flex items-center justify-center">
	{#each pages as { path, label }}
		<a
			href={path}
			class="hover:underline text-zinc-500 text-xl py-4 px-2 cursor-pointer leading-loose"
			class:selected={path === $page.url.pathname}
		>
			{label}
		</a>
	{/each}
</header>
<main class="flex flex-grow overflow-scroll">
	<slot />
</main>

<style>
	.selected {
		color: rgb(250, 150, 150);
	}
</style>
