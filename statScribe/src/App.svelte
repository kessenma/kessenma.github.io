<script lang="ts">
	let researchQuestions = [''];
	let hypotheses = [''];

	const addQuestion = () => {
		researchQuestions = [...researchQuestions, ''];
	};

	const addHypothesis = () => {
		hypotheses = [...hypotheses, ''];
	};
</script>

<style>
	.field-container {
		margin-bottom: 1rem;
	}
	.add-button {
		margin-top: 0.5rem;
		cursor: pointer;
		color: blue;
	}
</style>

<div class="container">
	<h1>Stat Scribe</h1>

	{#each researchQuestions as question, index (index)}
		<div class="field-container">
			<label for="question-{index}">What are your research questions?</label>
			<input type="text" id="question-{index}" bind:value={researchQuestions[index]} placeholder="Enter your research question" />
		</div>
	{/each}

	<div class="add-button" on:click={addQuestion}>
		Add another research question
	</div>

	{#each hypotheses as hypothesis, index (index)}
		<div class="field-container">
			<label for="hypothesis-{index}">Do you have a hypothesis?</label>
			<input type="text" id="hypothesis-{index}" bind:value={hypotheses[index]} placeholder="Enter your hypothesis" />
		</div>
	{/each}

	<div class="add-button" on:click={addHypothesis}>
		Add another hypothesis
	</div>

	<div class="field-container">
		<label for="file-upload">Please upload the paper(s) you'd like analyzed</label>
		<input type="file" id="file-upload" />
	</div>

	<button type="submit">Submit</button>
</div>