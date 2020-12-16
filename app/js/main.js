
let burgerBtn = document.querySelector('.burger-menu');
let burgerItem = document.querySelectorAll('.burger-item');
let mobileMenu = document.querySelector('.mobile__menu');
burgerBtn.addEventListener('click',function(){
    burgerBtn.classList.toggle('border');
    burgerItem.forEach(function(event){
        event.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    })
   
})

