const btnList = document.querySelectorAll('.btn-accordion')

btnList.forEach(btn =>{
    accordion(btn)
    
})

function accordion(btn){
    btn.addEventListener('click', () =>{
    const element = document.querySelector(btn.getAttribute("btn-target"))
    let query = "#" + btn.id + ' i'
    const icon = document.querySelector(query)   

    element.classList.toggle('collapse')
    icon.classList.toggle('fa-chevron-down')
    icon.classList.toggle('fa-chevron-up')
})
}