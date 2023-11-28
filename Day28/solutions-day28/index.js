const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let fullName = `${fname} ${lname}`;
    let country = document.getElementById("country").value;
    let score = document.getElementById("score").value;
    let formInvalid = document.getElementById("form-invalid");
        formInvalid.style.display = "block";

    if (fname == "" || lname == "" || country == "" || score == "") {
        formInvalid.innerHTML = "All fields are required.";
    } else{
        formInvalid.style.display = "none";
        let board = document.getElementById('board')
        let content = document.createElement('div');
        content.classList.add('content');

        let p1 = document.createElement('p');
        p1.classList.add('leader-board__values', 'leader-board__values-1');
        let p1Span1 = document.createElement('span');
        p1Span1.classList.add('name');
        p1Span1.innerHTML = fullName;
        let p1Span2 = document.createElement('span');
        p1Span2.classList.add('date');
        p1Span2.id = "date-time-paragraph"
        function updateDateTime() {
            const now = new Date();
            
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            
            const formattedDate = `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const formattedTime = `${hours}:${minutes}`;
            
            p1Span2.innerHTML = `${formattedDate} ${formattedTime}`;
        }
        updateDateTime();

        let p2 = document.createElement('p');
        p2.classList.add('leader-board__values', 'leader-board__values-2');
        p2.innerHTML = country;

        let p3 = document.createElement('p');
        p3.classList.add('leader-board__values', 'leader-board__values-3');
        p3.innerHTML = score;

        let p4 = document.createElement('p');
        p4.classList.add('leader-board__values', 'leader-board__values-4');

        let p4Span1 = document.createElement('span');
        p4Span1.classList.add('cta', 'cta__1');
        let p4Span1Span = document.createElement('span');
        p4Span1Span.classList.add('cta__text');
        p4Span1Span.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 svg">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>`
        p4Span1.addEventListener('click', () => {
            board.removeChild(content);
        })

        let p4Span2 = document.createElement('span');
        p4Span2.classList.add('cta', 'cta__2');
        let p4Span2Span = document.createElement('span');
        p4Span2Span.classList.add('cta__text');
        p4Span2Span.innerHTML = `+5`
        p4Span2.addEventListener('click', () => {
            score = parseFloat(score) + 5;
            p3.innerHTML = score;
        })

        let p4Span3 = document.createElement('span');
        p4Span3.classList.add('cta', 'cta__3');
        let p4Span3Span = document.createElement('span');
        p4Span3Span.classList.add('cta__text');
        p4Span3Span.innerHTML = `-5`
        p4Span3Span.addEventListener('click', () => { 
            score = parseFloat(score) - 5;
            p3.innerHTML = score;
        })

        console.log(score);



        p4Span1.appendChild(p4Span1Span);
        p4Span2.appendChild(p4Span2Span);
        p4Span3.appendChild(p4Span3Span);
        p4.appendChild(p4Span1);
        p4.appendChild(p4Span2);
        p4.appendChild(p4Span3);


        p1.appendChild(p1Span1);
        p1.appendChild(p1Span2);
        content.appendChild(p1);
        content.appendChild(p2);
        content.appendChild(p3);
        content.appendChild(p4);
        board.appendChild(content);

        form.reset();
    }
})



