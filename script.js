const links = document.querySelectorAll('.link')

links.forEach(link => {
    const box = link.parentNode
    console.log(link.href)
    box.addEventListener('click', () => {
        window.open(link.href, "_self")
    })
})

