document.addEventListener('DOMContentLoaded', function () {
    const textElements = document.querySelectorAll('.char');

    function getRandomColor() {
        const randomColor = '#'  + Math.random().toString(16).substring(2,8);

        return randomColor;
    }

    function animateText() {
        textElements.forEach(char => {
            const textColor = getRandomColor();
            char.style.color = textColor;
        });

        document.body.style.backgroundColor = getRandomColor();
    }

    setInterval(animateText, 5000); 
});