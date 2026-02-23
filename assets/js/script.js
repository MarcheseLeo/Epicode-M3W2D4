// Lista di bottoni freccia
const btnList = document.querySelectorAll('.btn-accordion')

btnList.forEach(btn => {
    accordionToggle(btn)

})

// Funzione per aprire e chiudere gli accordion
function accordionToggle(btn) {
    btn.addEventListener('click', () => {
        const element = document.querySelector(btn.getAttribute("btn-target"))
        let query = "#" + btn.id + ' i'
        const icon = document.querySelector(query)

        element.classList.toggle('collapse')
        icon.classList.toggle('fa-chevron-down')
        icon.classList.toggle('fa-chevron-up')
    })
}

//Funzione per contare le carte
function CardCount () {
    const sectionList = document.querySelectorAll("section:not(:first-child, :last-child)")
    console.log(sectionList)
    sectionList.forEach(section =>{
        let row = section.childNodes[3]
        console.log(row)
    })
}
CardCount()
// Oggetti della barra di navigazione
const navItems = document.querySelectorAll('.nav-item:not(:first-child)')

navItems.forEach(navItem =>{
    navItem.addEventListener('click', (e)=>{
        const arr = e.target.href.split('#')
        let ref = "#" + arr[1] 
        
        
        const target = document.querySelector(ref + " .btn-accordion i")
        const btn = document.querySelector(ref + " .btn-accordion")

        target.classList.forEach(classe => {
            if(classe === "fa-chevron-down"){
            btn.click()
            console.log("cliccato")
        }

        })


    })
})