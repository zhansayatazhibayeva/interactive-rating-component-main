const ratings = document.querySelectorAll('.rating');
const submitBtn = document.querySelector('.submit-btn');

let selectedRating = 0;

ratings.forEach(rating => {
    rating.addEventListener('click',() => {
        ratings.forEach(r => r.classList.remove('selected'));
        rating.classList.add('selected');
        selectedRating = rating.getAttribute('data-rating');
    });
});

submitBtn.addEventListener('click', ()=> {
    if(selectedRating){
        document.getElementById('rating-state').style.display = 'none';
        document.getElementById('thank-you-state').style.display = 'block';
        document.getElementById('selected-rating').textContent = selectedRating;
        document.getElementsByClassName('icon-img').style = 'none';
    }
    else{
        alert('Please select a rating before submitting.')
    }
});

