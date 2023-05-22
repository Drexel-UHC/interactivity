<script>
	import data from '../../lib/catalog/scrollies.json';
	import Item from '../../lib/catalog/Item.svelte';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';

	// Tags
	let tags = [...new Set(data.flatMap((item) => item.tech))];

	// ListBox
	let selectedTags = [];

	// Text Search
	let search = '';

	// Visible scrollies
	$: visibleScrollies = data.filter((item) => {
		if ((selectedTags.length === 0) & (search === '')) return true;
		else if ((selectedTags.length === 0) & (search !== ''))
			return item.name.toLowerCase().includes(search.toLowerCase());
		else if ((selectedTags.length !== 0) & (search === '')) {
			return selectedTags.some((tag) => item.tech.includes(tag));
		} else {
			return (
				selectedTags.some((tag) => item.tech.includes(tag)) &&
				item.name.toLowerCase().includes(search.toLowerCase())
			);
		}
	});

	const handleTagRemove = (tag) => {
		selectedTags = selectedTags.filter((t) => t !== tag);
	};
</script>

<div class="global">
	<div class="topRow">
		<input
			class="input"
			bind:value={search}
			title="Input (text)"
			type="text"
			placeholder="search ... "
		/>
		<div class="chipRow">
			{#if selectedTags.length > 0}
				{#each selectedTags as tag}
					<span
						class="chip variant-soft"
						on:click={() => {
							handleTagRemove(tag);
						}}
						on:keypress
					>
						<span>{tag}</span>
						<span>|</span>
						<span>x</span>
					</span>
				{/each}
			{:else}
				<div class="emptyChip" />
			{/if}
		</div>
	</div>

	<div class="catalog">
		<div class="sidebar">
			<div class="card">
				<header class="card-header text-center text-2xl font-bold">Categories</header>
				<section class="p-4">
					<ListBox multiple>
						{#each tags as tag, i}
							<ListBoxItem bind:group={selectedTags} name="medium" value={tag}>{tag}</ListBoxItem>
						{/each}
					</ListBox>
				</section>
			</div>
		</div>

		<div class="content">
			<div style="padding-bottom: 20px;" />
			{#each visibleScrollies as item (item.id)}
				<Item {...item} />
			{/each}
		</div>
	</div>
</div>

<style>
	.global {
		display: flex;
		flex-direction: column;
		padding-left: 2%;
		padding-right: 2%;
	}

	.topRow {
		padding: 1rem;
		flex-direction: column;
		padding-left: 10%;
		padding-right: 10%;
	}
	.emptyChip {
		display: flex;
		flex-direction: row;
		height: 1.5rem;
	}
	.chipRow {
		display: flex;
		flex-direction: row;
		margin-top: 10px;
		height: 1.5rem;
	}
	.chip {
		width: min-content;
		margin-left: 10px;
	}

	.catalog {
		display: flex;
		padding-left: 4%;
		padding-right: 4%;
	}

	.sidebar {
		width: 200px;
		height: 100%;
		padding: 10px;
		margin-top: 10px;
	}
	.content {
		width: calc(100% - 200px);
		margin: 0px;
		padding-left: 10px;
	}
</style>
