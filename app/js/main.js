
let burgerBtn = document.querySelector('.burger-menu');
let burgerItem = document.querySelectorAll('.burger-item');
burgerBtn.addEventListener('click',function(){
    burgerItem.forEach(function(event){
        event.classList.toggle('active');
        
    })
   
})
