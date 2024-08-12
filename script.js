const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.querySelector('.question').addEventListener('click', () => {
        faq.querySelector('.answer').classList.toggle('show');

        const answer = faq.querySelector('.answer');
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});