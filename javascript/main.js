function toggleMenu() {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('show');
}

document.querySelector('.menu-toggle').addEventListener('click', function () {
  document.querySelector('.nav-menu').classList.toggle('active');
});
