<script lang="ts">
	import { onMount } from "svelte";
	import { enableDarkMode, enableLightMode, isDarkMode, isLightMode } from "./theme";
    
    export let className:string = ""; //TODO: reasearch standard practice
    
    
    let darkMode = true;
    onMount(()=>{
        darkMode = isDarkMode()
    })

	function onClick() {
		if (isLightMode()) {
            enableDarkMode()
            darkMode = true
        }
        else {
            enableLightMode()
            darkMode = false
        }
	}


</script>

<button on:click={onClick} class="{className} leading-none">
    {#if darkMode}
        <p>Dark</p>
    {:else}
        <p>Light</p>
    {/if}
</button>



<!-- Script to set dark mode on page load is in +layout.svelte -->
