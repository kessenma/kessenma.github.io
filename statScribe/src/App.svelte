<script>
	let researchQuestion1 = '';
	let researchQuestion2 = '';
	let researchQuestion3 = '';
	let hypothesis = '';
	let uploadMessage = '';
</script>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 50px;
		font-family: Arial, sans-serif;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 20px;
		width: 300px;
	}
	label {
		font-size: 1.1em;
		color: #333;
	}
	input[type="text"] {
		padding: 10px;
		font-size: 1em;
		border: 1px solid #ccc;
		border-radius: 4px;
	}
	input[type="text"]:focus {
		border-color: #007bff;
		outline: none;
	}
	h1 {
		font-size: 2em;
		color: #333;
	}
	button {
		padding: 10px 20px;
		font-size: 1em;
		color: white;
		background-color: #007bff;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}
	button:hover {
		background-color: #0056b3;
	}
</style>

<main>
	<h1>Stat Scribe</h1>
	<form>
		<label>
			What are your research questions?
			<input type="text" bind:value={researchQuestion1} placeholder="Enter your research questions" />
		</label>
		<label>
			What are your research questions?
			<input type="text" bind:value={researchQuestion2} placeholder="Enter your research questions" />
		</label>
		<label>
			What are your research questions?
			<input type="text" bind:value={researchQuestion3} placeholder="Enter your research questions" />
		</label>
		<label>
			Do you have a hypothesis?
			<input type="text" bind:value={hypothesis} placeholder="Enter your hypothesis" />
		</label>
		<label>
			Please upload the paper(s) you'd like analyzed
			<input type="text" bind:value={uploadMessage} placeholder="Upload message" />
		</label>
		<button type="submit">Submit</button>
	</form>
</main>