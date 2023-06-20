export function menuMobile() {
const overlay = document.querySelector('.ativarOvl')

const hamburguer2 = document.querySelector('.hamburguer')
const navUl = document.querySelector('.nav-ul')

hamburguer2.addEventListener('click', function() {
    this.classList.toggle('active2')
    navUl.classList.toggle('active2')
    const classActive = navUl.className
    console.log(navUl.className)

    if(classActive === 'nav-ul active2') {
        navUl.classList.add('active2')
        overlay.classList.remove('ativarOvl')
    } else {
        navUl.classList.remove('active2')
        overlay.classList.add('ativarOvl')
    }
})

function transfEle (e) {
    const el = e.target
    console.log(el)
    if(el.className === 'overlay') {
        navUl.classList.remove('active2')
        overlay.classList.add('ativarOvl')
    }
}
overlay.addEventListener('click', transfEle)

}

