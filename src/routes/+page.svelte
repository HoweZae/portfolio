<script>
    import Body from './Body.svelte';

	let title = 'Svelte Testing Page';
    let svelteLogo = '/img/test.jpg';
    let song = "DBATC";

    let htmlLine = `<strong>Gave up on me like I was a bad drug</strong>`

    let count = [0];
    function increment() {
        count = [...count, count.length + 1]
    }

    /* REACTIVES */
    $: countActual = count.length;
    $: doubled = count.length * 2;
    $: console.log(`Count has changed to {count}`);
    $: if (count.length >= 10) {
        alert("Count is high; needs refreshing");
        count = [0];
    }
</script>

<style>
    h1 {
        font-family: 'Noteworthy'
    }
	p {
		color: seagreen;
		font-family: 'Microsoft Sans Serif';
		font-size: 1em;
	}
</style>

<h1>{ title.toUpperCase() }</h1>

<img src={svelteLogo} alt="{song} Lyrics" />

<p>My heart, my hips, my body, my love</p>
<Body />
<p>{@html htmlLine}</p>

<button on:click = {increment}>
    Now I'm searching for {countActual} {countActual === 1 ? 'sign' : 'signs'} in a haunted club (or {doubled} clubs)
</button>