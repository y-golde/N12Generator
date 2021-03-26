<script lang="ts">
	import getRandomFormat from './Formats/formats';
	import Headline from './Components/Headline/headline.svelte';
	import RefreshButton from './Components/RefreshButton/refreshButton.svelte';
	import GitHubReference from './Components/GitHubReference/githubRefernce.svelte';

	let randomArticaleString = getRandomFormat();

	const refreshArticle = () => {
		randomArticaleString = getRandomFormat();
	}

	const MAIN_HEADLINE = 'מחולל כתבות צבע לחדשות 12';
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Secular+One&display=swap');
	:global(body) {
		font-family: 'Secular One', sans-serif;
	}

	.main-headline {
		text-align: right;
		margin-right: 15px;
		font-size: 32px;
	}
</style>

<div class='main-headline'>{MAIN_HEADLINE}</div>

<Headline name={randomArticaleString}/>

<RefreshButton onClick={refreshArticle}></RefreshButton>

<GitHubReference />
