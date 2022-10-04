const hamburgerBox = document.querySelector('.hamburgerBox');
const listItem = document.querySelectorAll('.listItem');
const listBox = document.querySelector('.listBox');

hamburgerBox.addEventListener('click', ()=> {
    hamburgerBox.classList.toggle('active');
    listBox.classList.toggle('active');
    document.querySelector('#logo').classList.toggle('active');
});

listItem.forEach(item => {
    item.addEventListener('click', ()=> {
        hamburgerBox.classList.remove('active');
        listBox.classList.remove('active');
        document.querySelector('#logo').classList.remove('active');
    });
});