<script>
	export let author;
	export let date;
	export let name;
	export let desc;
	export let tech;
	export let path;
	export let img_path;
</script>

<div class="card p-4">
	<div class="row">
		<div class="column column-left">
			{date}
			<br />
			{author}
		</div>

		<div class="column column-center">
			<div class="content">
				<div class="content-row title"><a href={path}>{name}</a></div>
				<div class="content-row tech-row">
					{#each tech as techItem}
						<div class="tech-chip">
							{techItem}
						</div>
					{/each}
				</div>
				<div {desc} class="content-row">{desc}</div>
			</div>
		</div>
		<div class="column column-right">
			<img src={img_path} alt={`${name} logo`} />
		</div>
	</div>
</div>

<style>
	a {
		color: inherit;
		text-decoration: none;
	}

	.card {
		margin-bottom: 5px;
	}
	.row {
		display: flex;
		justify-content: space-between;
		padding: 10px;
	}

	.column {
		padding: 3px;
	}
	.column-left {
		flex-basis: 20%;
	}

	.column-center {
		flex-basis: 60%;
	}

	.column-right {
		flex-basis: 20%;
		display: flex;
		justify-content: center;
	}

	.column-right img {
		max-width: 100%;
		max-height: 100px;
		object-fit: contain;
	}

	.content {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	.content-row {
		padding: 5px;
	}

	.title {
		font-size: larger;
		font-weight: bold;
	}

	.tech-row {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}

	.tech-chip {
		margin-right: 5px;
		padding: 3px;
		border: 1px solid black;
		border-radius: 5px;
		font-size: small;
	}
</style>
