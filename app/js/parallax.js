// Text parallax
window.addEventListener('scroll',function(e){
    let scrollTop = this.pageYOffset;
    let text = document.querySelector('.header-text');
    text.style.transform = `translate(0%,${scrollTop/2}px)`;
})