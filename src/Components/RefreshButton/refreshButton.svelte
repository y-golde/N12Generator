<script lang="ts">
    export let onClick : () => void;


    const GENERATE_ANOTHER_ARTICLE = 'חולל עוד כתבה';
</script>

<style>
    div {
        text-align: center;
    }

    button {
        color: white;
        background: linear-gradient(268deg, #db000b, #ae0000);
        
        font-size: 36px;
        padding: 15px 30px;

        outline: 3px solid white;
        outline-offset: -10px;
    }
</style>

<div>
    <button on:click={onClick}>
        {GENERATE_ANOTHER_ARTICLE}
    </button>
</div>