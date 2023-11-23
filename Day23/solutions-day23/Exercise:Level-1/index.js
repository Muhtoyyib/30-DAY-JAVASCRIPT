const container = document.getElementById("container");
let form = document.querySelector('form');
let errorMsg = document.getElementById('error-msg');
errorMsg.style.color = "#fa5252";
let number 

// Display intial 50 numbers
function generateNumbers(threshold) {
    container.innerHTML = "";
    for(let i = 0; i <= threshold; i++){
        number = document.createElement('div');
        number.classList.add("col-1-of-6");
    
        let text = document.createElement('p');
        text.classList.add('text');
        text.textContent = i;
        text.style.fontSize = '2.4rem';
        number.appendChild(text);
        number.style.backgroundColor = '#c92a2a';
    
        if (i === 1) {
            number.style.backgroundColor = '#fab005';
        } else if(i > 1){
            for (let j = 2; j < i; j++) {
                if (i % j === 0) {
                    if( i % 2 === 0){
                        number.style.backgroundColor = '#2b8a3e';
                    } else if(i % 2 !== 0){
                        number.style.backgroundColor = '#fab005';
                    } 
                } 
            }
        }
    
        container.appendChild(number);
    }  
}

// Display 50 Numbers on page load
document.readyState === 'loading' ? generateNumbers(50) : null;

// Display numbers based on user input
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let searhInput = document.getElementById('search-field').value;
    console.log(typeof searhInput);

    if(searhInput.length === 0){
        errorMsg.innerHTML = "Enter number value in the input field to generate number(s)";
    } else{
        errorMsg.innerHTML = "";
        generateNumbers(searhInput);
    }
    
})

