<script>
	export let type = 'events';
</script>

<div class="mt-4 mb-8 text-xl brand-text-color-secondary">
	{#if type === 'events'}
		<em>All events published here are independent and have their own organisers. Regen Village is an
		independent initiative that informs about these events.</em>
	{/if}
	{#if type === 'speakers'}
		<em>All these people are guests of the individual events, which have their own organizers and
		have no direct connection to Regen Village.</em>
	{/if}
</div>
