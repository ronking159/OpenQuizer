<script>
    import PocketBase from 'pocketbase'
    import { onMount } from 'svelte';

    let pb
    onMount(() => {
        pb = new PocketBase(import.meta.env.PUBLIC_POCKETBASE)
    })
</script>

{#if pb?.authStore?.model}
    <a href="/settings" class="btn btn-secondary">{pb.authStore.model.username}</a>
{:else}
    <a href="/login" class="btn btn-primary text-white">Log in</a>
{/if}