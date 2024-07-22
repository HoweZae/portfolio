<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<script>
	let src = 'static/test.jpg';
	let title = 'You\'re on your own, kid';
</script>

<img {src} alt="{title} lyrics" />