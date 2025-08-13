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
    document.querySelector('img.mal').addEventListener('mouseover', function () {
        this.setAttribute('src', 'img/MyAnimeList-colored.svg');
    });
    document.querySelector('img.mal').addEventListener('mouseout', function () {
        this.setAttribute('src', 'img/MyAnimeList.svg');
    });

    const cardContent = document.querySelector('.card-content');
    const cursorFollower = document.querySelector('.cursor-follower');

    document.addEventListener("pointermove", (event) => {
        const rect = cardContent.getBoundingClientRect();
        let mouseX = event.clientX - rect.left - 15;
        let mouseY = event.clientY - rect.top - 15;
        if (event.pointerType !== 'mouse') {
            if (!event.isPrimary) return;
            cursorFollower.style.left = mouseX + 'px';
            cursorFollower.style.top = mouseY + 'px';
        }
        else {
            cursorFollower.animate({
                left: `${mouseX}px`,
                top: `${mouseY}px`
            }, { duration: 1000, fill: "forwards" });
        }
    });
    document.addEventListener("pointerdown", (event) => {
        if (event.pointerType === 'mouse') return;
        cursorFollower.classList.remove('fade');
        const rect = cardContent.getBoundingClientRect();
        let mouseX = event.clientX - rect.left - 15;
        let mouseY = event.clientY - rect.top - 15;
        cursorFollower.style.left = mouseX + 'px';
        cursorFollower.style.top = mouseY + 'px';
    });
    document.addEventListener("pointerup", (event) => {
        if (event.pointerType === 'mouse') return;
        cursorFollower.classList.add('fade');
    });
    document.addEventListener("pointercancel", (event) => {
        if (event.pointerType === 'mouse') return;
        cursorFollower.classList.add('fade');
    });
});