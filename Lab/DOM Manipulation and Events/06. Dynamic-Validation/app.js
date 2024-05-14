function validate() {
    let inputEmailElement = document.getElementById('email');
    let pattern = /^[a-z]+@[a-z]+\.[a-z]+/g;

    inputEmailElement.addEventListener('change', (event) =>{
        if (!pattern.test(inputEmailElement.value)) {
            inputEmailElement.classList.add('error');
        }else{
            inputEmailElement.classList.remove('error');
        }
    });  
}