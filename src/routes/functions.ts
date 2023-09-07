
export function toggleDarkMode() {
    if (localStorage.theme === "light") {
        localStorage.theme = 'dark';
        document.documentElement.classList.add('dark');
    }
    else {
        localStorage.theme = 'light'
        document.documentElement.classList.remove('dark');
    }
}
// Script to set dark mode on page load is in +layout.svelte