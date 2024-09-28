'use strict';


let menu=document.querySelectorAll('.menu_item');

menu.forEach(menu_item=>{
    let submenu=menu_item.querySelector('.submenu');
    let btn=menu_item.querySelector('.menu_b');


    menu_item.addEventListener('mouseenter',function(){
        submenu.classList.add('active');
        btn.classList.add('active');
        btn.style.backgroundColor=' black';
    })

    menu_item.addEventListener('mouseleave',function(){
        submenu.classList.remove('active');
        btn.classList.remove('active');
        btn.style.backgroundColor=' black';
    })

  

})