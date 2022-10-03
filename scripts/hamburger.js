const hamburgerBox = document.querySelector('.hamburgerBox');

hamburgerBox.addEventListener('click', ()=> {
    hamburgerBox.classList.toggle('active');
    document.querySelector('.listBox').classList.toggle('active');
    document.querySelector('#logo').classList.toggle('active');
});