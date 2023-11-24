
const form = document.getElementById('form');


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const mass = document.getElementById('mass').value.trim();
    const planet = document.getElementById('planets').value.trim().toLowerCase();
    
    if(mass != '' && planet != '' ){
        const output = document.getElementById('output');

        let firstDiv = document.createElement('div');
        firstDiv.classList.add('col-1-of-2');

        let img = document.createElement('img');
        img.classList.add('planet');
        img.src = `images/${planet}.png`;

        firstDiv.appendChild(img);

        let secondDiv = document.createElement('div');
        secondDiv.classList.add('col-1-of-2');
        secondDiv.classList.add('result');

        let h2 = document.createElement('h2');
        h2.classList.add('text');

        secondDiv.appendChild(h2);
        console.log(secondDiv);

        output.textContent = "";
        output.appendChild(firstDiv);
        output.appendChild(secondDiv);
       
        switch(planet){
            case 'mercury':
                h2.textContent = `Your weight on Mercury is ${(mass * 0.38).toFixed(2)} kg`;
                break;
            case 'venus':
                h2.textContent = `Your weight on Venus is ${(mass * 0.91).toFixed(2)} kg`;
                break;
            case 'earth':
                h2.textContent = `Your weight on Earth is ${(mass * 1).toFixed(2)} kg`;
                break;
            case 'mars':
                h2.textContent = `Your weight on Mars is ${(mass * 0.38).toFixed(2)} kg`;
                break;
            case 'jupiter':
                h2.textContent = `Your weight on Jupiter is ${(mass * 2.34).toFixed(2)} kg`;
                break;
            case 'saturn':
                h2.textContent = `Your weight on Saturn is ${(mass * 1.06).toFixed(2)} kg`;
                break;
            case 'uranus':
                h2.textContent = `Your weight on Uranus is ${(mass * 0.92).toFixed(2)} kg`;
                break;
            case 'neptune':
                h2.textContent = `Your weight on Neptune is ${(mass * 1.19).toFixed(2)} kg`;
                break;
            default:
                h2.textContent = "Please enter select a planet ";
    }
    form.reset();
} else if(mass == "" ){
        const output = document.getElementById('output');

        let div = document.createElement('div');
        div.classList.add('error');

        let h2 = document.createElement('h2');
        h2.textContent = "Please Input Mass";
        h2.style.textAlign = 'center';

        div.appendChild(h2);
        output.textContent = "";
        output.appendChild(div);
    }
})