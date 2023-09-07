
export function toggleDarkMode() {
    if (localStorage.theme === "light") {
        enableDarkMode()
    }
    else {
        enableLightMode()
    }
}

export function enableDarkMode(){
    localStorage.theme = 'dark';
    document.documentElement.classList.add('dark');
}
export function enableLightMode(){
    localStorage.theme = 'light'
    document.documentElement.classList.remove('dark');
}

function enableSystemMode(){
    localStorage.removeItem('theme')
    // Might need to update document element
}

// running this is iffy with sveltekit as it likes to render stuff at build time (and on the server but I have that disabled for this app right now)
export function isDarkMode(){
    return localStorage.theme === "dark"
    // return document.documentElement.classList.contains("dark")
}
export function isLightMode(){
    return localStorage.theme === "light"
}


// Script to set dark mode on page load is in +layout.svelte