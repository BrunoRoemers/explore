<script>
	import CollectionList from '$lib/components/CollectionList.svelte';
	import TimelineHeatmap from '$lib/components/TimelineHeatmap.svelte';
	import Disclaimer from '$lib/components/Disclaimer.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/stores';
	import { processItemsList } from '$lib/utils.js';
	import { base } from "$app/paths"

	export let data;
	$: conferences = data.bundle.events.filter((e) => {
		return e.types.find((t) => ['conference', 'hackathon'].includes(t)) && !e.hidden;
	});
	$: otherEvents = data.bundle.events.filter((e) => {
		return !e.types.find((t) => ['conference', 'hackathon'].includes(t)) && !e.hidden;
	});

	const speakers = processItemsList(data.bundle.speakers);

	const collections = [
		{ title: 'Days', value: 10, col: 'schedule' },
		{ title: 'Events', col: 'events', filter: (e) => !e.hidden },
		// { title: 'Speakers', col: 'speakers', value: speakers.length },
		{ title: 'Places', col: 'places' }
		// { title: 'Media Partners', col: 'media-partners' },
		// { title: "Blockchains", col: "chains" },
		// { title: "Unions", col: "unions" },
		// { title: 'Benefits', col: 'benefits' }
	];
</script>

<svelte:head>
	<title>Regen Village 2024</title>
</svelte:head>

<div class="w-full px-6 xl:mx-0">
	<div class="max-w-7xl mx-auto pt-2">
		<div class="flex flex-wrap gap-2 my-6 text-center text-lg">
			{#each collections as cd}
				<a href="{base}/{cd.col}">
					<button
						class="border rounded border-brand-green hover:bg-brand-green hover:text-white py-2 px-2 text-brand-green hover:shadow-lg"
					>
						{cd.value || data.bundle[cd.col]?.filter(cd.filter || ((e) => e)).length}
						{cd.title}
					</button>
				</a>
			{/each}
		</div>

		<TimelineHeatmap {data} />

		<h2 class="text-2xl uppercase font-bold brand-text-color-secondary">
			<a href="{base}/events">Conferences and Hackathons</a> ({conferences.length})
		</h2>
		<Disclaimer />
		<div
			class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 my-6 text-center text-2xl"
		>
			<CollectionList arr={conferences} img="logo" col="event" offer={true} />
		</div>
		<h2 class="text-2xl uppercase font-bold brand-text-color-secondary">
			<a href="{base}/events">Meetups, parties and other events</a> ({otherEvents.length})
		</h2>
		<div
			class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 my-6 text-center text-2xl"
		>
			<CollectionList arr={otherEvents} img="logo" col="event" />
		</div>

		<h2 class="text-2xl uppercase font-bold mt-10 brand-text-color-secondary">
			<a href="{base}/places">Places</a> ({data.bundle.places.length})
		</h2>
		<div
			class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 my-6 text-center text-2xl"
		>
			<CollectionList arr={data.bundle.places} col="place" img="photo" offer={true} />
		</div>
	</div>
</div>

<Footer bundle={data.bundle} />
