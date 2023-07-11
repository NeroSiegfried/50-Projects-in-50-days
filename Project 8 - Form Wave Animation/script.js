const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    n = label.innerText.length
    label.innerHTML = label.innerText
    .split('').map((letter, idx) => `<span 
    style="transition-delay:${idx * 250/n}ms">${letter}</span>`)
    .join('')

})