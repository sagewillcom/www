<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags'
	export let title: string
	export let description: string
	export let url: `https://${string}`
</script>

<MetaTags
	{title}
	{description}
	titleTemplate="%s | Clearstair"
	openGraph={{
		url,
		title,
		description,
		site_name: 'Clearstair'
	}}
	twitter={{
		handle: '@ArrigoLupori',
		site: '@ArrigoLupori',
		title,
		description
	}}
/>
