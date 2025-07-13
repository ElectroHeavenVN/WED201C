function changeTheme() {
    let theme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
    localStorage.setItem("theme", theme === 'light' ? 'dark' : 'light');
}
document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("theme"))
        localStorage.setItem("theme", (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
    let theme = localStorage.getItem("theme");
    document.documentElement.setAttribute('data-theme', theme);
    document.getElementById('chk').checked = theme === 'light';
    document.getElementById("chk").addEventListener("change", changeTheme);
});