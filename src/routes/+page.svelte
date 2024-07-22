<script>
    import Body from './Body.svelte';

	let name = 'HoweZae';
    let svelteLogo = '/img/test.jpg';
    let song = "DBATC";

    let htmlLine = `<strong>Gave up on me like I was a bad drug</strong>`
</script>

<style>
	p {
		color: seagreen;
		font-family: 'Comic Sans MS', cursive;
		font-size: 1em;
	}
</style>

<h1>{ name.toUpperCase() } Homepage</h1>

<img src={svelteLogo} alt="{song} Lyrics" />

<p>My heart, my hips, my body, my love</p>
<Body />
<p>{@html htmlLine}</p>