<script lang="ts">
	import DarkModeToggle from './DarkModeToggle.svelte';
	import './app.postcss';

	import {toggleDarkMode} from "./theme"
</script>

<svelte:head>
	<!-- Load Dark Mode -->
	<script>
		// I thought about putting this in a DarkModeToggle component but then it would run twice if button is imported twice. So I thought of putting it in a .ts file but then it wouldn't run in the head. So this is as good a place as any
        // Copied from tailwind docs example
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}

        console.log("Hi!!")
	</script>
</svelte:head>

<div class="max-w-2xl mx-auto flex">
	<DarkModeToggle className="ml-auto  mb-1"/>
</div>

<main class="max-w-2xl mx-auto">
	<slot />
</main>

