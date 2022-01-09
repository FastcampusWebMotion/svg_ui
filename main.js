const btnUp = document.querySelector('.btnUp');
const panel = document.querySelector('.panel');
const panel_li = panel.querySelectorAll('li');
const len = panel_li.length-1;

btnUp.addEventListener('click', e=>{
    e.preventDefault();

    let current_item = panel.querySelector('.on');
    let current_index = parseInt(current_item.getAttribute('data-index'));
    let next_index = null;

    (current_index !== len) ? next_index = current_index+1 : next_index=0;
    current_item.classList.remove('on');
    current_item.classList.add('up');

    panel_li[next_index].classList.add('down');
    setTimeout(()=>{
        panel_li[next_index].classList.remove('down');
        panel_li[next_index].classList.add('on');
        panel.querySelector('.up').classList.remove('up');
    },500);
})