const prefersLightTheme = window.matchMedia('(prefers-color-scheme: light)').matches;
const currentTheme = () => sessionStorage.getItem('theme');
const root = document.querySelector(':root');
const themeSwitch = document.querySelector('.switch input');
// const themeSwitcher = document.getElementById('theme-switcher');

const defaultTheme = () => {
    if (!prefersLightTheme) {
        return 'dark';
    } else {
        return 'light';
    }
};

const initializeTheme = () => {
    if (currentTheme() === 'dark') {
        root.classList.add('dark');
        themeSwitch.checked = true;
    } else if (root.classList.contains('dark')) {
        root.classList.remove('dark');
    }
}

const checkOrSetTheme = () => {
    if (sessionStorage.getItem('theme')) {
        initializeTheme();
    } else {
        sessionStorage.setItem('theme', defaultTheme());
        initializeTheme();
    }
}

window.addEventListener('load', checkOrSetTheme);

const themeSwitcher = () => {
    console.log('theme swticher called', currentTheme());
    if (currentTheme() === 'dark') {
        sessionStorage.removeItem('theme');
        sessionStorage.setItem('theme', 'light');
        root.classList.remove('dark');
    } else {
        sessionStorage.removeItem('theme');
        sessionStorage.setItem('theme', 'dark');
        root.classList.add('dark');
    }
};