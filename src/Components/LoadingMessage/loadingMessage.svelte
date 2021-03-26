<script lang="ts">
    import Icon from 'svelte-awesome';
    import { spinner } from 'svelte-awesome/icons';

    export let message : string;
</script>

<style>
    div {
        font-size : 46px;
        text-align: center;
        color: #db000b;

        background: linear-gradient(268deg, #db000b, #ae0000);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>

<div>
    <span>
        ...{message}
    </span>
    <Icon scale="2" data={spinner} pulse/>
    
</div>