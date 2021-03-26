<script lang="ts">
	import getArticle from './getArticle';
	import Headline from './Components/Headline/headline.svelte';
	import RefreshButton from './Components/RefreshButton/refreshButton.svelte';

	let randomArticaleString = getArticle();
	const refreshArticle = () => {
		randomArticaleString = getArticle();
	}

</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Secular+One&display=swap');
	:global(body) {
		font-family: 'Secular One', sans-serif;
	}

	.test {
		text-align: right;
		margin-right: 15px;
		font-size: 32px;
	}
</style>


<p class='test'>מחולל כתבות צבע לחדשות 12</p>

<Headline name={randomArticaleString}/>
<RefreshButton onClick={refreshArticle}></RefreshButton>

