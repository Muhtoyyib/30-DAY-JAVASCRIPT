const container = document.getElementById("container");
let number 
for(let i = 0; i <= 100; i++){
    number = document.createElement('div');
    number.classList.add("col-1-of-6");

	let text = document.createElement('p');
	text.classList.add('text');
    text.textContent = i;
    text.style.fontSize = '2.4rem';
	number.appendChild(text);
    number.style.backgroundColor = '#c92a2a';

    if (i === 1) {
        number.style.backgroundColor = '#e67700';
    } else if(i > 1){
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                if( i % 2 === 0){
                    number.style.backgroundColor = '#2b8a3e';
                } else if(i % 2 !== 0){
                    number.style.backgroundColor = '#e67700';
                } 
            } 
        }
    }

    container.appendChild(number);
}

