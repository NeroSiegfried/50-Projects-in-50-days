const faqs = document.querySelectorAll('.faq')
const buttons = document.querySelectorAll('.faq-toggle')

faqs.forEach(faq => faq.classList.remove('active'))

buttons.forEach((button, idx) => {
    button.addEventListener('click', () => {
        faq = faqs [idx]
        faq.classList.toggle('active')
    })
});