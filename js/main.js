const slides = document.querySelectorAll('.slide');
    const item = document.querySelectorAll('.item');
    let slideIndex = 0;
    showSlide();
    console.log(slides);
    function showSlide(n){
        // if(slideIndex > slide.length - 1){
        //     slideIndex = slide.length - 1;
        // }
        if(slideIndex < 0){
            slideIndex =0;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (let i = 0; i < item.length; i++) {  
            item[i].className = item[i].className.replace(" active", "");
        }
        slides[slideIndex].style.display = "block";
        item[slideIndex].className += " active";
    }
    item.forEach((item, index) =>{
        item.addEventListener("click", function(){
            showSlide(slideIndex = index);
        })  
    })
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    const carousel = document.querySelector('.carousel');

    next.addEventListener("click", function(){
        carousel.scrollLeft += item[0].offsetWidth;
    } )

    prev.addEventListener("click", function(){
        carousel.scrollLeft -= item[0].offsetWidth;
    })



    // Musicas
    // const botao = document.querySelectorAll('.botao');
    // const audio = document.querySelectorAll('audio');
   
    // var musica = 0;
    
        
    //     function playMusica() {
    //         if (musica==0) {
    //        musica = 1;
    //        audio.play();
    //    }
    //    else{
    //     musica = 0;
    //        audio.pause();
    //    }
    //     }
        
    // audio.forEach(function(single, index){
    //     audioName = single.getAttribute("autoplay", "autoplay");
    // });