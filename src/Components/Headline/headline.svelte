<script lang='ts'>
    export let name : string;
</script>

<style>
    p {
        text-align: center;
        font-size: 56px;
        background: linear-gradient(268deg, #db000b, #ae0000);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        direction: rtl;
    }

    strong {
        font-size: 64px;
        text-decoration: underline;
    }
</style>

<p>{@html name}</p>