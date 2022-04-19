function submitForm(e){
    let outputContainer = document.getElementById('js-rating-output');
    let selectedRating = document.querySelector("input:checked + label");
    if(selectedRating !== null){
        outputContainer.innerHTML = selectedRating.textContent;
    }
    document.querySelector(".rating").classList.toggle("hidden");
    document.querySelector(".thank-you").classList.toggle("hidden");
}

let submitButton = document.querySelector('button[type="button"]');
submitButton.addEventListener('click', submitForm);

