<script lang="ts">
	import getRandomFormat from './Formats/formats';
	import Headline from './Components/Headline/headline.svelte';
	import RefreshButton from './Components/RefreshButton/refreshButton.svelte';
	import LoadingMessage from './Components/LoadingMessage/loadingMessage.svelte';
	import getRandomLoadingMessage from './LoadingMessages/getRandomLoadingMessage';
	import GitHubReference from './Components/GitHubReference/githubRefernce.svelte';

	let randomArticaleString = getRandomFormat();
	let randomLoadingMessage = getRandomLoadingMessage();
	let isLoading = false;

	const refreshArticle = () => {
		isLoading = true;
		randomLoadingMessage = getRandomLoadingMessage()
		setTimeout( () => {
			randomArticaleString = getRandomFormat();
			isLoading = false;
		} , 750)
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

{#if isLoading}
	<LoadingMessage message={randomLoadingMessage}/>
{:else}
	<Headline name={randomArticaleString}/>
{/if}


<RefreshButton onClick={refreshArticle}></RefreshButton>

<GitHubReference />
