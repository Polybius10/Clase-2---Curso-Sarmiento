const burguerMenu = document.getElementById('burguerMenu');
const navList = document.getElementById('navList');
const botonOscuro = document.querySelector('#botonOscuro')
// const body = document.body

burguerMenu.addEventListener('click', function () {
    navList.classList.toggle('active')
})

// botonOscuro.addEventListener('click', function () {
//     body.classList.add('dark-mode');
// });
