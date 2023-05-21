const menu_icon  = document.querySelector('#menu_icon');
const menu  = document.querySelector('#menu');


menu_icon.addEventListener('click', () =>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
    }
    else{
        menu.classList.add('hidden')
    }
})