export function dropdownContate() {
//     console.log('tes')
    const dropdowns = document.querySelectorAll('.dropdown')
    dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select')
    const caret = dropdown.querySelector('.caret')
    const menu = dropdown.querySelector('.menu')
    const options = dropdown.querySelectorAll('.menu li')
    const selected = dropdown.querySelector('.selected')
    const contratar = document.querySelector('.contratar-container')
    const paciente = document.querySelector('.paciente-cons-container')

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked')
        caret.classList.toString('caret-rotate')
        menu.classList.toggle('menu-open')
    })
    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText
            select.classList.remove('select-clicked')
            caret.classList.remove('caret-rotate')
            menu.classList.remove('menu-open')
            options.forEach(option => {
                option.classList.remove('active')
            })
            option.classList.add('active')
            const nomeClass = option.className
            console.log(nomeClass)

            if(nomeClass === 'contratar active') {
                contratar.classList.remove('hidden')
                paciente.classList.add('hidden')
            } else if (nomeClass === 'paciente active') {
                contratar.classList.add('hidden')
                paciente.classList.remove('hidden')
            }

        })
    })
})



}

console.log('test')