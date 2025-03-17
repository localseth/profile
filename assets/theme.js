const prefersLightTheme = window.matchMedia('(prefers-color-scheme: light)').matches;
const currentTheme = () => sessionStorage.getItem('theme');
const root = document.querySelector(':root');
const themeSwitch = document.querySelector('.switch input');
const iconList = document.querySelectorAll('.icon-list i');
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
        iconList.forEach(i => i.classList.remove('colored'));
        themeSwitch.checked = true;
    } else if (root.classList.contains('dark')) {
        root.classList.remove('dark');
        iconList.forEach(i => i.classList.add('colored'));
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
        iconList.forEach(i => i.classList.add('colored'));
    } else {
        sessionStorage.removeItem('theme');
        sessionStorage.setItem('theme', 'dark');
        root.classList.add('dark');
        iconList.forEach(i => i.classList.remove('colored'));
    }
};
