const key__name__container = document.getElementsByClassName('key__name-container');
const key__code__container = document.getElementsByClassName('key__code-container');


document.body.addEventListener('keypress', e => {
    key__name__container[0].innerHTML = `You pressed <span class="key-name"> ${e.key}</span>`;
    key__code__container[0].style.display = 'block';
    key__code__container[0].innerHTML = `<span class="key-code"> ${e.keyCode}</span>`;
  })