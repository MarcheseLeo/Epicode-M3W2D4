const btn = document.querySelector('.btn-accordion')
console.log(btn.getAttribute("btn-target"))

btn.addEventListener('click', () =>{
    const element = document.querySelector(btn.getAttribute("btn-target"))
    element.classList.toggle('collapse')
    btn.lastChild.classList.toggle('fa-chevron-down')
    btn.lastChild.classList.toggle('fa-chevron-up')


})