const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')
const text = document.getElementById('text')

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))

})

function highlightCups(idx) {
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling
    || smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--
    }

    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        }
        else {
            cup.classList.remove('full')
        }
    })
updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length

    const totalCups = smallCups.length

    if(fullCups === 0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    }
    else if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
        percentage.style.visibility = 'visible'
    }
    else {
        percentage.style.visibility = 'visible'
        remained.style.visibility = 'visible'
    }
    percentage.style.height = `${fullCups / totalCups * 330}px`
    text.innerText = `${fullCups / totalCups * 100}%`
    liters.innerText = `${(totalCups - fullCups) / totalCups * 2} L`
    
}