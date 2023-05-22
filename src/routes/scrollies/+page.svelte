<script>
	import data from './scrollies.json';
	import Item from '../../lib/home/Item.svelte';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	// Tags
	let tags = [...new Set(data.flatMap((item) => item.tech))];
	let selectedTag = 999;
	let selectedTagName = tags[selectedTag];
	$: selectedTagName = tags[selectedTag];

	// ListBox
	let valueMultiple = [];

	// Text Search
	let search = '';

	// Visible scrollies
	$: visibleScrollies = data.filter((item) => {
		if ((valueMultiple.length === 0) & (search === '')) return true;
		else if ((valueMultiple.length === 0) & (search !== ''))
			return item.name.toLowerCase().includes(search.toLowerCase());
		else if ((valueMultiple.length !== 0) & (search === '')) {
			return valueMultiple.some((tag) => item.tech.includes(tag));
		} else {
			return (
				valueMultiple.some((tag) => item.tech.includes(tag)) &&
				item.name.toLowerCase().includes(search.toLowerCase())
			);
		}
	});

	function handleRemoveFilter() {
		selectedTag = 999;
	}
</script>

<div class="container topRow">
	<input
		class="input"
		bind:value={search}
		title="Input (text)"
		type="text"
		placeholder="search ... "
	/>
</div>

<div class="container">
	<div class="sidebar">
		<div class="card">
			<header class="card-header text-center text-2xl font-bold">Categories</header>
			<section class="p-4">
				<ListBox multiple>
					{#each tags as tag, i}
						<ListBoxItem bind:group={valueMultiple} name="medium" value={tag}>{tag}</ListBoxItem>
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

<style>
	.topRow {
		padding: 1rem;
		flex-direction: column;
	}

	.container {
		display: flex;
		padding-left: 10%;
		padding-right: 10%;
	}
	.sidebar {
		width: 200px;

		right: 0;
		height: 100%;

		padding: 10px;
		box-sizing: border-box;
	}
	.content {
		width: calc(100% - 200px);
		padding: 10px;
	}
</style>
