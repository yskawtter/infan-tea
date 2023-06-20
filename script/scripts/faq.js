export function faqModel() {
const fBox = document.querySelectorAll('.fBox')
fBox.forEach(f => {
    f.addEventListener('click', function() {
        f.children[1].classList.toggle('unhidden')
    })
})
}