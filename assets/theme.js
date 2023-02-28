const root = document.querySelector(':root');
// const themeSwitcher = document.getElementById('theme-switcher');

const themeSwitcher = () => {
    console.log('theme swticher called');
    if (root.classList.contains('dark')) {
        root.classList.remove('dark');
    } else {
        root.classList.add('dark');
    }
};