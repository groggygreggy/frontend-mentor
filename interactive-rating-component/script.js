const submitBtn = document.querySelector('.submitBtn');
const ratingButtons = document.querySelectorAll('[data-rating]');
const form = document.querySelector('form');

// form.addEventListener(('submit'), (e) => {
//     e.preventDefault();
// })

var chosenRating;
for(button in ratingButtons){
    ratingButtons[button].onclick = (e) => {
        chosenRating = e.target.innerHTML;
        localStorage.setItem('chosenRating', chosenRating);
        ratingButtons.forEach(btn => {
            btn.classList.remove('selected');
        })
        e.target.classList.add('selected');
    }
    
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    window.open("thanks.html");
})